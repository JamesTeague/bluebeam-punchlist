// @flow

const SortTypeEnum = Object.freeze({
  Ascending: 'asc',
  Descending: 'desc',
});

export type SortType = $Values<typeof SortTypeEnum>;
export default SortTypeEnum;
