import { Request, Response } from 'express';

import { IUser } from '@app/types';

import { User } from '@app/Models';

import { errorMessages } from '@utils/constants';
import { Crypter, Token } from '@app/libs';
import { UnauthorizedError } from '@app/helpers';

class AuthController {
  async authenticate(req: Request, res: Response) {
    const { username, password }: IUser = req.body;

    const user: Partial<IUser> | null = await User.findOne({ username });

    User.validateEmpty(username, password);
    User.validateNotExists(user);

    const crypter = new Crypter();
    const token = new Token();

    const isValidPassword = await crypter.compare(password, user?.password!);

    if (!isValidPassword) {
      throw new UnauthorizedError(errorMessages.user.wrongPassword);
    }

    const authToken = token.createAuth({ id: user?.id });

    delete user?.password;

    return res.status(201).json({ user, token: authToken });
  }
}

export default new AuthController();
