import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../partials/Sidebar';

const Question = () => {
  return (
    <div className="row mt-2">
      <div className="col s12">
        <h3 className="text-grey-color center">Let's discuss!</h3>
      </div>
      <div className="col s3 mt-1">
        <Sidebar />
      </div>
      <div className="col s9 mt-3">
        <div className="row">
          <div className="col s10">
            <input id="title" placeholder="Add a Title" />
          </div>
          <div className="col s2">
            <Link to="/profile" className="right">
              <img
                src="https://avatars2.githubusercontent.com/u/7688999?s=460&v=4"
                alt="avatar"
                className="user-new-question-photo"
              />
            </Link>
          </div>
          <div className="col s10 mt-1">
            <textarea
              id="textarea-content"
              className="materialize-textarea"
              placeholder="What's on your mind ?"
            />
          </div>
        </div>
        <div className="row">
          <div className="col s10">
            <div className="right">
              <button
                className="btn waves-effect waves-light grey lighten-5 mr-1"
                type="submit"
                name="btn-cancel"
              >
                <span className="text-grey-color">Cancel</span>
              </button>
              <button
                className="btn waves-effect waves-light pink accent-1"
                type="submit"
                name="btn-post"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
