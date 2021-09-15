import { DynamoDB } from 'aws-sdk';
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from 'aws-lambda';

import { addCorsHeader } from '../Shared/Utils';

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
    const spaceId = event.queryStringParameters?.spaceId;

    if (spaceId) {
      const deleteResult = await dbClient
        .delete({
          TableName: TABLE_NAME!,
          Key: {
            [PRIMARY_KEY]: spaceId,
          },
        })
        .promise();
      result.body = JSON.stringify(deleteResult);
    }
  } catch (err) {
    result.body = err as any;
  }
  return result;
};

export { handler };
