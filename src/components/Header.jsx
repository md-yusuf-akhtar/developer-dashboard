import { useContext } from 'react';
import { DevDashContext } from '../Store/DevDashProvider';

export const Header = () => {
  const { toggleSidebar, handleActiveTab } = useContext(DevDashContext);

  return (
    <header className="header">
      <h1><span className="developer-hide">Developer</span> Dashboard</h1>
      <button id="toggle-btn" className="toggle-btn" onClick={toggleSidebar}>
        &#9776;
      </button>
    </header>
  );
};
