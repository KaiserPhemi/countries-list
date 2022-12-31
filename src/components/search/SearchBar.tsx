// react libraries
import { useContext } from "react";

// third-party libraries
import { FiSearch } from "react-icons/fi";

// styles
import styles from "./search.module.css";

// context
import { ThemeContext } from "../../context/ThemeContext";

const SearchBar = ({ onChange, onSubmit, query }: any) => {
  const { toggle }: any = useContext(ThemeContext);
  return (
    <div
      className={`${styles.search_bar} ${
        toggle ? styles.dark_theme : styles.light_theme
      }`}
    >
      <FiSearch color="#aaa" />
      <form onSubmit={(evt) => onSubmit(evt)}>
        <input
          className={`${styles.search_bar_input} ${
            toggle ? styles.dark_theme : styles.light_theme
          }`}
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
