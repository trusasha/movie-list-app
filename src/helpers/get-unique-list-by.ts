/**
 * Remove duplicates from the array by key
 */
function getUniqueListBy<TArr>(arr: TArr[], key: keyof TArr): TArr[] {
  return [...new Map(arr.map((item) => [item[key], item])).values()];
}

export default getUniqueListBy;
