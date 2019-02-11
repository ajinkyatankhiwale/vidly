import _ from "lodash";

export function getRecordsOnPage(items, pageNo, pageSize) {
  const startIndex = (pageNo - 1) * pageSize;
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
