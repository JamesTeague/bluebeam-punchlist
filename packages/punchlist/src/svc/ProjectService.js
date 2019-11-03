// @flow
import uuid from 'uuid/v4';
import type { IProjectRepository } from '../dao/interfaces';
import type { IProjectService } from './interfaces';

export default class ProjectService implements IProjectService {
  projectRepository: IProjectRepository;

  constructor(projectRepository: IProjectRepository) {
    this.projectRepository = projectRepository;
  }

  createProject(name: string) {
    const project = {
      id: uuid(),
      name,
    };

    this.projectRepository.addProject(project);
  }

  getProjectById(id: string) {
    return this.projectRepository.getProjectById(id);
  }
}
