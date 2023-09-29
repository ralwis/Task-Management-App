import React, { useState } from "react";
import "./RegisterFormStyles.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../redux/authSlice";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegisterEvent = (e) => {
    e.preventDefault();

    dispatch(
      register({
        name: state.name,
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
        <div className="register-container">
          <div className="form-container">
            <h1 className="opacity">REGISTER</h1>
            <form onSubmit={handleRegisterEvent}>
              <input
                name="name"
                type="text"
                required
                placeholder="Name"
                value={state.name}
                onChange={handleChange}
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                value={state.email}
                onChange={handleChange}
              />

              <input
                name="password"
                type="password"
                required
                placeholder="Password"
                value={state.password}
                onChange={handleChange}
              />

              <button type="submit" className="opacity">
                REGISTER
              </button>
            </form>
            <div className="opacity">
              <p>
                Already have an account? <Link to="/login">LOGIN</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="theme-btn-container"></div>
      </section>
    </>
  );
};

export default RegisterForm;
