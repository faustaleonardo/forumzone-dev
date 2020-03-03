import React from 'react';
import { Link } from 'react-router-dom';

const Activity = () => {
  return (
    <div className="activity">
      <h5 className="activity-title">
        Replied to <Link to="/">Database error</Link>{' '}
      </h5>
      <p className="activity-time">3 hours ago</p>
      <p>Have you checked any errors in your app?</p>
    </div>
  );
};

export default Activity;
