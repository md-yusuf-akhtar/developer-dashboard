
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DevDashContext } from '../Store/DevDashProvider';

export const Sidebar = () => {
  const { sidebarOpen, activeTab, handleActiveTab, toggleSidebar } = useContext(DevDashContext);

  return (
    <div id="sidebar" className={`sidebar ${sidebarOpen ? 'close' : ''}`}>
      <h2>Dev Dashboard</h2>
      <nav>
        <ul>
          <li onClick={() => handleActiveTab('Home')}>
            <Link to="/home" className={activeTab === 'Home' ? 'active' : ''} onClick={toggleSidebar}>
              <i className="fas fa-home"></i> Home
            </Link>
          </li>
          <li onClick={() => handleActiveTab('Repositories')}>
            <Link to="/repositories" className={activeTab === 'Repositories' ? 'active' : ''} onClick={toggleSidebar}>
              <i className="fas fa-folder"></i> Repositories
            </Link>
          </li>
          <li onClick={() => handleActiveTab('Issues')}>
            <Link to="/devToArticles" className={activeTab === 'devToArticles' ? 'active' : ''} onClick={toggleSidebar}>
              <i className="fas fa-exclamation-circle"></i> Dev Articles
            </Link>
          </li>
          {/* <li onClick={() => handleActiveTab('Pull Requests')}>
            <Link to="/pull-requests" className={activeTab === 'Pull Requests' ? 'active' : ''} onClick={toggleSidebar}>
              <i className="fas fa-code-branch"></i> Pull Requests
            </Link>
          </li> */}
          <li onClick={() => handleActiveTab('Profile')}>
            <Link to="/profile" className={activeTab === 'Profile' ? 'active' : ''} onClick={toggleSidebar}>
              <i className="fas fa-user"></i> Profile
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
