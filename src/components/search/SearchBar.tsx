import React from "react";

import styles from "./search.module.css";

const SearchBar = () => {
  return (
    <div className={styles.search_bar}>
      <input type="search" placeholder="Search for a country" />
    </div>
  );
};

export default SearchBar;
