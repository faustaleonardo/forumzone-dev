/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Searchbar from './Searchbar';
import Sidebar from './Sidebar';
import QuestionCard from './QuestionCard';

class Landing extends Component {
  render() {
    return (
      <div className="row">
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
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
        </div>
        <div className="col offset-s3 s9 mt-1">
          <ul className="pagination center">
            <li className="disabled">
              <a href="/">
                <i className="material-icons">chevron_left</i>
                <div className="side-content">Previous</div>
              </a>
            </li>
            <li className="waves-effect">
              <a href="/">
                <div className="side-content">Next</div>
                <i className="material-icons">chevron_right</i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Landing;
