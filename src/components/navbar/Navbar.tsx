import * as React from "react";

// styles
import styles from "./navbar.module.css";

// navbar component
const Navbar = () => {
  return (
    <div className={styles.countries_navbar}>
      <div>
        <p>Where in the world?</p>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
