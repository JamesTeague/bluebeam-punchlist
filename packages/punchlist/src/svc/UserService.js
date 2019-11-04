// @flow
import uuid from 'uuid/v4';
import type { IUserService } from './interfaces';
import type { IUserRepository } from '../dao/interfaces';

/**
 * Handles logic for Users.
 */
export default class UserService implements IUserService {
  userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  getUserById(id: string) {
    return this.userRepository.getUserById(id);
  }

  createUser(email: string, fullName: string) {
    const user = {
      id: uuid(),
      email,
      fullName
    };

    this.userRepository.addUser(user);
  }
}
