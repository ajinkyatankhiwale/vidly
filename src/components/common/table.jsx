import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ data, sortedColumn, tableHeaders, onColumnSort }) => {
  return (
    <table className="table table-hover">
      <TableHeader
        sortedColumn={sortedColumn}
        tableHeaders={tableHeaders}
        onColumnSort={onColumnSort}
      />
      <TableBody data={data} tableHeaders={tableHeaders} />
    </table>
  );
};

export default Table;
