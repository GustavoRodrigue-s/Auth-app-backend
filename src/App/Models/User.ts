import { prisma } from '../../database/prismaClient';
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from '@app/helpers';
import { Crypter } from '@app/libs';

import { IUser } from '@app/types';

import { errorMessages } from '@utils/constants';
import { isEmpty } from '@utils/validators';

class User {
  async findOne(where: Partial<IUser>) {
    const user = await prisma.user.findFirst({
      where,
    });

    return user;
  }

  async create(username: string, password: string) {
    const crypter = new Crypter();

    const data = {
      username,
      password: crypter.hash(password),
    };

    const userCreated: Partial<IUser> = await prisma.user.create({ data });

    delete userCreated.password;

    return userCreated;
  }

  validateExists(user: Partial<IUser> | null) {
    if (user) {
      throw new UnauthorizedError(errorMessages.user.alreadyExists);
    }
  }

  validateNotExists(user: Partial<IUser> | null) {
    if (!user) {
      throw new NotFoundError(errorMessages.user.notFound);
    }
  }

  validateEmpty(username: string, password: string) {
    if (isEmpty(username) || isEmpty(password)) {
      throw new BadRequestError(errorMessages.user.emptyValues);
    }
  }
}

export default new User();
