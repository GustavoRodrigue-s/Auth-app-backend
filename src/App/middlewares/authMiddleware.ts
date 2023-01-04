import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { Message } from '../utils';
import { errorMessages } from '../utils/constants/messages';

interface TokenPayload {
  id: string;
  iad: number;
  exp: number;
}

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res
      .status(401)
      .json(Message.error(errorMessages.auth.authNotExists));
  }

  const token = authorization.replace('Bearer', '').trim()!;

  try {
    const data = jwt.verify(token, process.env.SECURITY_TOKEN_KEY as string);

    const { id } = data as TokenPayload;

    req.userId = id;

    return next();
  } catch {
    res.status(401).json(Message.error(errorMessages.auth.invalidToken));
  }
}
