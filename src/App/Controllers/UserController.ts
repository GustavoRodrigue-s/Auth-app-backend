import { Request, Response } from 'express';
import { prisma } from '../../database/prismaClient';

import { errorMessages } from '../utils/constants/messages';

import { User } from '../Models';
import { IUser } from '../types';

import { Message } from '../utils';

class UserController {
  index(req: Request, res: Response) {
    const id = req.userId;

    return res.status(200).json({ id });
  }

  async store(req: Request, res: Response) {
    const { username, password }: IUser = req.body;

    const user = new User(username, password);

    const userExists = await prisma.user.findFirst({
      where: { username },
    });

    const { message, status } = user.handleStore(userExists);

    if (message !== 'success') {
      return res.status(status!).json(Message.error(message));
    }

    user.hashPassword();

    const userCreated: Partial<IUser> = await prisma.user.create({
      data: user,
    });

    delete userCreated.password;

    return res.status(201).json(userCreated);
  }

  async getStore(req: Request, res: Response) {
    const id = req.userId;

    const user: Partial<IUser | null> = await prisma.user.findFirst({
      where: { id },
    });

    if (!user) {
      return res.status(404).json(Message.error(errorMessages.user.notFound));
    }

    delete user.password;

    return res.status(200).json({ user });
  }
}

export default new UserController();
