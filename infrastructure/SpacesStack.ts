import { CfnOutput, Fn, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { RestApi } from 'aws-cdk-lib/lib/aws-apigateway';
import { Bucket, HttpMethods } from 'aws-cdk-lib/lib/aws-s3';

import { GenericTable } from './GenericTable';
import { AuthWrapper } from './Auth/AuthWrapper';
import { WebAppDeployment } from './Deployment/WebAppDeployment';

export class SpacesStack extends Stack {
  private api = new RestApi(this, 'spaces-api');
  private authorizer: AuthWrapper;
  private suffix: string;
  private spacesPhotoBucket: Bucket;

  private spacesTable = new GenericTable(this, {
    tableName: 'SpacesTable',
    primaryKey: 'spaceId',
    createLambdaPath: 'Create',
    readLambdaPath: 'Read',
    updateLambdaPath: 'Update',
    deleteLambdaPath: 'Delete',
    secondaryIndexes: ['location'],
  });

  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    this.initializeSuffix();
    this.initializeSpacesPhotoBucket();

    this.authorizer = new AuthWrapper(
      this,
      this.api,
      this.spacesPhotoBucket.bucketArn + '/*'
    );

    new WebAppDeployment(this, this.suffix);
    // spaces API integration
    const spaces = this.api.root.addResource('spaces');
    spaces.addMethod('POST', this.spacesTable.createLambdaIntegration);
    spaces.addMethod('GET', this.spacesTable.readLambdaIntegration);
    spaces.addMethod('PATCH', this.spacesTable.updateLambdaIntegration);
    spaces.addMethod('DELETE', this.spacesTable.deleteLambdaIntegration);
  }

  private initializeSuffix() {
    const shortStackId = Fn.select(2, Fn.split('/', this.stackId));
    const suffix = Fn.select(4, Fn.split('-', shortStackId));
    this.suffix = suffix;
  }

  private initializeSpacesPhotoBucket() {
    this.spacesPhotoBucket = new Bucket(this, 'spaces-photos', {
      bucketName: 'spaces-photos-' + this.suffix,
      cors: [
        {
          allowedMethods: [HttpMethods.HEAD, HttpMethods.GET, HttpMethods.PUT],
          allowedOrigins: ['*'],
          allowedHeaders: ['*'],
        },
      ],
    });
    new CfnOutput(this, 'spaces-photos-bucket-name', {
      value: this.spacesPhotoBucket.bucketName,
    });
  }
}
