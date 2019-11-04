// @flow
import uuid from 'uuid/v4';
import moment from 'moment';
import type { IProjectRepository, IPunchItemRepository } from '../dao/interfaces';
import type { PunchItemStatus } from '../enums/PunchItemStatusEnum';
import type { PunchItem } from '../types';
import { PunchItemStatusEnum } from '../enums';
import type { IPunchListService } from './interfaces';

/**
 * Handles logic for PunchItems.
 */
export default class PunchListService implements IPunchListService {
  punchItemRepository: IPunchItemRepository;
  projectRepository: IProjectRepository;

  constructor(punchItemRepository: IPunchItemRepository, projectRepository: IProjectRepository) {
    this.punchItemRepository = punchItemRepository;
    this.projectRepository = projectRepository;
  }

  getPunchList(projectId: string, skip?: ?number, limit?: ?number, assigneeId?: ?string, status?: ?PunchItemStatus): PunchItem[] {
    return this.punchItemRepository.getPunchItemsByProjectId(projectId, skip, limit, assigneeId, status);
  }

  createPunchItem(projectId: string, subject: string, status: PunchItemStatus = PunchItemStatusEnum.Open) {
    const project = this.projectRepository.getProjectById(projectId);

    if (!project) {
      throw new Error('Cannot create item for project that does not exist.');
    }

    const punchItem = {
      id: uuid(),
      createdAt: moment().utc().toISOString(),
      status,
      projectId,
      subject,
      assigneeId: null,
    };

    this.punchItemRepository.addOrUpdatePunchItem(punchItem);
  }

  updatePunchItem(itemId: string, updateObject: $Shape<$Diff<PunchItem, { id: string }>>) {
    const punchItem = this.punchItemRepository.getPunchItemById(itemId);

    if(!punchItem) {
      // TODO - Throw Error
    }

    const updatedPunchItem = {
      ...punchItem,
      ...updateObject,
    };

    this.punchItemRepository.addOrUpdatePunchItem(updatedPunchItem);
  }
}
