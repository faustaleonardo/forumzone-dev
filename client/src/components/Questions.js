import React from 'react';
import QuestionCard from './partials/QuestionCard';
import SidebarUser from './partials/SidebarUser';
import Pagination from './partials/Pagination';

const Questions = () => {
  return (
    <div className="row mt-2">
      <div className="col s3 mt-1">
        <SidebarUser />
      </div>
      <div className="col s9 mt-1">
        <h3 className="text-grey-color">
          You are curious which is a good thing!
        </h3>
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

export default Questions;
