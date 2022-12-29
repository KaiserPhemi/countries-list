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
      <section>
        <section></section>
        <section>
          <h2>{country.name.common}</h2>
          <section>
            <dl>
              <dt>Native Name</dt>
              <dd></dd>
              <dt>Population</dt>
              <dd></dd>
              <dt>Region</dt>
              <dd></dd>
              <dt>Sub Region</dt>
              <dd></dd>
              <dt>Capital</dt>
              <dd>{country.capital[0]}</dd>
              <dt>Top Level Domain</dt>
              <dd>{country.tld[0]}</dd>
              <dt>Currency</dt>
              <dd>
                {country.currencies[Object.keys(country.currencies)[0]].name}
              </dd>
              <dt>Languages</dt>
              <dd>{country.languages[Object.keys(country.languages)[0]]}</dd>
              <dt></dt>
              <dd></dd>
            </dl>
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
