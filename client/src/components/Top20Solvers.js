import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './partials/Sidebar';

const Top20Solvers = () => {
  return (
    <div className="row mt-2">
      <div className="col s12">
        <h3 className="text-grey-color center">
          There you go! The best solvers so far!
        </h3>
      </div>
      <div className="col s3 mt-1">
        <Sidebar />
      </div>
      <div className="col s9 mt-1">
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
