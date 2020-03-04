import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SidebarUser from './partials/SidebarUser';

const ChangePassword = props => {
  if (!props.auth) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="row mt-2">
      <div className="col s3">
        <SidebarUser />
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

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(ChangePassword);
