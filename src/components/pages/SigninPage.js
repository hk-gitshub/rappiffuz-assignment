import React, { useState } from "react";
import { AuthErrorCodes, createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../FirestoreInit";

function Signup({ setLoginStatus, input, setInput }) {
  // const [input, setInput] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);


  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    let email = input.email.toLowerCase().trim();
    let password = input.password;

    // creating a new user
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        setLoginStatus(true)
        setInput({})
        console.log(userCredential.user);
        // ...
      })
      .catch((err) => {
        if (err.code === AuthErrorCodes.WEAK_PASSWORD) {
          setError("The password is too weak.");
        } else if (err.code === AuthErrorCodes.EMAIL_EXISTS) {
          setError("The email address is already in use.");
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
    <form autoComplete="off" className="signup-form" onSubmit={handleSubmit}>

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
        <button className="clk-btn" title="Sign up" aria-label="Signup" type="submit">
          Create account
        </button>
      {/* </div> */}
    </form>
    // </div>
  );
}
export default Signup;
