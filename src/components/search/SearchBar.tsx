// react libraries
import React from "react";

// third-party libraries
import { FiSearch } from "react-icons/fi";

// styles
import styles from "./search.module.css";

const SearchBar = ({ onChange, onSubmit, query }: any) => {
  return (
    <div className={styles.search_bar}>
      <FiSearch color="#aaa" />
      <form onSubmit={(evt) => onSubmit(evt)}>
        <input
          className={styles.search_bar_input}
          type="search"
          placeholder="Search for a country..."
          onChange={(evt) => onChange(evt)}
          value={query}
        />
      </form>
    </div>
  );
};

export default SearchBar;
