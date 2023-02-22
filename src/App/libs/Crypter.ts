import bcrypt from 'bcryptjs';

export class Crypter {
  hash(value: string, salt = 8) {
    return bcrypt.hashSync(value, salt);
  }

  async compare(value1: string, value2: string) {
    return bcrypt.compare(value1, value2);
  }
}
