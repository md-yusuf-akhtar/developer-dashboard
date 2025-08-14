import { createContext, useEffect, useState } from "react";

export const DevDashContext = createContext();

export const DevDashProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [reposData, setReposData] = useState([]); 
  const [activeTab, setActiveTab] = useState('home');
  const [articles, setArticles] = useState([]);
  const username = 'md-yusuf-akhtar';  

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  };

  // Fetch user data and repositories from GitHub
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const fetchUserRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setReposData(data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchUserData();
    fetchUserRepos();
  }, [username]);

  // Fetching from Dev.to
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('https://dev.to/api/articles?username=imyusufakhtar');
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <DevDashContext.Provider value={{ 
      sidebarOpen, toggleSidebar, 
      userData, reposData, articles, 
      activeTab, handleActiveTab,
      }}>
      {children}
    </DevDashContext.Provider>
  );
};

