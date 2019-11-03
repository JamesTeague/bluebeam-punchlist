// @flow
import * as PunchItemResolvers from './PunchItemResolvers';
import type { ApolloServerContext, PunchItem } from '../../types';

const resolvers = {
  RootQuery: {
    getPunchListByProjectId: PunchItemResolvers.getPunchListByProjectId,
  },
  RootMutation: {
    createPunchItem: PunchItemResolvers.createPunchItem,
  },
  PunchItem: {
    project(root: PunchItem, args: *, context: ApolloServerContext) {
      return context.projectService.getProjectById(root.projectId);
    },
    assignee(root: PunchItem, args: *, context: ApolloServerContext) {
      if(root.assigneeId) {
        return context.userService.getUserById(root.assigneeId);
      }
    }
  },
};

export default resolvers;
