import React from 'react';
import { Link } from 'react-router-dom';
import Searchbar from './partials/Searchbar';
import Sidebar from './partials/Sidebar';
import Pagination from './partials/Pagination';
import Comment from './partials/Comment';

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
        <div className="user-header">
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
                Posted by <Link to="/profile">Fausta Leonardo</Link>
                <span className="text-grey-color"> 1 hour ago</span>
              </div>
              <div className="user-question-title">
                Can you help me solve this DB problem ?
              </div>
            </div>
          </div>
          <div className="text-grey-color right">
            <i className="material-icons">remove_red_eye</i>
            <div className="side-content pl-5 mr-12">12</div>
            <i className="material-icons">comment</i>
            <div className="side-content pl-5">20</div>
          </div>
          <div className="clearfix" />
        </div>
        <div className="user-question-content mt-3">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
      <div className="col offset-s3 s9">
        <Pagination />
      </div>
    </div>
  );
};

export default Question;
