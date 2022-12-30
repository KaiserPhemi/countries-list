// react libraries
import React from "react";
import { Link } from "react-router-dom";

// third party libraries
import { FiArrowLeft } from "react-icons/fi";
// styles
import styles from "./country.module.css";

// country detail component
const CountryDetail = ({ country }: any) => {
  console.log("inside", country);

  return (
    <div className={styles.country_detail}>
      <Link to="/">
        <section className={styles.cta_back}>
          <FiArrowLeft strokeWidth={3} />
          <button type="button">Back</button>
        </section>
      </Link>
      <section className={styles.details_section}>
        <section className={styles.details_section_flag}>
          <img src={country.flags.svg || country.flags.png} alt="flag" />
        </section>
        <section className={styles.details_section_data}>
          <h2>{country.name.common}</h2>
          <section className="">
            <section className="">
              <dl>
                <dt>Native Name</dt>
                <dd></dd>
                <dt>Population</dt>
                <dd>{country.population.toLocaleString("en-US")}</dd>
                <dt>Region</dt>
                <dd>{country.region}</dd>
                <dt>Sub Region</dt>
                <dd></dd>
                <dt>Capital</dt>
                <dd>{country.capital[0] || country.capital}</dd>
              </dl>
            </section>
            <section className="">
              <dl>
                <dt>Top Level Domain</dt>
                <dd>{country.tld[0]}</dd>
                <dt>Currency</dt>
                <dd></dd>
                <dt>Languages</dt>
                <dd></dd>
              </dl>
            </section>
          </section>
          <section>
            Border Countries:
            {}
            <button></button>
          </section>
        </section>
      </section>
    </div>
  );
};

export default CountryDetail;
