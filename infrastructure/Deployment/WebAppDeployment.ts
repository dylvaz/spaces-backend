import { CfnOutput, Stack } from 'aws-cdk-lib';
import { CloudFrontWebDistribution } from 'aws-cdk-lib/lib/aws-cloudfront';
import { Bucket } from 'aws-cdk-lib/lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/lib/aws-s3-deployment';
import { join } from 'path';

export class WebAppDeployment {
  private stack: Stack;
  private bucketSuffix: string;

  private deploymentBucket: Bucket;

  constructor(stack: Stack, bucketSuffix: string) {
    this.stack = stack;
    this.bucketSuffix = bucketSuffix;
    this.initialize();
  }

  private initialize() {
    const bucketName = 'spaces-app-web' + this.bucketSuffix;
    this.deploymentBucket = new Bucket(this.stack, 'spaces-app-web', {
      bucketName,
      publicReadAccess: true,
      websiteIndexDocument: 'index.html',
    });
    new BucketDeployment(this.stack, 'space-app-web-deployment', {
      destinationBucket: this.deploymentBucket,
      sources: [
        Source.asset(
          join(__dirname, '..', '..', '..', 'spaces-frontend', 'build')
        ),
      ],
    });
    new CfnOutput(this.stack, 'spacesWebAppS3Url', {
      value: this.deploymentBucket.bucketWebsiteUrl,
    });

    const cloudFront = new CloudFrontWebDistribution(
      this.stack,
      'spaces-app-cloudfront-dist',
      {
        originConfigs: [
          {
            behaviors: [
              {
                isDefaultBehavior: true,
              },
            ],
            s3OriginSource: {
              s3BucketSource: this.deploymentBucket,
            },
          },
        ],
      }
    );

    new CfnOutput(this.stack, 'spacesWebAppCloudFrontUrl', {
      value: cloudFront.distributionDomainName,
    });
  }
}
