// @flow
import { gql } from 'apollo-server';

const Project = gql`
  type Project {
    id: ID!
    name: String!
  }
`;

export default [ Project ];
