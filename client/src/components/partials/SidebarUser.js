import React from 'react';
import { Link } from 'react-router-dom';

const SidebarUser = () => {
  return (
    <ul className="text-align-center">
      <li>
        <Link to="/" className="side-link">
          <span className="text-uppercase">What's new</span>
        </Link>
      </li>
      <li>
        <Link to="/" className="side-link">
          <span className="text-uppercase">Profile</span>
        </Link>
      </li>
      <li>
        <Link to="/bookmarks" className="side-link">
          <span className="text-uppercase">Bookmarks</span>
        </Link>
      </li>
      <li>
        <Link to="/questions/me" className="side-link">
          <span className="text-uppercase">Questions</span>
        </Link>
      </li>
      <li>
        <Link to="/questions/solved/me" className="side-link">
          <span className="text-uppercase">Solved Questions</span>
        </Link>
      </li>
      <li>
        <Link to="/settings" className="side-link">
          <span className="text-uppercase">Settings</span>
        </Link>
      </li>
      <li>
        <Link to="/password/change" className="side-link">
          <span className="text-uppercase">Change Password</span>
        </Link>
      </li>
    </ul>
  );
};

export default SidebarUser;
