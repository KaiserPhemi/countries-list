import React from "react";

// styles
import styles from "./filter.module.css";

const Filter = ({ onSelect }: any) => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  return (
    <div className={styles.filter_tab}>
      <select onChange={(evt) => onSelect(`${evt.target.value.toLowerCase()}`)}>
        <option value="">Filter by Region</option>
        {regions.map((region, index) => (
          <option key={index} value={`${region.toLowerCase()}`}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
