import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandSpock } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Overview.css';

const Search = () => (
  <div id="overview-search-main">
    <div id="overview-search-logo">
      <FontAwesomeIcon data-testid="search-logo" icon={faHandSpock} />
    </div>
    <div id="overview-search-searchbar">
      <label htmlFor="overview-search-input">
        Search:
        <input
          type="text"
          name="search"
          data-testid="search-input"
          id="overview-search-input"
          placeholder=""
        />
        <FontAwesomeIcon data-testid="search-icon" icon={faMagnifyingGlass} />
      </label>
    </div>
  </div>
);

export default Search;
