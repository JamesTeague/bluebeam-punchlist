// @flow
import { gql } from 'apollo-server';
import PunchItemStatus from './PunchItemStatus';
import Project from './Project';
import User from './User';

const PunchItem = gql`
  type PunchItem {
    id: ID!
    createdAt: String!
    status: PunchItemStatus!
    project: Project!
    subject: String
    assignee: User
  }
`;

export default [
  PunchItem,
  ...PunchItemStatus,
  ...Project,
  ...User,
];
