import { Request, Response, NextFunction } from 'express';

import { UnauthorizedError } from '@app/helpers';
import { Token } from '@app/libs';

import { errorMessages } from '@utils/constants/messages';

interface TokenPayload {
  id: string;
  iad: number;
  exp: number;
}

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  const token = new Token();

  if (!authorization) {
    throw new UnauthorizedError(errorMessages.auth.authNotExists);
  }

  const authToken = token.read(authorization);

  try {
    const data = token.verifyAuth(authToken);

    const { id } = data as TokenPayload;

    req.userId = id;

    return next();
  } catch {
    throw new UnauthorizedError(errorMessages.auth.invalidToken);
  }
};
