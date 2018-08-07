import { getLogger } from '../helpers/logging';
import { S3Event, Context, ProxyCallback, APIGatewayProxyResult } from '../../node_modules/@types/aws-lambda';
import * as aws from 'aws-sdk';

const logger = getLogger();

const s3 = new aws.S3({ apiVersion: '2016-03-01' });

export const myBucketHandler = (event: S3Event, _context: Context, callback: ProxyCallback) => {
  const bucket = event.Records[0].s3.bucket.name;
  const key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));
  const params = {
    Bucket: bucket,
    Key: key,
  };

  s3.getObject(params, (err: aws.AWSError, data: aws.S3.Types.GetObjectOutput) => {
    if (err) {
      logger.error(err);
      const errorMsg = `
      Error getting object ${key} from bucket ${bucket}.
      Make sure they exist and your bucket is in the same region as this function.
      `;
      logger.error(errorMsg);
      callback(errorMsg);
      return;
    }

    logger.info(JSON.stringify(data));
    const contentType = data.ContentType !== null ? data.ContentType : 'Unknown';
    logger.info(`Content type: ${contentType}`);
    const result: APIGatewayProxyResult = {
      statusCode: 200,
      body: JSON.stringify({
        message: contentType,
      }),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    };

    callback(null, result);
  });

};
