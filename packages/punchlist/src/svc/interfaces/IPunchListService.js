// @flow

import type { PunchItem } from '../../types';
import type { PunchItemStatus } from '../../enums/PunchItemStatusEnum';

export interface IPunchListService {
  getPunchList(projectId: string, skip?: ?number, limit?: ?number, assigneeId?: ?string, status?: ?PunchItemStatus): PunchItem[];
  createPunchItem(projectId: string, subject: string, status: PunchItemStatus): void;
  updatePunchItem(itemId: string, updateObject: $Shape<$Diff<PunchItem, { id: string }>>): void;
}
