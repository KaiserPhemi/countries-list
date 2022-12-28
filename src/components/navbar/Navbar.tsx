import React, { useState } from "react";
import { Link } from "react-router-dom";

// third-party libraries
import { BsFillMoonFill, BsSun } from "react-icons/bs";

// styles
import styles from "./navbar.module.css";

// navbar component
const Navbar = ({ onClick }: any) => {
  const [darkTheme, setDarkTheme] = useState(false);

  // handles click
  const handleClick = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className={styles.countries_navbar}>
      <Link to="/">
        <p className={styles.logo} title="home">
          Where in the world?
        </p>
      </Link>
      <div className={styles.theme_switch} onClick={handleClick}>
        {darkTheme ? <BsSun /> : <BsFillMoonFill />}
        <p>{`${darkTheme ? "Light Mode" : "Dark Mode"}`}</p>
      </div>
    </div>
  );
};

export default Navbar;
