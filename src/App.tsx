import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter, redirect } from "react-router-dom";

// components
import { Navbar, CountryDetail, Home } from "./components";

// styles
import styles from "./App.module.css";

// api
import { fetchCountries } from "./api";

// main app component
const App = () => {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("");
  const [selectedCountry, setSelectedCountry] = useState({});

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
   * Sets the selected country
   * @param country
   * @returns
   */
  const selectCountry = (country: any) => {
    setSelectedCountry(country);
    console.log("selectedd", country);
    return redirect("/country");
  };

  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/country"
            element={<CountryDetail country={selectedCountry} />}
          />
          <Route
            path="/"
            element={
              <Home
                setRegion={setRegion}
                countryList={countries}
                handleClick={selectCountry}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
