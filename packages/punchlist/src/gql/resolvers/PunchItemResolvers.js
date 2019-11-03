// @flow
import Bluebird from 'bluebird';
import type { ApolloServerContext, PunchItem } from '../../types';
import type { PunchItemStatus } from '../../enums/PunchItemStatusEnum';

const getPunchListByProjectId = (
  root: any,
  args: {
    projectId: string,
    skip: ?number,
    limit: ?number,
    assigneeId: ?string,
    status: ?PunchItemStatus
  },
  context: ApolloServerContext
): Bluebird<PunchItem[]> => {
  return Bluebird.try(() => {
    const { projectId, skip, limit, assigneeId, status } = args;

    return context.punchListService.getPunchList(projectId, skip, limit, assigneeId, status);
  }).catch((error: Error) => { throw error; })
};


const createPunchItem = (
  root: any,
  args: {
    projectId: string,
    subject: string,
    status: PunchItemStatus,
  },
  context: ApolloServerContext,
): Bluebird<{ success: boolean, message: ?string }> => {
  const {
    projectId,
    subject,
    status,
  } = args;

  context.punchListService.createPunchItem(projectId, subject, status);

  return { success: true, message: null };
};

export {
  createPunchItem,
  getPunchListByProjectId,
};
