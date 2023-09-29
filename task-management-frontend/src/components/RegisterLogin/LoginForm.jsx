import React, { useState } from "react";
import "./LoginFormStyles.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";

const LoginForm = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleLoginEvent = (e) => {
    e.preventDefault();
    dispatch(
      login({
        email: state.email,
        password: state.password,
      })
    );
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <section className="container">
        <div className="login-container">
          <div className="form-container">
            <h1 className="opacity">LOGIN</h1>
            <form onSubmit={handleLoginEvent}>
              <input
                name="email"
                type="email"
                required
                placeholder="EMAIL"
                value={state.email}
                onChange={handleChange}
              />
              <input
                name="password"
                type="password"
                placeholder="PASSWORD"
                value={state.password}
                onChange={handleChange}
              />
              <button type="submit" className="opacity">
                LOGIN
              </button>
            </form>
            <div className="opacity">
              <Link to="/register">REGISTER</Link>
            </div>
          </div>
        </div>
        <div className="theme-btn-container"></div>
      </section>
    </>
  );
};

export default LoginForm;
