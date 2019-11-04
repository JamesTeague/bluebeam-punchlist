// @flow
import type { SortType } from '../../enums/SortTypeEnum';
import type { PunchItem } from '../../types';
import type { PunchItemStatus } from '../../enums/PunchItemStatusEnum';

export interface IPunchItemRepository {
  getPunchItemById(itemId: string): ?PunchItem;
  getPunchItemsByProjectId(projectId: string, skip: ?number, limit: ?number, assigneeId?: ?string, status?: ?PunchItemStatus, sort?: SortType): PunchItem[];
  getPunchItemsByAssigneeId(assigneeId: string, skip: ?number, limit: ?number, sort?: SortType): PunchItem[];
  getPunchItemsByStatus(status: PunchItemStatus, skip: ?number, limit: ?number, sort?: SortType): PunchItem[];
  addOrUpdatePunchItem(punchItem: PunchItem): void;
}
