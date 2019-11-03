// @flow
import { gql } from 'apollo-server';

const User = gql`
  type User {
    id: ID!
    email: String!
    fullName: String!
  }
`;

export default [ User ];
