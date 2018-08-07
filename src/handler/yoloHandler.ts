import { getLogger } from '../helpers/logging';
import { yolo } from '../processor/yolo';
import { APIGatewayEvent, Context, ProxyCallback, APIGatewayProxyResult } from '../../node_modules/@types/aws-lambda';

const logger = getLogger();

export const yoloHandler = (_event: APIGatewayEvent, _context: Context, callback: ProxyCallback) => {
  const result: APIGatewayProxyResult = {
    statusCode: 200,
    body: JSON.stringify({
      message: yolo(),
    }),
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  };
  logger.info('Yay!');
  callback(null, result);
};
