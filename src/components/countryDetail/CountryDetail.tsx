// react libraries
import React from "react";
import { Link } from "react-router-dom";

// third party libraries
import { FiArrowLeft } from "react-icons/fi";
// styles
import styles from "./country.module.css";

// country detail component
const CountryDetail = ({ country }: any) => {
  return (
    <div className={styles.country_detail}>
      <Link to="/">
        <section className={styles.cta_back}>
          <FiArrowLeft strokeWidth={3} />
          <button type="button">Back</button>
        </section>
      </Link>
      <section>
        <section></section>
        <section></section>
      </section>
    </div>
  );
};

export default CountryDetail;
