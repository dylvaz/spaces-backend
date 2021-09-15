import { DynamoDB } from 'aws-sdk';
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from 'aws-lambda';

import { addCorsHeader, getEventBody } from '../Shared/Utils';

const TABLE_NAME = process.env.TABLE_NAME;
const PRIMARY_KEY = process.env.PRIMARY_KEY!;
const dbClient = new DynamoDB.DocumentClient();

const handler = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  const result: APIGatewayProxyResult = {
    statusCode: 200,
    body: 'Hello from DynamoDB',
  };

  addCorsHeader(result);
  try {
    const requestBody = getEventBody(event);
    const spaceId = event.queryStringParameters?.spaceId;

    if (requestBody && spaceId) {
      const requestBodyKey = Object.keys(requestBody)[0];
      const requestBodyValue = requestBody[requestBodyKey];

      const updateResult = await dbClient
        .update({
          TableName: TABLE_NAME!,
          Key: {
            [PRIMARY_KEY]: spaceId,
          },
          UpdateExpression: 'set #key = :newValue',
          ExpressionAttributeNames: {
            '#key': requestBodyKey,
          },
          ExpressionAttributeValues: {
            ':newValue': requestBodyValue,
          },
          ReturnValues: 'UPDATED_NEW',
        })
        .promise();
      result.body = JSON.stringify(updateResult);
    }
  } catch (err) {
    result.body = err as any;
  }

  return result;
};

export { handler };
