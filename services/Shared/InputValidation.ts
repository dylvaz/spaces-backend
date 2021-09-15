import { Space } from './Model';
class MissingFieldError extends Error {}
const validateAsSpaceEntry = (arg: any) => {
  if (!(arg as Space).name) {
    throw new MissingFieldError('Value for name is required!');
  }
  if (!(arg as Space).location) {
    throw new MissingFieldError('Value for location is required!');
  }
  if (!(arg as Space).spaceId) {
    throw new MissingFieldError('Value for location is required!');
  }
};

export { MissingFieldError, validateAsSpaceEntry };
