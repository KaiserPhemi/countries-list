import { useContext } from "react";
import { Link } from "react-router-dom";

// third-party libraries
import { BsFillMoonFill, BsSun } from "react-icons/bs";

// styles
import styles from "./navbar.module.css";

// context
import { ThemeContext } from "../../context/ThemeContext";

// navbar component
const Navbar = () => {
  const { toggle, toggleFunction }: any = useContext(ThemeContext);

  return (
    <div
      className={`${styles.countries_navbar} ${
        toggle ? styles.dark_theme : styles.light_theme
      }`}
    >
      <Link to="/">
        <p className={styles.logo} title="home">
          Where in the world?
        </p>
      </Link>
      <div className={styles.theme_switch} onClick={toggleFunction}>
        {toggle ? <BsSun /> : <BsFillMoonFill />}
        <p>{`${toggle ? "Light Mode" : "Dark Mode"}`}</p>
      </div>
    </div>
  );
};

export default Navbar;
