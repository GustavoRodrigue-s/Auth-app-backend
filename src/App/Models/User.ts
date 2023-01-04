import bcrypt from 'bcryptjs';

import { IUser } from '../types';

import { errorMessages } from '../utils/constants/messages';

type IUserProps = Pick<IUser, 'username' | 'password'>;

export class User implements IUserProps {
  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  isEmpty<T>(field: T) {
    return field === '';
  }

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  handleStore(userExists: IUser | null) {
    const { username, password, isEmpty } = this;

    if (isEmpty(username) || isEmpty(password)) {
      return { message: errorMessages.user.emptyValues, status: 400 };
    }

    if (userExists) {
      return { message: errorMessages.user.alreadyExists, status: 401 };
    }

    return { message: 'success' };
  }
}
