import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import "./BurgerMenu.css";

const BurgerMenu = ({ logOut, isAuth }) => {
  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };

  return (
    <Menu right isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen}>
      <NavLink to="/" onClick={closeSideBar} className="burger-option">
        Inicio
      </NavLink>
      {isAuth && (
        <NavLink
          to="/createpost"
          onClick={closeSideBar}
          className="burger-option"
        >
          Postear
        </NavLink>
      )}
      {!isAuth ? (
        <NavLink to="/login" onClick={closeSideBar} className="burger-option">
          Iniciar sesión
        </NavLink>
      ) : (
        <NavLink
          to="#"
          onClick={() => {
            logOut();
            closeSideBar();
          }}
          className="burger-option"
        >
          Cerrar sesión
        </NavLink>
      )}
    </Menu>
  );
};

export default BurgerMenu;
