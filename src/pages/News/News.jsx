import React, { useEffect, useState } from "react";
import style from "./News.module.css";
import Pagination from "../../components/Pagination/Pagination";

const News = () => {
  const [expandedPostId, setExpandedPostId] = useState(null);
  const [subCategoryPosts, setSubCategoryPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    fetch("http://localhost:8000/category_file/")
      .then((response) => response.json())
      .then((data) => setSubCategoryPosts(data))
      .catch((error) => console.log("Error fetching subcategory data:", error));
  }, []);

  const toggleFullText = (postId) =>
    setExpandedPostId((prevId) => (prevId === postId ? null : postId));

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderPost = (post) => (
    <div key={post.id}>
      <span>02.08.23</span>
      {/* {post.date} */}
      <h4
        className={`${style.h4} ${
          expandedPostId === post.id ? style.expandedTitle : ""
        }`}
        onClick={() => toggleFullText(post.id)}
      >
        {post.title}
      </h4>
      {expandedPostId === post.id ? (
        <>
          <h5 className={style.h5}>{post.description}</h5>
          <p className={style.p} onClick={() => toggleFullText(post.id)}>
            Скрыть
          </p>
        </>
      ) : (
        <p className={style.p} onClick={() => toggleFullText(post.id)}>
          Читать полностью
        </p>
      )}
      <hr className={style.line} />
    </div>
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = subCategoryPosts.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  return (
    <div className={style.container}>
      <div className={style.section}>
        <h1 className={style.h1}>Последние новости</h1>
        {currentPosts.map((post) =>
          !expandedPostId || expandedPostId === post.id
            ? renderPost(post)
            : null
        )}

        {expandedPostId === null && (
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={subCategoryPosts.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        )}
      </div>
    </div>
  );
};

export default News;
