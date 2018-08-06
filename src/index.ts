import { APIGatewayEvent, Context, ProxyCallback, APIGatewayProxyResult } from '../node_modules/@types/aws-lambda';
import { getLogger } from './helpers/logging';

const logger = getLogger();

export const handler = (_event: APIGatewayEvent, _context: Context, callback: ProxyCallback) => {
  const result: APIGatewayProxyResult = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'YOLO test!',
    }),
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  };
  logger.info('Yay!');
  callback(null, result);
};
