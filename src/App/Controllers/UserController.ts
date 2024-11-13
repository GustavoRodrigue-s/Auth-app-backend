import { Request, Response } from 'express';

import { User } from '@app/Models';
import { IUser } from '@app/types';

class UserController {
  async store(req: Request, res: Response) {
    const { username, password }: IUser = req.body;

    const user = await User.findOne({ username });

    User.validateEmpty(username, password);
    User.validateExists(user);

    const userCreated = await User.create(username, password);

    return res.status(201).json(userCreated);
  }

  async show(req: Request, res: Response) {
    const id = req.userId;

    const user: Partial<IUser> | null = await User.findOne({ id });

    User.validateNotExists(user);

    delete user?.password;

    return res.status(200).json({ user });
  }
}

export default new UserController();
