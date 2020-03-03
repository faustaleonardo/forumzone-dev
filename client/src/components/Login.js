import React from 'react';

const Login = () => {
  return (
    <div className="row mt-2">
      <div className="col s12 m6 offset-m3">
        <div className="card">
          <div className="card-content">
            <span className="card-title">Welcome back!</span>
            <form>
              <div>
                <label htmlFor="email">Email</label>
                <input name="email" type="email" />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input name="password" type="password" />
              </div>
              <button
                className="btn waves-effect waves-light pink accent-1 button-action"
                type="submit"
                name="action"
              >
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
