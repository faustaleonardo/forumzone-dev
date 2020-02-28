import React from 'react';
import Sidebar from './partials/Sidebar';
import Searchbar from './partials/Searchbar';
import { Link } from 'react-router-dom';

const Top20Solvers = () => {
  return (
    <div className="row mt-2">
      <div className="col s2">
        <a
          href="questions/new"
          class="waves-effect waves-light pink accent-1 btn-small btn-new-discussion"
        >
          <i class="material-icons right">create</i>New
        </a>
      </div>
      <div className="col s10">
        <select className="filter-dropbox right">
          <option value="latest" selected>
            Latest
          </option>
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
      <div className="col s9 mt-1">
        <h3 className="text-grey-color">
          There you go! The best solvers so far!
        </h3>

        <div className="user-header mt-2 mb-2">
          <Link to="/profile">
            <img
              src="https://avatars2.githubusercontent.com/u/7688999?s=460&v=4"
              alt="avatar"
              className="user-question-photo"
            />
          </Link>
          <div className="user-details">
            <div>
              <span className="text-grey-color">1. </span>{' '}
              <Link to="/profile">Fausta Leonardo</Link>
            </div>
            <div>
              <span className="text-grey-color">
                {' '}
                Software Engineer | Technical Architect | Content Creator
              </span>
            </div>
          </div>
        </div>

        <div className="user-header mb-2">
          <Link to="/profile">
            <img
              src="https://avatars2.githubusercontent.com/u/7688999?s=460&v=4"
              alt="avatar"
              className="user-question-photo"
            />
          </Link>
          <div className="user-details">
            <div>
              <span className="text-grey-color">2. </span>{' '}
              <Link to="/profile">Fausta Leonardo</Link>
            </div>
            <div>
              <span className="text-grey-color">
                {' '}
                Software Engineer | Technical Architect | Content Creator
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top20Solvers;
