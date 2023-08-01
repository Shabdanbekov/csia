import React, { useEffect, useState } from "react";
import style from "./News.module.css";
import Pagination from "../../components/Pagination/Pagination";

const News = () => {
  const [showFullText, setShowFullText] = useState({});
  const [subCategoryPosts, setSubCategoryPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const toggleFullText = (postId) => {
    setShowFullText((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));
  };

  useEffect(() => {
    fetch("http://192.168.0.229:8000/category/")
      .then((response) => response.json())
      .then((data) => {
        setSubCategoryPosts(data);
      })
      .catch((error) => {
        console.log("Error fetching subcategory data:", error);
      });
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = subCategoryPosts.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={style.container}>
      <div className={style.section}>
        <h1 className={style.h1}>Последние новости</h1>
        {currentPosts.map((post) => (
          <div key={post.id}>
            {showFullText[post.id] ? (
              <div>
                <h4>{post.description}</h4>
                <p className={style.p} onClick={() => toggleFullText(post.id)}>
                  Скрыть
                </p>
                <hr className={style.line} />
              </div>
            ) : (
              <div>
                <h4>
                  {post.description.length > 30
                    ? `${post.description.slice(0, 30)}...`
                    : post.description}
                </h4>
                <div className={style.date}>{post.date}</div>

                <p className={style.p} onClick={() => toggleFullText(post.id)}>
                  Читать полностью
                </p>
                <hr className={style.line} />
              </div>
            )}
          </div>
        ))}

        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={subCategoryPosts.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default News;
