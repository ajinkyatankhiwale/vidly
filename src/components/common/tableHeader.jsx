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

  renderColumnSortIcon = column => {
    const sortedColumn = { ...this.props.sortedColumn };
    if (column.key !== sortedColumn.column) return null;
    return sortedColumn.order === "asc" ? (
      <i className="fa fa-sort-asc" aria-hidden="true" />
    ) : (
      <i className="fa fa-sort-desc" aria-hidden="true" />
    );
  };

  render() {
    const { tableHeaders } = this.props;

    return (
      <thead>
        <tr>
          {tableHeaders.map(tableHeader => (
            <th
              className="pointer"
              onClick={() => this.raiseSort(tableHeader)}
              key={tableHeader["key"]}
            >
              {tableHeader["value"]} {this.renderColumnSortIcon(tableHeader)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
