import { ErrorMessages } from '@app/types';

export const errorMessages: ErrorMessages = {
  user: {
    emptyValues: 'username or password are empty(s)',
    alreadyExists: 'user already exists',
    notFound: 'user not found',
    wrongPassword: 'this password is wrong',
  },
  auth: {
    authNotExists: 'authorization not exists',
    invalidToken: 'token is not valid',
  },
};
