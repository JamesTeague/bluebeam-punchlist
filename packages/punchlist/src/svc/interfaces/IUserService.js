// @flow
import type { User } from '../../types';

export interface IUserService {
  createUser(email: string, fullName: string): void;
  getUserById(id: string): ?User
}
