// @flow
import { gql } from 'apollo-server';
import PunchItemStatus from './PunchItemStatus';

const RootMutation = gql`
  type MutationResponse {
    success: Boolean!
    message: String
  }
  
  type RootMutation {
    createPunchItem(projectId: ID!, subject: String!, status: PunchItemStatus!): MutationResponse!
#    updatePunchItem()
  }
`;

export default [ RootMutation, ...PunchItemStatus ];
