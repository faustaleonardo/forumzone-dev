import React from 'react';
import QuestionCard from './partials/QuestionCard';
import SidebarUser from './partials/SidebarUser';
import Pagination from './partials/Pagination';

const QuestionsSolved = () => {
  return (
    <div className="row mt-2">
      <div className="col s3 mt-1">
        <SidebarUser />
      </div>
      <div className="col s9 mt-1">
        <h3 className="text-grey-color">Amazing! Keep on contributing!</h3>
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

export default QuestionsSolved;
