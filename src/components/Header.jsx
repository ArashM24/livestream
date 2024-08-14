import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";
// import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
              {/* <img src={logo} alt="Logo" className={styles.logo} /> */}
              <h2>Stream.Io</h2>
      </Link>
      <nav>
        <ul className={styles.navLinks}>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
