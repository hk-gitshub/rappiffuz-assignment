import React, { useState } from "react";
// import { Link } from "react-router-dom";
import {  AuthErrorCodes, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../FirestoreInit";
import "./pages.css";

function Login(props) {
  const {setLoginStatus, input, setInput}=props;
  // const [input, setInput] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

// handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    let email = input.email.toLowerCase().trim();
    let password = input.password;

    // sign in user
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential.user);
        // localStorage.setItem("user", )
        setLoginStatus(true)
        setInput({})
      })
      .catch((err) => {
        if (
        err.code === AuthErrorCodes.INVALID_PASSWORD ||
        err.code === AuthErrorCodes.USER_DELETED
      ) {
        setError("The email address or password is incorrect");
      } else {
        console.log(err.code);
        alert(err.code);
      }
      });
  };

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    // <div className="form-body">
      <form autoComplete="off" className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email" className="label-name">
            <span className="content-name">Email</span>
          </label>
        <div className="email-input">
          <input
            className="ele"
            name="email"
            placeholder="Enter email"
            type="text"
            onChange={handleChange}
            value={input.email}
            required
            autoComplete="true"
          />
        </div>
        <label htmlFor="password" className="label-name">
            <span className="content-name">Password</span>
          </label>
        <div className="password-input">
          <input
            className="ele"
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
            value={input.password}
            type="password"
            required
            autoComplete="true"
          />
        </div>
        {/* <div className="clk-btn"> */}
          {error ? <p className="login-error">{error}</p> : null}
          <button className="clk-btn" title="Login" type="submit">
            Login
          </button>
        {/* </div> */}
      </form>
    // </div>
  );
}

export default Login;
