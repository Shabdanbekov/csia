import React from "react";
import style from "./Pagination.module.css";

const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  let displayedPages = pageNumbers;

  if (pageNumbers.length > 5) {
    if (currentPage <= 3) {
      displayedPages = [
        ...pageNumbers.slice(0, 5),
        "ellipsis",
        pageNumbers.length,
      ];
    } else if (currentPage >= pageNumbers.length - 2) {
      displayedPages = [
        1,
        "ellipsis",
        ...pageNumbers.slice(pageNumbers.length - 4),
      ];
    } else {
      displayedPages = [
        1,
        "ellipsis",
        ...pageNumbers.slice(currentPage - 2, currentPage + 1),
        "ellipsis",
        pageNumbers.length,
      ];
    }
  }

  return (
    <div className={style.pagination}>
      {displayedPages.map((number, index) => (
        <span
          key={index}
          onClick={() => paginate(number)}
          className={currentPage === number ? style.activePage : ""}
          style={{ cursor: "pointer", margin: "0.5rem" }}
        >
          {number === "ellipsis" ? "..." : number}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
