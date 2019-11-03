// @flow
import { gql } from 'apollo-server';
import PunchItem from './PunchItem';
import PunchItemStatus from './PunchItemStatus';

const RootQuery = gql`  
  type RootQuery {
    getPunchListByProjectId(
      projectId: ID!,
      skip: Int,
      limit: Int,
      assigneeId: ID,
      status: PunchItemStatus
    ): [PunchItem]!
  }
`;

export default [ RootQuery, ...PunchItem, ...PunchItemStatus ];
