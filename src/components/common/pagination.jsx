import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = props => {
  const { totalNoOfRecords, pageSize, currentPage, onPageClick } = props;
  const totalNoOfPages = Math.ceil(totalNoOfRecords / pageSize);
  const pages = _.range(1, totalNoOfPages + 1);

  if (totalNoOfPages === 1) return null;

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={currentPage === page ? "page-item active" : "page-item"}
          >
            <a onClick={() => onPageClick(page)} className="page-link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  totalNoOfRecords: PropTypes.number,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  onPageClick: PropTypes.func
};

export default Pagination;
