// @flow

import type { IProjectService, IPunchListService, IUserService } from '../svc/interfaces';

/**
 * Context for Apollo Server
 */
export type ApolloServerContext = {
  projectService: IProjectService,
  punchListService: IPunchListService,
  userService: IUserService,
}
