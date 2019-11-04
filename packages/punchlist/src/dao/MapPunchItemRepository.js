// @flow
import moment from 'moment';
import type { PunchItem } from '../types';
import type { SortType } from '../enums/SortTypeEnum';
import { SortTypeEnum } from '../enums';
import type { PunchItemStatus } from '../enums/PunchItemStatusEnum';
import type { IPunchItemRepository } from './interfaces';

/**
 * Repository for PunchItems.
 */
export default class MapPunchItemRepository implements IPunchItemRepository {
  punchItemMap: Map<string, PunchItem>;

  constructor(database: Map<string, PunchItem>) {
    this.punchItemMap = database;
  }

  getPunchItemById(itemId: string) {
    return this.punchItemMap.get(itemId);
  }

  getPunchItemsByProjectId(projectId: string, skip: ?number, limit: ?number,  assigneeId?: ?string, status?: ?PunchItemStatus, sort?: SortType): PunchItem[] {
    let items = [];

    for (const [id, value] of this.punchItemMap.entries()) {
      if (value.projectId === projectId) {
        items.push(value)
      }
    }

    if(assigneeId) {
      items = items.filter(item => item.assigneeId === assigneeId);
    }

    if(status) {
      items = items.filter(item => item.status === status);
    }

    return this.page(this.sort(items, sort), skip, limit);
  }

  getPunchItemsByAssigneeId(assigneeId: string, skip: ?number, limit: ?number, sort?: SortType): PunchItem[] {
    const items = [];

    for (const [id, value] of this.punchItemMap.entries()) {
      if (value.assigneeId === assigneeId) {
        items.push(value)
      }
    }

    return this.page(this.sort(items, sort), skip, limit);
  }

  getPunchItemsByStatus(status: PunchItemStatus, skip: ?number, limit: ?number, sort?: SortType): PunchItem[] {
    const items = [];

    for (const [id, value] of this.punchItemMap.entries()) {
      if (value.status === status) {
        items.push(value)
      }
    }

    return this.page(this.sort(items, sort), skip, limit);
  }

  addOrUpdatePunchItem(punchItem: PunchItem) {
    this.punchItemMap.set(punchItem.id, punchItem);
  }

  sort(items: PunchItem[], sort: ?SortType) {
    if (sort === SortTypeEnum.Ascending) {
      // TODO - Sort
    } else {
      items.sort((curr, prev) => {
        if (moment(curr.createdAt).isBefore(prev.createdAt)) {
          return 1;
        }
        else if (moment(curr.createdAt).isAfter(prev.createdAt)) {
          return -1;
        }
        else {
          return 0;
        }
      })
    }

    return items;
  }

  page(items: PunchItem[], skip: ?number, limit: ?number) {
    let pagedItems = items;

    if(skip) {
      pagedItems.splice(0, skip);
    }

    if (limit) {
      // $FlowFixMe
      pagedItems = pagedItems.slice(0, limit);
    }
    return pagedItems;
  }
}
