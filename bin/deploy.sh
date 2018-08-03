#!/usr/bin/env bash

if [[ -f .env ]]; then
  set -a
  source .env
fi

awsProfile() {
  if [[ -n $PROFILE ]]; then
    aws --profile $PROFILE "$@"
  else
    aws "$@"
  fi
}

set -e
set -x
awsProfile cloudformation package --template ./config/cloudformation.yaml --s3-bucket $S3BUCKET_SOURCE --output-template packaged-sam.yaml --region $REGION "${@:2}"
awsProfile cloudformation deploy --template-file packaged-sam.yaml --stack-name $CLOUDFORMATION_STACK_NAME --capabilities CAPABILITY_IAM --region $REGION "${@:2}"
