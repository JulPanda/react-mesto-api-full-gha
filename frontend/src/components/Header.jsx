import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import logo from "../images/logo.svg";

function Header({ userData, logOut }) {
  //const { email } = userData;
  return (
    <header className="header">
      <img
        src={logo}
        className="header__logo"
        alt="Логотип Место"
        //src="<%=require('./images/logo.svg')%>"
      />
      <Routes>
        <Route
          path="/sign-up"
          element={
            <NavLink className="header__link" to="/sign-in">
              Войти
            </NavLink>
          }
        ></Route>
        <Route
          path="/sign-in"
          element={
            <NavLink className="header__link" to="/sign-up">
              Регистрация
            </NavLink>
          }
        ></Route>
        <Route
          path="/"
          element={
            <div className="header__user">
              <p className="header__user-email">{userData}</p>
              <button
                onClick={logOut}
                type="button"
                className="header__user-quit"
              >
                Выйти
              </button>
            </div>
          }
        ></Route>
      </Routes>
    </header>
  );
}

export default Header;
