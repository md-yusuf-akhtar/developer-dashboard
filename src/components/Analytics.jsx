import React, { useContext } from 'react';
import { DevDashContext } from '../Store/DevDashProvider';

export const Analytics = () => {
  const { userData } = useContext(DevDashContext);

  // Ensure that userData is available
  if (!userData) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="analytics">
      <div className="stat-box">
        <div className="stat-number">{userData.public_repos}</div>
        <div>Total Repositories</div>
      </div>
      <div className="stat-box">
        <div className="stat-number">{userData.stars ? userData.stars : '450'}</div>
        <div>Total Stars</div>
      </div>
      <div className="stat-box">
        <div className="stat-number">{userData.forks ? userData.forks : '200'}</div>
        <div>Total Forks</div>
      </div>
    </div>
  );
};
