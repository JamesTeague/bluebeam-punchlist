// @flow

import type { IProjectService, IPunchListService, IUserService } from '../svc/interfaces';

export type ApolloServerContext = {
  projectService: IProjectService,
  punchListService: IPunchListService,
  userService: IUserService,
}
