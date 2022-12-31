/* eslint-disable react-hooks/exhaustive-deps */
// react libraries
import React, { useState, useContext } from "react";

// third-party libraries
import { FiChevronDown } from "react-icons/fi";

// styles
import styles from "./filter.module.css";

// context
import { ThemeContext } from "../../context/ThemeContext";

// custom hook
const useOutsideClick = (callback: any) => {
  const ref: any = React.useRef(null);
  React.useEffect(() => {
    const handleClick = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref]);
  return ref;
};

// filter component
const Filter = ({ onSelect }: any) => {
  const { toggle }: any = useContext(ThemeContext);
  const [listOpen, setListOpen] = useState(false);
  const [headerTitle, setHeaderTitle] = useState("Filter by Region");
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  // Closes dropdown when outside of component is clicked
  const handleClickOutside = () => {
    setListOpen(false);
  };
  const ref = useOutsideClick(handleClickOutside);

  /**
   * Sets the region selected
   * @param region
   */
  const selectRegion = (region: string) => {
    setHeaderTitle(region);
    setListOpen(!listOpen);
    onSelect(region);
  };

  /**
   * Resets the selection
   * @param evt
   */
  const resetSelection = (evt: any) => {
    evt.preventDefault();
    setHeaderTitle(evt.target.value);
    setListOpen(!listOpen);
    onSelect("");
  };

  return (
    <div
      className={`${styles.filter_bar} ${
        toggle ? styles.dark_theme : styles.light_theme
      }`}
    >
      <div
        ref={ref}
        onClick={() => setListOpen(!listOpen)}
        className={`${styles.filter_header_title} ${
          toggle ? styles.dark_theme : styles.light_theme
        }`}
      >
        {headerTitle}
        <FiChevronDown />
      </div>
      {listOpen && (
        <div
          className={`${styles.filter_list} ${styles.filter_header_title} ${
            toggle ? styles.dark_theme : styles.light_theme
          }`}
        >
          {headerTitle !== "Filter by Region" && (
            <button
              onClick={(evt) => resetSelection(evt)}
              value="Filter by Region"
              className={`${styles.filter_list_item}  ${
                toggle ? styles.dark_theme : styles.light_theme
              }`}
            >
              Filter by Region
            </button>
          )}
          {regions.map((region, index) => (
            <button
              onClick={() => selectRegion(region)}
              key={index}
              className={`${styles.filter_list_item} ${
                toggle ? styles.dark_theme : styles.light_theme
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
