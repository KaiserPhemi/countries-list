import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// third-party libraries
import PuffLoader from "react-spinners/PuffLoader";

// styles
import styles from "./home.module.css";

// components
import { SearchBar, Filter, Country } from "../index";

// api
import { fetchCountries } from "../../api";

//
const Home = ({ countryList, handleClick, setRegion }: any) => {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");

  // set list of countries
  useEffect(() => {
    setCountries(countryList);
  }, [countryList]);

  /**
   * handles input changes
   * @param evt
   */
  const handleChange = (evt: any) => {
    setQuery(evt.target.value);
  };

  /**
   * Search API for country
   * @param evt
   */
  const handleSearch = async (evt: any) => {
    evt.preventDefault();
    try {
      const result: any = await fetchCountries.searchCountry(query);
      setCountries(result.data);
      setQuery("");
    } catch (error: any) {
      console.log(`the err ${error.message}`);
    }
  };

  return (
    <div className={styles.home_page}>
      <div className={styles.app_header}>
        <SearchBar
          onChange={handleChange}
          onSubmit={handleSearch}
          query={query}
        />
        <Filter onSelect={setRegion} />
      </div>
      <div className={styles.country_list}>
        {countries && countries.length > 0 ? (
          countries.map((country: any, index: number) => (
            <Link key={index} to="/country">
              <Country country={country} onClick={() => handleClick(country)} />
            </Link>
          ))
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
    </div>
  );
};

export default Home;
