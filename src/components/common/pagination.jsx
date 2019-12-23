import React from "react";
import _ from "lodash";

const Pagination = props => {
  const { itemsCount, pageSize } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  //console.log("Pages Count", pagesCount);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  //console.log("Pages lodash", pages);
  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li key={page} className="page-item">
            <a className="page-link">{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
