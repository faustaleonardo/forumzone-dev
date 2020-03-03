import React, { Component } from 'react';
import showAlert from './../utils/showAlert';
import * as actions from './../actions';
import { connect } from 'react-redux';

class Signup extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    if (!this.state.email || !this.state.password) {
      showAlert('error', 'Oops...', 'All fields must be filled!');
      return;
    }

    if (this.state.password !== this.state.passwordConfirmation) {
      showAlert('error', 'Oops...', 'Your password does not match');
      this.setState({ password: '', passwordConfirmation: '' });
      return;
    }

    await this.props.signup(this.state);
    if (this.props.error) {
      showAlert('error', 'Oops...', this.props.error);
      this.props.clearError();
      return;
    }

    this.props.history.push('/');
  };

  render() {
    return (
      <div className="row mt-2">
        <div className="col s12 m6 offset-m3">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Join us!</span>
              <form onSubmit={this.handleSubmit}>
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    name="name"
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </div>
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
                <div>
                  <label htmlFor="passwordConfirmation">
                    Password Confirmation
                  </label>
                  <input
                    name="passwordConfirmation"
                    type="password"
                    value={this.state.passwordConfirmation}
                    onChange={this.handleChange}
                  />
                </div>
                <button
                  className="btn waves-effect waves-light pink accent-1 button-action"
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
  }
}

const mapStateToProps = ({ error }) => {
  return { error };
};

export default connect(mapStateToProps, actions)(Signup);
