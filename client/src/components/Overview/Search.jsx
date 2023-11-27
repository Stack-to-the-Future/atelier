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
      <input
        data-testid="search-input"
        id="overview-search-input"
        placeholder=""
      />
      <FontAwesomeIcon data-testid="search-icon" icon={faMagnifyingGlass} />
    </div>
  </div>
);

export default Search;
