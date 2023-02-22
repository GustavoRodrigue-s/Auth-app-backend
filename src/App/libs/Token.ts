import jwt from 'jsonwebtoken';

import { userTokenExpiration } from '@utils/constants';

type Payload = string | object | Buffer;

export class Token {
  private create(
    payload: Payload,
    secretKey: jwt.Secret,
    options?: jwt.SignOptions | undefined
  ) {
    return jwt.sign(payload, secretKey, options);
  }

  private verify(token: string, secretKey: jwt.Secret) {
    return jwt.verify(token, secretKey);
  }

  private getTokenKey() {
    return process.env.SECURITY_TOKEN_KEY as string;
  }

  read(token: string) {
    return token.replace('Bearer', '').trim();
  }

  createAuth(payload: Payload) {
    return this.create(payload, this.getTokenKey(), {
      expiresIn: userTokenExpiration,
    });
  }

  verifyAuth(token: string) {
    return this.verify(token, this.getTokenKey());
  }
}
