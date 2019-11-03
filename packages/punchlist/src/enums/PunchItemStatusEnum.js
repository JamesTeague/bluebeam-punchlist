// @flow

const PunchItemStatusEnum = Object.freeze({
  Open: 'OPEN',
  InProgress: 'IN_PROGRESS',
  InReview: 'IN_REVIEW',
  Closed: 'CLOSED',
});

export type PunchItemStatus = $Values<typeof PunchItemStatusEnum>;
export default PunchItemStatusEnum;
