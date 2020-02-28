import React from 'react';

const Signup = () => {
  return (
    <div className="row mt-2">
      <div className="col s12 m6 offset-m3">
        <div className="card">
          <div className="card-content">
            <span className="card-title">Join us!</span>
            <form>
              <div>
                <label htmlFor="name">Name</label>
                <input name="name" type="text" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input name="email" type="email" />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input name="password" type="password" />
              </div>
              <div>
                <label htmlFor="password">Password Confirmation</label>
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
