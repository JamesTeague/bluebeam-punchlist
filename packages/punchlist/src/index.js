// @flow
import moment from 'moment';
import { ApolloServer } from 'apollo-server';
import uuid from 'uuid/v4';
import typeDefs from './gql/typeDefs';
import resolvers from './gql/resolvers';
import type { ApolloServerContext, Project, PunchItem, User } from './types';
import { MapProjectRepository, MapPunchItemRepository, MapUserRepository } from './dao';
import { ProjectService, PunchListService, UserService } from './svc';
import { PunchItemStatusEnum } from './enums';

// Set up in-memory databases
const punchItemMap: Map<string, PunchItem> = new Map();
const projectMap: Map<string, Project> = new Map();
const userMap: Map<string, User> = new Map();

// Set up repositories
const punchItemRepository = new MapPunchItemRepository(punchItemMap);
const projectRepository = new MapProjectRepository(projectMap);
const userRepository = new MapUserRepository(userMap);

// Set up services
const projectService = new ProjectService(projectRepository);
const punchListService = new PunchListService(punchItemRepository, projectRepository);
const userService = new UserService(userRepository);

// Set up Apollo Context
const context: ApolloServerContext = {
  projectService,
  punchListService,
  userService,
};

const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  context
});

// For the sake of time, seed some entries
const seed = () => {
  const project1 = {
    id: 'cb712199-7a51-4d2f-a9ea-ab3f86353028',
    name: 'Project Atlas',
  };

  const project2 = {
    id: 'd3f83c2d-28f4-4747-b681-8ee433646b63',
    name: 'James\' Dream Home',
  };

  projectMap.set(project1.id, project1);
  projectMap.set(project2.id, project2);

  const user1 = {
    id: 'dca26e16-264b-45ed-bb35-6d48090f0f4b',
    email: 'eval@bluebeam.com',
    fullName: 'Bluebeam Evaluator',
  };

  const user2 = {
    id: 'd3879060-b953-4d82-a38d-6037d5409af8',
    email: 'james@teague.dev',
    fullName: 'James Teague II',
  };

  userMap.set(user1.id, user1);
  userMap.set(user2.id, user2);

  const item1 = {
    id: uuid(),
    createdAt: moment().utc().toISOString(),
    status: PunchItemStatusEnum.Open,
    projectId: project1.id,
    subject: 'Item1',
    assigneeId: user1.id,
  };

  const item2 = {
    id: uuid(),
    createdAt: moment().utc().toISOString(),
    status: PunchItemStatusEnum.Open,
    projectId: project1.id,
    subject: 'Item2',
    assigneeId: user1.id,
  };

  const item3 = {
    id: uuid(),
    createdAt: moment().utc().toISOString(),
    status: PunchItemStatusEnum.Open,
    projectId: project2.id,
    subject: 'Item3',
    assigneeId: user2.id,
  };

  const item4 = {
    id: uuid(),
    createdAt: moment().utc().toISOString(),
    status: PunchItemStatusEnum.Open,
    projectId: project2.id,
    subject: 'Item4',
    assigneeId: user1.id,
  };

  const item5 = {
    id: uuid(),
    createdAt: moment().utc().toISOString(),
    status: PunchItemStatusEnum.Open,
    projectId: project2.id,
    subject: 'Item5',
    assigneeId: user2.id,
  };

  punchItemMap.set(item1.id, item1);
  punchItemMap.set(item2.id, item2);
  punchItemMap.set(item3.id, item3);
  punchItemMap.set(item4.id, item4);
  punchItemMap.set(item5.id, item5);
};

seed();

apollo.listen(3000).then(({url}) => console.log(`Server ready at ${url}`));