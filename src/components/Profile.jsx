import React, { useContext } from 'react';
import { DevDashContext } from '../Store/DevDashProvider';

export const Profile = () => {
  const { userData } = useContext(DevDashContext);

  if (!userData) {
    return <div className="loading">Loading profile...</div>;
  }

  return (
    <>
      <div className="profile">
        <div className="profile-header">
          <div className="profile-picture">
            <img src={userData.avatar_url} alt="Profile Picture" />
          </div>
          <div className="profile-info">
            <h1 className="profile-name">{userData.name || userData.login}</h1>
            <p className="profile-bio">{userData.bio || "No bio available."}</p>
            <button className="edit-btn">
              <a href="https://github.com/md-yusuf-akhtar" target="_blank" rel="noopener noreferrer">Explore more</a>
            </button>
          </div>
        </div>

        <div className="profile-details">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> {userData.email || "mdyusuf2790@gmail.com"}</p>
          <p><strong>Location:</strong> {userData.location || "Not provided"}</p>
          <p><strong>Website:</strong> <a href={userData.blog} target="_blank" rel="noopener noreferrer">{userData.blog || "Not provided"}</a></p>
        </div>
      </div>
    </>
  );
};

