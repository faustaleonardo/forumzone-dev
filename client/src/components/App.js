import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './partials/Header';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Settings from './Settings';
import ChangePassword from './ChangePassword';
import QuestionsISolve from './questions/QuestionsISolve';
import MyQuestions from './questions/MyQuestions';
import Question from './questions/Question';
import CreateQuestion from './questions/CreateQuestion';
import Bookmarks from './Bookmarks';
import Profile from './Profile';
import Top20Solvers from './Top20Solvers';

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
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/settings" component={Settings} />
            <Route path="/password/change" component={ChangePassword} />
            <Route exact path="/questions/new" component={CreateQuestion} />
            <Route exact path="/questions/me" component={MyQuestions} />
            <Route
              exact
              path="/questions/solved/me"
              component={QuestionsISolve}
            />
            <Route exact path="/questions/1" component={Question} />
            <Route path="/bookmarks" component={Bookmarks} />
            <Route path="/top-20-solvers" component={Top20Solvers} />
          </div>
          <Route path="/profile" component={Profile} />
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
