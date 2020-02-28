import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = () => {
  return (
    <ul className="pagination center mt-3">
      <li className="disabled">
        <Link to="/">
          <i className="material-icons">chevron_left</i>
          <div className="side-content">Previous</div>
        </Link>
      </li>
      <li className="waves-effect">
        <Link to="/">
          <div className="side-content">Next</div>
          <i className="material-icons">chevron_right</i>
        </Link>
      </li>
    </ul>
  );
};

export default Pagination;
