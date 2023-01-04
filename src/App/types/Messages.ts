export interface ErrorMessages {
  user: {
    emptyValues: string;
    alreadyExists: string;
    notFound: string;
    wrongPassword: string;
  };
  auth: {
    authNotExists: string;
    invalidToken: string;
  };
}
