// @flow
import type { Project } from '../types';
import type { IProjectRepository } from './interfaces';

/**
 * Repository for Projects.
 */
export default class MapProjectRepository implements IProjectRepository {
  projectMap: Map<string, Project>;

  constructor(database: Map<string, Project>) {
    this.projectMap = database;
  }

  getProjectById(id: string): ?Project {
    return this.projectMap.get(id);
  }

  addProject(project: Project) {
    this.projectMap.set(project.id, project);
  }
}
