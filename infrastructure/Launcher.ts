import { App } from 'aws-cdk-lib';

import { SpacesStack } from './SpacesStack';

const app = new App();

new SpacesStack(app, 'Spaces', {
  stackName: 'Spaces',
});
