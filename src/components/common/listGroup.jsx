import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const ListGroup = props => {
  const { items, listGroupKey, listGroupValue } = props;
  return (
    <ul className="list-group">
      {items.map(item => (
        <li key={item[listGroupKey]} className="list-group-item">
          {item[listGroupValue]}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
