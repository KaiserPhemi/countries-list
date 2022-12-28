// react libraries
import React, { useState } from "react";

// third-party libraries
import { FiChevronDown } from "react-icons/fi";

// styles
import styles from "./filter.module.css";

// filter component
const Filter = ({ onSelect }: any) => {
  const [listOpen, setListOpen] = useState(false);
  const [headerTitle, setHeaderTitle] = useState("Filter by Region");
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

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
    <div className={styles.filter_wrapper}>
      <div
        onClick={() => setListOpen(!listOpen)}
        className={styles.filter_header}
      >
        <div className={styles.filter_header_title}>
          {headerTitle}
          <FiChevronDown />
        </div>
      </div>
      {listOpen && (
        <div className={styles.filter_list}>
          {headerTitle !== "Filter by Region" && (
            <button
              onClick={(evt) => resetSelection(evt)}
              value="Filter by Region"
              className={styles.filter_list_item}
            >
              Filter by Region
            </button>
          )}
          {regions.map((region, index) => (
            <button
              onClick={() => selectRegion(region)}
              key={index}
              className={styles.filter_list_item}
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
