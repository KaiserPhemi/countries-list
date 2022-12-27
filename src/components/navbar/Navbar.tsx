import React, { useState } from "react";

import { BsFillMoonFill, BsSun } from "react-icons/bs";

// styles
import styles from "./navbar.module.css";

// navbar component
const Navbar = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  // handles click
  const handleClick = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className={styles.countries_navbar}>
      <p className={styles.logo}>Where in the world?</p>
      <div className={styles.theme_switch} onClick={handleClick}>
        {darkTheme ? <BsSun /> : <BsFillMoonFill />}
        <p>{`${darkTheme ? "Light Mode" : "Dark Mode"}`}</p>
      </div>
    </div>
  );
};

export default Navbar;
