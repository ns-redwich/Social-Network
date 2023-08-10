import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const logout = () => {
    props.logout();
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoFrame}>
        <img src="logo.jpg" alt="logotype" className={styles.logoImg} />
        <p className={styles.logoText}>Social network</p>
      </div>
      <div className={styles.menu}>
        <nav className={styles.navBar}>
          <NavLink
            to="/profile"
            className={(navData) =>
              navData.isActive ? styles.active : styles.navLink
            }
          >
            <div className={styles.navItem}>Profile</div>
          </NavLink>
          <NavLink
            to="/dialogs"
            className={(navData) =>
              navData.isActive ? styles.active : styles.navLink
            }
          >
            <div className={styles.navItem}>Dialogs</div>
          </NavLink>
          <NavLink
            to="/users"
            className={(navData) =>
              navData.isActive ? styles.active : styles.navLink
            }
          >
            <div className={styles.navItem}>Users</div>
          </NavLink>
          <NavLink
            to="/news"
            className={(navData) =>
              navData.isActive ? styles.active : styles.navLink
            }
          >
            <div className={styles.navItem}>News</div>
          </NavLink>
          <NavLink
            to="/music"
            className={(navData) =>
              navData.isActive ? styles.active : styles.navLink
            }
          >
            <div className={styles.navItem}>Music</div>
          </NavLink>
          <NavLink
            to="/settings"
            className={(navData) =>
              navData.isActive ? styles.active : styles.navLink
            }
          >
            <div className={styles.navItem}>Settings</div>
          </NavLink>
        </nav>
        <div className={styles.loginBlock}>
          {props.isAuth ? (
            <div className={styles.loginBlockIsAuthWrapper}>
              <p className={styles.loginBlock_Text}>{props.login}</p>
              <button
                onClick={logout}
                className={styles.loginBlock_logoutBtn}
                type="button"
              >
                log out
              </button>
            </div>
          ) : (
            <p className={styles.loginBlock_Text}>Login</p>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
