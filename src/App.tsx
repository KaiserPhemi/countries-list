import React, { useState, useEffect } from "react";

// third-party libraries
import PuffLoader from "react-spinners/PuffLoader";

// components
import { Navbar, SearchBar, Filter, Country } from "./components";

// styles
import styles from "./App.module.css";

// api
import { fetchCountries } from "./api";

// main app component
const App = () => {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("");

  /**
   * Makes API call
   * @returns
   */

  // fetch countries on render
  useEffect(() => {
    const fetchAll = async () => {
      try {
        const result: any = await fetchCountries.fetchAll();
        setCountries(result.data);
      } catch (error: any) {
        console.log(`${error.message}`);
      }
    };
    fetchAll();
  }, []);

  // fetch countries by region on render
  useEffect(() => {
    const fetchByRegion = async () => {
      try {
        const result: any = await fetchCountries.fetchByRegion(region);
        setCountries(result.data);
      } catch (error: any) {
        console.log(`${error.message}`);
      }
    };
    fetchByRegion();
  }, [region]);

  /**
   * Handles clicking a country
   * @param name
   */
  const handleClick = (name: string) => {
    console.log("Country Selected: ", name);
  };

  return (
    <div className={styles.App}>
      <Navbar />
      <div className={styles.app_header}>
        <SearchBar />
        <Filter onSelect={setRegion} />
      </div>
      <div className={styles.country_list}>
        {countries.length > 0 ? (
          countries.map((country: any, index: number) => (
            <Country
              key={index}
              country={country}
              onClick={() => handleClick(country.name.common)}
            />
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

export default App;
