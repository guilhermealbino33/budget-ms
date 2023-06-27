export const isSortParamValid = (sort: unknown, paramsEnum: object): boolean => {
  const existingSortParams = Object.values(paramsEnum);
  if (!existingSortParams.includes(sort)) {
    return false;
  }
  return true;
};
