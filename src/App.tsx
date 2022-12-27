import React, { useState, useEffect } from "react";

// components
import { Navbar, SearchBar, Filter, Country } from "./components";

// styles
import styles from "./App.module.css";

// api
import { fetchCountries } from "./api";

// main app component
const App = () => {
  const [countries, setCountries] = useState([]);

  // fetch countries on render
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchCountries.fetchAll();
      setCountries(result.data);
    };
    fetchData();
  }, []);

  const handleClick = (name: string) => {
    console.log("we clicked: ", name);
  };

  return (
    <div className={styles.App}>
      <Navbar />
      <div className={styles.app_header}>
        <SearchBar />
        <Filter />
      </div>
      <div className={styles.country_list}>
        {countries.length > 0
          ? countries.map((country: any, index: number) => (
              <Country
                key={index}
                country={country}
                onClick={() => handleClick(country.name.common)}
              />
            ))
          : "No countries listed"}
      </div>
    </div>
  );
};

export default App;
