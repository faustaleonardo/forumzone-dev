import React from 'react';
import { Redirect } from 'react-router-dom';
import QuestionCard from '../partials/QuestionCard';
import SidebarUser from '../partials/SidebarUser';
import Pagination from '../partials/Pagination';

const QuestionsISolve = props => {
  if (!props.auth) {
    return <Redirect to="/login" />;
  }
  return (
    <div className="row mt-2">
      <div className="col s12">
        <h3 className="text-grey-color center">
          Amazing! Keep on contributing!
        </h3>
      </div>
      <div className="col s3 mt-1">
        <SidebarUser />
      </div>
      <div className="col s9 mt-1">
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <Pagination />
      </div>
    </div>
  );
};

export default QuestionsISolve;
