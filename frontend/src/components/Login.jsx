import React from "react";
import { useForm } from "../hooks/useForm";

function Login({ handleLogin }) {
  const { values, handleChange } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(values);
  };

  return (
    <div className="login">
      <h2 className="login__title">Вход</h2>
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
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
