import * as cdk from 'aws-cdk-lib';
import { aws_lambda as lambda } from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class SpudifyStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const spudifyFunction = new lambda.Function(this, 'SpudifyFn', {
      code: lambda.Code.fromAsset('./app/lambda/'),
      runtime: lambda.Runtime.PYTHON_3_11,
      handler:'spudifyFn.handler'
    });
  }
}
