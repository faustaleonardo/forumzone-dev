import React, { Component } from 'react';
import * as actions from './../actions';
import { connect } from 'react-redux';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = async event => {
    event.preventDefault();
    if (!this.state.email || !this.state.password) {
      alert('Email and Password must be provided.');
      return;
    }
    await this.props.login(this.state);
    if (this.props.auth === false) {
      alert('Your email or password is incorrect');
      return;
    }

    this.props.history.push('/');
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="row mt-2">
        <div className="col s12 m6 offset-m3">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Welcome back!</span>
              <form onSubmit={this.handleSubmit}>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
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
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, actions)(Login);
