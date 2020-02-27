import React from 'react';

const Signup = () => {
  return (
    <div className="row">
      <div className="col s12 m6 offset-m3">
        <div className="card">
          <div className="card-content">
            <span className="card-title">Join us!</span>
            <form>
              <div>
                <label for="first_name">First Name</label>{' '}
                <input name="first_name" type="text" />
              </div>
              <div>
                <label for="last_name">Last Name</label>
                <input name="last_name" type="text" />
              </div>
              <div>
                <label for="email">Email</label>
                <input name="email" type="email" />
              </div>
              <div>
                <label for="password">Password</label>
                <input name="password" type="password" />
              </div>
              <div>
                <label for="password">Password Confirmation</label>
                <input name="passwordConfirmation" type="password" />
              </div>
              <button
                class="btn waves-effect waves-light pink accent-1 button-action"
                type="submit"
                name="action"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
