// react libraries
import React from "react";

// styles
import styles from "./country.module.css";

// country thumbnail component
const Country = ({country}: any) => {
  const countryCapital = country.capital ? country.capital[0]: "N/A";
  return (
    <div className={styles.country}>
      <div className={styles.country_flag}>
        <img src={country.flags.svg} alt="flag" />
      </div>
      <div className={styles.country_data}>
        <h3>{country.name.common}</h3>
        <dl>
          <dt>Population</dt>
          <dd>{country.population.toLocaleString("en-US")}</dd>
          <dt>Region</dt>
          <dd>{country.region}</dd>
          <dt>Capital</dt>
          <dd>{countryCapital}</dd>
        </dl>
      </div>
    </div>
  );
};

export default Country;
