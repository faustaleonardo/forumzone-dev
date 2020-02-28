import React, { Component } from 'react';
import Searchbar from './partials/Searchbar';
import Sidebar from './partials/Sidebar';
import QuestionCard from './partials/QuestionCard';
import Pagination from './partials/Pagination';

class Landing extends Component {
  render() {
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
          <h3 className="text-grey-color">What's new ?</h3>
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
        </div>
        <div className="col offset-s3 s9">
          <Pagination />
        </div>
      </div>
    );
  }
}

export default Landing;
