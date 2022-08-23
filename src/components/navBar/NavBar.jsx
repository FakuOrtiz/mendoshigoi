import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseconfig";
import styles from "./NavBar.module.css";
import logo from "../../assets/logo.png";
import BurgerMenu from "../burgerMenu/BurgerMenu";

const NavBar = ({ isAuth, setIsAuth }) => {
  const navigate = useNavigate();

  const logOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };

  return (
    <nav className={styles.container}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={logo} alt="Mendoshigoi Logo" />
        <NavLink to="/" className={styles.title}>
          <h1 className={styles.title}>Mendoshigoi</h1>
        </NavLink>
      </div>
      <div className={styles.navContainer}>
        <NavLink to="/" className={styles.linkBtn}>
          Inicio
        </NavLink>
        {!isAuth ? (
          <NavLink to="/login" className={styles.linkBtn}>
            Iniciar sesión
          </NavLink>
        ) : (
          <>
            <NavLink to="/createpost" className={styles.linkBtn}>
              Postear
            </NavLink>
            <NavLink to="#" onClick={logOut} className={styles.linkBtn}>
              Cerrar sesión
            </NavLink>
          </>
        )}
        <div className={styles.burger}>
          <BurgerMenu logOut={logOut} isAuth={isAuth} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
