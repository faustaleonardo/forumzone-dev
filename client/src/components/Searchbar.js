import React from 'react';

const Searchbar = () => {
  return (
    <nav className="grey lighten-3">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              className="bg-grey-color"
              type="search"
              required
            />
            <label className="label-icon" for="search">
              <i className="material-icons">
                <span className="text-grey-color">search</span>
              </i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Searchbar;
