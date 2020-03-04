import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import QuestionCard from './partials/QuestionCard';
import SidebarUser from './partials/SidebarUser';
import Pagination from './partials/Pagination';

class Bookmarks extends Component {
  render() {
    if (!this.props.auth) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="row mt-2">
        <div className="col s12">
          <h3 className="text-grey-color center">
            We keep these for you!{' '}
            <span role="img" aria-label="love">
              💕
            </span>
          </h3>
        </div>
        <div className="col s3 mt-1">
          <SidebarUser />
        </div>
        <div className="col s9 mt-1">
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <Pagination />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Bookmarks);
