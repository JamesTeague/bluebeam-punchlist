// @flow
import { gql } from 'apollo-server';
import RootMutation from './RootMutation';
import RootQuery from './RootQuery';

const Schema = gql`
  schema {
    query: RootQuery
    mutation: RootMutation
  }
`;

export default [ Schema, ...RootMutation, ...RootQuery ];