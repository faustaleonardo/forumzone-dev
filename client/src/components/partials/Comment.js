import React from 'react';
import { Link } from 'react-router-dom';

const Comment = () => {
  return (
    <div className="user-comment">
      <div className="left">
        <Link to="/profile">
          <img
            src="https://avatars2.githubusercontent.com/u/7688999?s=460&v=4"
            alt="avatar"
            className="user-question-photo"
          />
        </Link>
        <div className="user-details">
          <div>
            <a href="/profile">Fausta Leonardo</a>
            <span className="text-grey-color"> 1 hour ago</span>
          </div>
          <p className="user-comment-content">
            Check your App version. Make sure it is updated with the latest
            version.
          </p>
        </div>
      </div>
      <div className="text-grey-color right">
        <span className="user-comment-setting">
          <i className="material-icons">settings</i>
        </span>
      </div>
      <div className="clearfix" />
    </div>
  );
};

export default Comment;
