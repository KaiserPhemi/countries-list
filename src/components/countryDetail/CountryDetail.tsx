// react libraries
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// third party libraries
import { FiArrowLeft } from "react-icons/fi";
import PuffLoader from "react-spinners/PuffLoader";

// styles
import styles from "./countryDetail.module.css";

// api
import { fetchCountries } from "../../api";

// country detail component
const CountryDetail = ({ selectedCountry }: any) => {
  const [borderCountries, setBorderCountries] = useState([]);
  const [country, setCountry] = useState(selectedCountry);

  // fetchs border countries on render
  useEffect(() => {
    const fetchByCodes = async () => {
      try {
        if (!country.borders) {
          setBorderCountries([]);
        } else {
          const codes = country.borders.join(",");
          const result: any = await fetchCountries.searchByCode(codes);
          setBorderCountries(result.data);
        }
      } catch (error: any) {
        console.log(`${error.message}`);
      }
    };
    fetchByCodes();
  }, [country]);

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
              {borderCountries && borderCountries.length > 0
                ? borderCountries.map((item: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => setCountry(item)}
                      className={styles.border_countries_item}
                    >
                      {item.name.common}
                    </button>
                  ))
                : " N/A"}
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
