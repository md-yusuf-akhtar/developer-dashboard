import React, { useContext, useState } from "react";
import { DevDashContext } from "../Store/DevDashProvider";

const DevToArticles = () => {
  const { articles } = useContext(DevDashContext);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 12; // Number of articles per page

  if (!articles || articles.length === 0) {
    return <div className="loading">Loading...</div>;
  }

  // Calculate total pages if pagination is required
  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const shouldPaginate = articles.length > articlesPerPage;

  // Get current page articles
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="repo-list">
      {currentArticles.map(article => (
        <div className="repo-card" key={article.id}>
          <div className="repo-title">{article.title}</div>
          <div className="repo-description">{article.description || 'No description provided.'}</div>
          <div className="repo-tags">
            {article.tag_list.length > 0 ? (
              article.tag_list.map((tag, index) => (
                <span className="tag" key={index}>#{tag}</span>
              ))
            ) : (
              <span className="tag">#untagged</span>
            )}
          </div>
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="repo-link">Read Article</a>
        </div>
      ))}

      {shouldPaginate && (
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
          <span>Page {currentPage} of {totalPages}</span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
        </div>
      )}
    </div>
  );
};

export default DevToArticles;
