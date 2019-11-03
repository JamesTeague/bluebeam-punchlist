// @flow
import { gql } from 'apollo-server';

const PunchItemStatus = gql`
  enum PunchItemStatus {
    OPEN
    IN_PROGRESS
    IN_REVIEW
    CLOSED
  }
`;

export default [ PunchItemStatus ];
