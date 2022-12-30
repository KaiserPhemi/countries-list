// react libraries
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// third party libraries
import { FiArrowLeft } from "react-icons/fi";
import PuffLoader from "react-spinners/PuffLoader";

// styles
import styles from "./countryDetail.module.css";

// country detail component
const CountryDetail = ({ selectedCountry }: any) => {
  const [borderCountry, setBorderCountry] = useState({});
  const [country, setCountry] = useState(selectedCountry);

  // useEffect(() => {
  //   console.log("logged");
  // }, []);

  const handleBorderSelection = (evt: any, item: string) => {
    console.log("clicked", item);
    // fetch country information
    // set state
  };

  console.log("logged border: ", country);
  return (
    <div className={styles.country_detail}>
      <Link to="/">
        <section className={styles.cta_back}>
          <FiArrowLeft strokeWidth={3} />
          <button type="button">Back</button>
        </section>
      </Link>
      {country ? (
        <section className={styles.details_section}>
          {country.flags.svg ? (
            <section className={styles.details_section_flag}>
              <img src={country.flags.svg} alt="flag" />
            </section>
          ) : (
            <PuffLoader
              color="blue"
              size={150}
              cssOverride={{
                display: "inline-block",
                position: "absolute",
                top: "50%",
                left: "45%",
              }}
            />
          )}

          <section className={styles.details_section_data}>
            <h2>{country.name.common}</h2>
            <section className={styles.country_data}>
              <dl>
                <dt>Native Name: </dt>
                <dd>
                  {
                    country.name.nativeName[
                      Object.keys(country.name.nativeName)[0]
                    ].official
                  }
                </dd>
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
                  {
                    country.currencies[Object.keys(country.currencies)[0]]
                      .symbol
                  }
                </dd>
                <dt>Languages: </dt>
                {Object.values(country.languages).join(", ")}
              </dl>
            </section>
            <section className={styles.border_countries_list}>
              <p>{`Border Countries: `}</p>
              {country.borders
                ? country.borders.map((item: any, index: number) => (
                    <button
                      key={index}
                      onClick={(evt: any) => handleBorderSelection(evt, item)}
                      className={styles.border_countries_item}
                    >
                      {item}
                    </button>
                  ))
                : "N/A"}
            </section>
          </section>
        </section>
      ) : (
        <PuffLoader
          color="blue"
          size={150}
          cssOverride={{
            display: "inline-block",
            position: "absolute",
            top: "50%",
            left: "45%",
          }}
        />
      )}
    </div>
  );
};

export default CountryDetail;
