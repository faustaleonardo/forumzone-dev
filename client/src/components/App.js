import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './partials/Header';
import Landing from './Landing';
import Signup from './Signup';
import Login from './Login';
import Settings from './Settings';
import ChangePassword from './ChangePassword';
import QuestionsSolved from './QuestionsSolved';
import Questions from './Questions';
import Bookmarks from './Bookmarks';
import Profile from './Profile';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <div className="container">
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/settings" component={Settings} />
            <Route path="/password/change" component={ChangePassword} />
            <Route exact path="/questions/me" component={Questions} />
            <Route path="/questions/solved/me" component={QuestionsSolved} />
            <Route path="/bookmarks" component={Bookmarks} />
          </div>
          <Route path="/profile" component={Profile} />
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
