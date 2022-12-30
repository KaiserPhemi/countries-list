// react libraries
import React from "react";
import { Link } from "react-router-dom";

// third party libraries
import { FiArrowLeft } from "react-icons/fi";
// styles
import styles from "./countryDetail.module.css";

// country detail component
const CountryDetail = ({ country }: any) => {
  console.log("inside", country);
  const nativeName: { [key: string]: any } = country.name.nativeName;

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
          <section className={styles.country_data}>
            <dl>
              <dt>Native Name: </dt>
              <dd>{nativeName[Object.keys(nativeName)[0]].official}</dd>
              <dt>Population: </dt>
              <dd>{country.population.toLocaleString("en-US")}</dd>
              <dt>Region: </dt>
              <dd>{country.region}</dd>
              <dt>Sub Region</dt>
              <dd>{country.subregion}</dd>
              <dt>Capital: </dt>
              <dd>{country.capital[0] || country.capital}</dd>
            </dl>
            <dl>
              <dt>{"Top Level Domain: "}</dt>
              <dd>{country.tld[0]}</dd>
              <dt>{"Currency: "}</dt>
              <dd>
                {country.currencies[Object.keys(country.currencies)[0]].name}
              </dd>
              <dt>{"Currency Symbol: "}</dt>
              <dd>
                {country.currencies[Object.keys(country.currencies)[0]].symbol}
              </dd>
              <dt>Languages: </dt>
              {Object.values(country.languages).join(", ")}
            </dl>
          </section>
          <section className={styles.border_countries_list}>
            <p>{`Border Countries: `}</p>
            {<button className={styles.border_countries_item}>Nigeria</button>}
          </section>
        </section>
      </section>
    </div>
  );
};

export default CountryDetail;
