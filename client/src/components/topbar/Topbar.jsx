import './Topbar.css';
import { Search, Person, Chat, Notifications } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <Link to="/" className="link">
          <span className="logo">SOCIAL</span>
        </Link>
      </div>
      <div className="topbar-center">
        <div className="search-bar">
          <Search className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search for friend, post, or video"
          />
        </div>
      </div>
      <div className="topbar-right">
        <div className="topbar-links">
          <Link to="/" className="link">
            <span className="topbar-link">Home</span>
          </Link>
          <Link to="/" className="link">
            <span className="topbar-link">Timeline</span>
          </Link>
        </div>
        <div className="topbar-icons">
          <div className="topbar-icon-item">
            <Person />
            <span className="topbar-icon-badge">1</span>
          </div>
          <div className="topbar-icon-item">
            <Chat />
            <span className="topbar-icon-badge">2</span>
          </div>
          <div className="topbar-icon-item">
            <Notifications />
            <span className="topbar-icon-badge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbar-image" />
      </div>
    </div>
  );
};

export default Topbar;
