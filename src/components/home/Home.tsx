import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

// third-party libraries
import PuffLoader from "react-spinners/PuffLoader";

// styles
import styles from "./home.module.css";

// components
import { SearchBar, Filter, Country } from "../index";

// api
import { fetchCountries } from "../../api";

// context
import { ThemeContext } from "../../context/ThemeContext";

//
const Home = ({ countryList, handleClick, setRegion }: any) => {
  const { toggle }: any = useContext(ThemeContext);
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
    <div
      className={`${styles.home_page}  ${
        toggle ? styles.dark_theme : styles.light_theme
      }`}
    >
      <div
        className={`${styles.app_header}  ${
          toggle ? styles.dark_theme : styles.light_theme
        }`}
      >
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
            size={150}
            cssOverride={{
              position: "absolute",
              height: "100%",
              width: "100%",
              margin: "auto",
              top: "50%",
              right: "0",
              left: "0",
              color: `${toggle ? "#FAFAFA" : "#111517"}`,
              background: `${toggle ? "#202C37" : "#FAFAFA"}`,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
