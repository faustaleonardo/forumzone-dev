import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import SidebarUser from './partials/SidebarUser';
import Preloader from './partials/preloader';

// PENDING
class Profile extends Component {
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    if (
      Object.keys(this.props.auth).length === 0 &&
      this.props.auth !== false
    ) {
      return <Preloader />;
    }
    if (this.props.auth === false) {
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
              <span className="card-title">Your Profile</span>
              <form>
                <div>
                  <label htmlFor="name">Name</label>
                  <input name="name" type="text" />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input name="name" type="email" />
                </div>
                <div>
                  <label htmlFor="photo">Photo</label>
                  <input name="photo" type="text" />
                </div>
                <div>
                  <label htmlFor="jobs">Jobs</label>
                  <input name="jobs" type="text" />
                </div>
                <div>
                  <label htmlFor="age">Age</label>
                  <input name="age" type="text" />
                </div>
                <div>
                  <label htmlFor="accessibility">Accessibility</label>
                  <div className="switch mt-1">
                    <label>
                      Off
                      <input type="checkbox" />
                      <span className="lever"></span>
                      On
                    </label>
                  </div>
                </div>
                <button
                  className="btn waves-effect waves-light pink accent-1 button-action"
                  type="submit"
                  name="action"
                >
                  Update Profile
                </button>
              </form>
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
