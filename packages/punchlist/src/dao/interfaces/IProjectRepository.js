// @flow

import type { Project } from '../../types';

export interface IProjectRepository {
  getProjectById(id: string): ?Project;
  addProject(project: Project): void;
}
