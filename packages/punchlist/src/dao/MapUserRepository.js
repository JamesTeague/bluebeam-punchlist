// @flow
import type { User } from '../types';
import type { IUserRepository } from './interfaces';

/**
 * Repository for Users.
 */
export default class MapUserRepository implements IUserRepository {
  userMap: Map<string, User>;

  constructor(database: Map<string, User>) {
    this.userMap = database;
  }

  getUserById(id: string): ?User {
    return this.userMap.get(id);
  }

  addUser(user: User): void {
    this.userMap.set(user.id, user);
  }
}
