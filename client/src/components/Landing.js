/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

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
          <nav className="grey lighten-3">
            <div className="nav-wrapper">
              <form>
                <div className="input-field">
                  <input
                    id="search"
                    className="bg-grey-color"
                    type="search"
                    required
                  />
                  <label className="label-icon" for="search">
                    <i className="material-icons">
                      <span className="text-grey-color">search</span>
                    </i>
                  </label>
                  <i className="material-icons">close</i>
                </div>
              </form>
            </div>
          </nav>
        </div>
        <div className="col s3 mt-1">
          <ul>
            <li>
              <a href="/myquestions">My Questions</a>
            </li>
          </ul>
        </div>
        <div className="col s9 mt-1"></div>
      </div>
    );
  }
}

export default Landing;
