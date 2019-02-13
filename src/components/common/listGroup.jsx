import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const ListGroup = props => {
  const {
    items,
    listGroupKey,
    listGroupValue,
    currentItem,
    onItemSelect
  } = props;
  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          key={item[listGroupKey]}
          onClick={() => onItemSelect(item)}
          className={
            currentItem === item ? "list-group-item active" : "list-group-item"
          }
        >
          {item[listGroupValue]}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
