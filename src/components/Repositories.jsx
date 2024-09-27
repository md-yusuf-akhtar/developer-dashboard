import React, { useContext, useState } from 'react';
import { DevDashContext } from '../Store/DevDashProvider';

// Helper function to format repo names
const formatRepoName = (name) => {
  return name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) 
    .join(' ');
};

export const Repositories = () => {
  const { reposData } = useContext(DevDashContext);
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 12;

  // Sort repositories by creation date (newest first)
  const sortedRepos = reposData.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  // Calculate total pages
  const totalPages = Math.ceil(sortedRepos.length / reposPerPage);
  const shouldPaginate = sortedRepos.length > reposPerPage;

  // Get current page repositories
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = sortedRepos.slice(indexOfFirstRepo, indexOfLastRepo);

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
      {sortedRepos.length === 0 ? (
        <div className="loading">Loading repositories...</div>
      ) : (
        <>
          {currentRepos.map(repo => (
            <div className="repo-card" key={repo.id}>
              <div className="repo-title">{formatRepoName(repo.name)}</div>
              <div className="repo-description">{repo.description || "No description provided."}</div>
              <div className="repo-tags">
                {!repo.topics.length && <span className="tag">#{repo.language ? repo.language : 'others'}</span>}
                {repo.topics && repo.topics.map(topic => (
                  <span className="tag" key={topic}>#{topic}</span>
                ))}
              </div>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-link">View Repo</a>
            </div>
          ))}

          {shouldPaginate && (
            <div className="pagination">
              <button onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
              <span>Page {currentPage} of {totalPages}</span>
              <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};
