import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../../actions';

class Header extends Component {
  renderContent() {
    if (
      Object.keys(this.props.auth).length === 0 &&
      this.props.auth !== false
    ) {
      return;
    }
    if (this.props.auth === false) {
      return (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
    return (
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li className="mr-1">
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <button
            className="waves-effect waves-light btn grey ligthen-1"
            onClick={this.props.logout}
          >
            Logout
          </button>
        </li>
      </ul>
    );
  }

  render() {
    return (
      <nav className="pink accent-2">
        <div className="nav-wrapper">
          <div className="row">
            <div className="col s12">
              <Link to="/" className="brand-logo">
                <span className="text-uppercase app-name">Forumzone</span>
              </Link>
              {this.renderContent()}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, actions)(Header);
