import React from 'react';
import { Link } from 'react-router-dom';

const ChangePassword = () => {
  return (
    <div className="row">
      <div className="col s3">
        <ul className="text-align-center">
          <li>
            <Link to="/" className="side-link">
              <span className="text-uppercase">What's new</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="side-link">
              <span className="text-uppercase">Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="side-link">
              <span className="text-uppercase">Bookmarks</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="side-link">
              <span className="text-uppercase">Questions</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="side-link">
              <span className="text-uppercase">Solved Questions</span>
            </Link>
          </li>
          <li>
            <Link to="/settings" className="side-link">
              <span className="text-uppercase">Settings</span>
            </Link>
          </li>
          <li>
            <Link to="/password/change" className="side-link side-link-active">
              <span className="text-uppercase">Change Password</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="col s9">
        <div className="card">
          <div className="card-content">
            <span className="card-title">Change Your Password</span>
            <form>
              <div>
                <label htmlFor="password">Password</label>
                <input name="password" type="password" />
              </div>
              <div>
                <label htmlFor="password">Password Confirmation</label>
                <input name="passwordConfirmation" type="password" />
              </div>
              <button
                className="btn waves-effect waves-light pink accent-1 button-action"
                type="submit"
                name="action"
              >
                Change Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
