import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// third-party libraries
import PuffLoader from "react-spinners/PuffLoader";

// styles
import styles from "./home.module.css";

// components
import { SearchBar, Filter, Country } from "../index";

//
const Home = ({ countryList, handleClick, setRegion }: any) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(countryList);
  }, [countryList]);

  return (
    <>
      <div className={styles.app_header}>
        <SearchBar />
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
    </>
  );
};

export default Home;
