import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Activity from './partials/Activity';
import Pagination from './partials/Pagination';

class Profile extends Component {
  render() {
    if (!this.props.auth) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <div className="user-profile grey lighten-3">
          <img
            src="https://avatars2.githubusercontent.com/u/7688999?s=460&v=4"
            className="user-photo"
            alt="avatar"
          />
          <div className="user-card mt-2">
            <div className="user-name">Fausta Leonardo</div>
            <div className="text-grey-color user-jobs">
              Software Engineer | Writer | Content Creator
            </div>
            <div className="text-grey-color">Member since two years ago</div>
          </div>
        </div>
        <div className="container mt-2">
          <div className="row">
            <div className="col s10 offset-s1">
              <Activity />
              <Activity />
              <Activity />
              <Activity />
              <Activity />
              <Activity />
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Profile);
