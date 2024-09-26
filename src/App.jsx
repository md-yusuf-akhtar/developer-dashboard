import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './Profile.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Repositories } from './components/Repositories';
import { Sidebar } from './components/Sidebar';
import { DevDashProvider } from './Store/DevDashProvider';
import { Profile } from './components/Profile';
import DevToArticles from './components/DevToArticles';

function App() {

  return (
    <DevDashProvider>
      <Router>
        <div className="dashboard">
          <Sidebar />
          <div className="main-content">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/repositories" element={<Repositories />} />
              <Route path="/devtoArticles" element={<DevToArticles />} />
              <Route path="/profile" element={<Profile />} />
              {/* Add other routes for different tabs as needed */}
            </Routes>
          </div>
        </div>
      </Router>
    </DevDashProvider>
  );
}

export default App;
