import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="pink accent-2">
        <div className="nav-wrapper">
          <div className="row">
            <div className="col s12">
              <Link to="/" className="brand-logo">
                <span className="text-uppercase app-name">Forumzone</span>
              </Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
