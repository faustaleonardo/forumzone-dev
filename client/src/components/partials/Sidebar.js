import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <ul>
      <li>
        <Link to="/questions/me" className="side-link">
          <i className="material-icons vert-align-mid">question_answer</i>
          <div className="side-link-content">My Questions</div>
        </Link>
      </li>
      <li>
        <Link to="/" className="side-link">
          <i className="material-icons vert-align-mid">people</i>
          <div className="side-link-content">My Participation</div>
        </Link>
      </li>
      <li>
        <Link to="/" className="side-link">
          <i className="material-icons vert-align-mid">check</i>
          <div className="side-link-content">My Best Answers</div>
        </Link>
      </li>
      <li>
        <Link to="/" className="side-link">
          <i className="material-icons vert-align-mid">star</i>
          <div className="side-link-content">Popular This Week</div>
        </Link>
      </li>
      <li>
        <Link to="/" className="side-link">
          <i className="material-icons vert-align-mid">star</i>
          <div className="side-link-content">Popular All Time</div>
        </Link>
      </li>
      <li>
        <Link to="/" className="side-link">
          <i className="material-icons vert-align-mid">check</i>
          <div className="side-link-content">Solved</div>
        </Link>
      </li>
      <li>
        <Link to="/" className="side-link">
          <i className="material-icons vert-align-mid">error</i>
          <div className="side-link-content">Unsolved</div>
        </Link>
      </li>
      <li>
        <Link to="/" className="side-link">
          <i className="material-icons vert-align-mid">reply</i>
          <div className="side-link-content">No Replies Yet</div>
        </Link>
      </li>
      <li>
        <Link to="/top-20-solvers" className="side-link">
          <i className="material-icons vert-align-mid">check</i>
          <div className="side-link-content">Top 20 Solvers</div>
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
