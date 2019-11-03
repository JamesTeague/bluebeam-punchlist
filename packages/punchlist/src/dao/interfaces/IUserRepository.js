// @flow

import type { User } from '../../types';

export interface IUserRepository {
  getUserById(id: string): ?User;
  addUser(user: User): void;
}
