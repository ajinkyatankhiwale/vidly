import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = column => {
    const sortedColumn = { ...this.props.sortedColumn };
    if (column.key === sortedColumn.column) {
      sortedColumn.column = column.key;
      sortedColumn.order = sortedColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortedColumn.column = column.key;
      sortedColumn.order = "asc";
    }
    this.props.onColumnSort(sortedColumn);
  };

  render() {
    const { tableHeaders } = this.props;

    return (
      <thead>
        <tr>
          {tableHeaders.map(tableHeader => (
            <th
              onClick={() => this.raiseSort(tableHeader)}
              key={tableHeader["key"]}
            >
              {tableHeader["value"]}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
