# Basic Cloudformation lambda
A cloudformation example of using SAM.

# Setup
- Make sure you have your AWS configured in your local. ``aws configure``
- Add the environment variables to circle CI environment setting.

# Installing SAM
- ``npm install -g aws-sam-local``

# Start the SAM api gateway
``sam local start-api --template ./config/cloudformation.yaml``

# Invoke SAM manually
``sam local invoke "MyBucketDisplayLambda" -e sample.json --template ./config/cloudformation.yaml``

Sample sample.json
```
{
  "Records": [
    {
      "eventVersion": "2.0",
      "eventTime": "1970-01-01T00:00:00.000Z",
      "requestParameters": {
        "sourceIPAddress": "127.0.0.1"
      },
      "s3": {
        "configurationId": "testConfigRule",
        "object": {
          "eTag": "ETAG-NAME-HERE",
          "sequencer": "0A1B2C3D4E5F678901",
          "key": "FILENAME-HERE.json",
          "size": 1024
        },
        "bucket": {
          "arn": "arn:aws:s3:::mybucket",
          "name": "BUCKET-NAME-HERE",
          "ownerIdentity": {
            "principalId": "EXAMPLE"
          }
        },
        "s3SchemaVersion": "1.0"
      },
      "responseElements": {
        "x-amz-id-2": "EXAMPLE123/5678abcdefghijklambdaisawesome/mnopqrstuvwxyzABCDEFGH",
        "x-amz-request-id": "EXAMPLE123456789"
      },
      "awsRegion": "us-east-1",
      "eventName": "ObjectCreated:Put",
      "userIdentity": {
        "principalId": "EXAMPLE"
      },
      "eventSource": "aws:s3"
    }
  ]
}
```

# Resources
- https://github.com/awslabs/aws-sam-cli
- https://github.com/awslabs/serverless-application-model
- https://docs.aws.amazon.com/lambda/latest/dg/serverless_app.html
