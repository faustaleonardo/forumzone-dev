import React from 'react';
import SidebarUser from './partials/SidebarUser';

const Profile = () => {
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
                <label htmlFor="first_name">First Name</label>
                <input name="first_name" type="text" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input name="email" type="email" />
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
};

export default Profile;
