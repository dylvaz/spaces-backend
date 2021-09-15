import { APIGatewayProxyEvent } from 'aws-lambda';
import { handler } from '../services/SpacesTable/Create';

const event: APIGatewayProxyEvent = {
  body: {
    name: 'Eiffel Tower',
    location: 'Paris',
  },
} as any;

handler(event, {} as any).then((res) => {
  console.log({ res });
  console.log(123);
});
