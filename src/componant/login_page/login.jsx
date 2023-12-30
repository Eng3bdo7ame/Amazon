import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";

export default function Login() {
  //it used for make  register button click route to home page
  const navigate = useNavigate();

  //create state for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //function for sign in
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
      })
      .catch((error) => alert(error.message));
  };

  // rest of the code

  //function for register
  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          //it used for make  register button click route to home page
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="amazon_logo">
        <img
          className="login_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon_logo"
        />
      </div>

      <section className="fr_login_container container">
        <div className="login-container">
          <div className="circle circle-one"></div>
          <div className="form-container">
            <h1 className="opacity">Sign-in</h1>
            <form>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" onClick={signIn} className="opacity">
                Sign-in
              </button>
            </form>
            <div className="register-forget opacity">
              <button onClick={register} className="register">
                REGISTER
              </button>
              <Link to="">FORGOT PASSWORD</Link>
            </div>
          </div>
          <div className="circle circle-two"></div>
        </div>
        <div className="theme-btn-container"></div>
      </section>
    </div>
  );
}
