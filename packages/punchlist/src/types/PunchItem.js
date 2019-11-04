// @flow
import type { moment } from 'moment';
import type { PunchItemStatus } from '../enums/PunchItemStatusEnum';

/**
 * PunchItem as defined by Bluebeam
 */
export type PunchItem = {
  id: string,
  createdAt: moment,
  status: PunchItemStatus,
  projectId: string,
  subject: ?string,
  assigneeId: ?string,
}
