import React from 'react';

const questionCard = () => {
  return (
    <div class="row">
      <div class="col s12">
        <div class="card">
          <div class="card-content">
            <span class="card-title">How to fix this problem ?</span>
            <p className="text-grey-color left">
              posted by{' '}
              <a href="/" className="text-uppercase">
                John Doe
              </a>{' '}
              - 3 minutes ago
            </p>
            <div className="text-grey-color right">
              <i className="material-icons">remove_red_eye</i>
              <div className="side-content pl-5 mr-12">12</div>
              <i className="material-icons">comment</i>
              <div className="side-content pl-5">20</div>
            </div>
          </div>
          <div class="card-action">
            <a href="/" id="link-to-question">
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default questionCard;
