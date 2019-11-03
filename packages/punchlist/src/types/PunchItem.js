// @flow
import type { moment } from 'moment';
import type { PunchItemStatus } from '../enums/PunchItemStatusEnum';

export type PunchItem = {
  id: string,
  createdAt: moment,
  status: PunchItemStatus,
  projectId: string,
  subject: ?string,
  assigneeId: ?string,
}
