// react libraries
import React from "react";

// third-party libraries
import { FiSearch } from "react-icons/fi";

// styles
import styles from "./search.module.css";

const SearchBar = () => {
  return (
    <div className={styles.search_bar}>
      <FiSearch color="#bbbbbb" />
      <input type="search" placeholder="Search for a country..." />
    </div>
  );
};

export default SearchBar;
