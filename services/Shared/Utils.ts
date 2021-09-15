import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

const generateRandomId = (): string => {
  return Math.random().toString(36).slice(2);
};

const getEventBody = (event: APIGatewayProxyEvent) => {
  return typeof event.body === 'object' ? event.body : JSON.parse(event.body);
};

const addCorsHeader = (result: APIGatewayProxyResult) => {
  result.headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
  };
};

export { addCorsHeader, generateRandomId, getEventBody };
