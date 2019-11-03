// @flow

import type { Project } from '../../types';

export interface IProjectService {
  createProject(name: string): void;
  getProjectById(id: string): ?Project;
}