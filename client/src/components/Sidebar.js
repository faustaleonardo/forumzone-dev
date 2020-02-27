import React from 'react';

const Sidebar = () => {
  return (
    <ul>
      <li>
        <a href="/" className="side-link">
          <i className="material-icons vert-align-mid">question_answer</i>
          <div className="side-link-content">My Questions</div>
        </a>
      </li>
      <li>
        <a href="/" className="side-link">
          <i className="material-icons vert-align-mid">people</i>
          <div className="side-link-content">My Participation</div>
        </a>
      </li>
      <li>
        <a href="/" className="side-link">
          <i className="material-icons vert-align-mid">check</i>
          <div className="side-link-content">My Best Answers</div>
        </a>
      </li>
      <li>
        <a href="/" className="side-link">
          <i className="material-icons vert-align-mid">star</i>
          <div className="side-link-content">Popular This Week</div>
        </a>
      </li>
      <li>
        <a href="/" className="side-link">
          <i className="material-icons vert-align-mid">star</i>
          <div className="side-link-content">Popular All Time</div>
        </a>
      </li>
      <li>
        <a href="/" className="side-link">
          <i className="material-icons vert-align-mid">check</i>
          <div className="side-link-content">Solved</div>
        </a>
      </li>
      <li>
        <a href="/" className="side-link">
          <i className="material-icons vert-align-mid">error</i>
          <div className="side-link-content">Unsolved</div>
        </a>
      </li>
      <li>
        <a href="/" className="side-link">
          <i className="material-icons vert-align-mid">reply</i>
          <div className="side-link-content">No Replies Yet</div>
        </a>
      </li>
      <li>
        <a href="/" className="side-link">
          <i className="material-icons vert-align-mid">check</i>
          <div className="side-link-content">Top 20 Solvers</div>
        </a>
      </li>
    </ul>
  );
};

export default Sidebar;
