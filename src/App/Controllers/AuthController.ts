import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { IUser } from '../types';

import { prisma } from '../../database/prismaClient';

import { Message } from '../utils';
import { errorMessages } from '../utils/constants/messages';
import { userTokenExpiration } from '../utils/constants/tokens';

class AuthController {
  async authenticate(req: Request, res: Response) {
    const { username, password }: IUser = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json(Message.error(errorMessages.user.emptyValues));
    }

    const user: Partial<IUser> | null = await prisma.user.findFirst({
      where: { username },
    });

    if (!user) {
      return res.status(401).json(Message.error(errorMessages.user.notFound));
    }

    const isValidPassword = await bcrypt.compare(password, user.password!);

    if (!isValidPassword) {
      return res
        .status(401)
        .json(Message.error(errorMessages.user.wrongPassword));
    }

    const token = jwt.sign(
      { id: user.id },
      process.env.SECURITY_TOKEN_KEY as string,
      { expiresIn: userTokenExpiration }
    );

    delete user.password;

    return res.status(201).json({ user, token });
  }
}

export default new AuthController();
