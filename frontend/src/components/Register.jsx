import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";

function Register({ handleRegister }) {
  const { values, handleChange } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    handleRegister(values);
  };

  return (
    <div className="login">
      <h2 className="login__title">Регистрация</h2>
      <form onSubmit={handleSubmit} className="login__form">
        <input
          id="input-email"
          type="email"
          placeholder="Email"
          name="email"
          className="login__input"
          required
          onChange={handleChange}
          value={values.email || ""}
        />
        <input
          id="input-password"
          type="password"
          placeholder="Пароль"
          name="password"
          className="login__input"
          required
          onChange={handleChange}
          value={values.password || ""}
        />
        <button className="login__button" type="submit">
          Зарегистрироваться
        </button>
        <Link to="/sign-in" className="login__link">
          Уже зарегистрированы? Войти
        </Link>
      </form>
    </div>
  );
}

export default Register;
