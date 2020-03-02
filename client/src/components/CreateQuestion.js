import React from 'react';
import { Link } from 'react-router-dom';
import Searchbar from './partials/Searchbar';
import Sidebar from './partials/Sidebar';

const Question = () => {
  return (
    <div className="row mt-2">
      <div className="col s2">
        <a
          href="questions/new"
          className="waves-effect waves-light pink accent-1 btn-small btn-new-discussion"
        >
          <i className="material-icons right">create</i>New
        </a>
      </div>
      <div className="col s10">
        <select className="filter-dropbox right">
          <option value="latest">Latest</option>
          <option value="popular-this-week">Popular This Week</option>
          <option value="popular-this-time">Popular This Time</option>
          <option value="solved">Solved</option>
          <option value="unsolved">Unsolved</option>
          <option value="no-replied">No Replied Yet</option>
          <option value="Leaderboard">Leaderboard</option>
        </select>
      </div>
      <div className="col s12 mt-1">
        <Searchbar />
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
                class="btn waves-effect waves-light grey lighten-5 mr-1"
                type="submit"
                name="btn-cancel"
              >
                <span className="text-grey-color">Cancel</span>
              </button>
              <button
                class="btn waves-effect waves-light pink accent-1"
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
