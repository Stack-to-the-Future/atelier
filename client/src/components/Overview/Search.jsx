import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandSpock } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Overview.css";

const Search = () => (
  <div id="overview-search-main">
    <div id="overview-search-logo">
      <FontAwesomeIcon icon={faHandSpock} />
    </div>
    <div id="overview-search-searchbar">
      <input id="overview-search-input" placeholder=""></input>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
  </div>
);

export default Search;
