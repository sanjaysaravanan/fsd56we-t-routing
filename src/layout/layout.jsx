import styles from "./layout.module.css";
import { Outlet, Link } from "react-router-dom";
import links from "../links.json";
import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";

const Layout = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "#1b1b1b",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <header className={styles.header}>
        <h3>Simple Students Application</h3>
        {links.map((link) => (
          <Link key={link.path} to={link.path} style={{ margin: 16 }}>
            {link.name}
          </Link>
        ))}
        <button onClick={handleTheme}>
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </header>
      <aside className={styles.sidebar}>
        Navigations Goes Here
        <br />
        {links.map((link) => (
          <React.Fragment key={link.path}>
            <Link key={link.path} to={link.path} style={{ margin: 16 }}>
              {link.name}
            </Link>
            <br />
          </React.Fragment>
        ))}
      </aside>
      <div className={styles.content}>
        <Outlet />
      </div>
      <footer className={styles.footer}>Footer Contents Goes Here</footer>
    </div>
  );
};

export default Layout;
