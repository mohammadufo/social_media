import { Link, useHistory } from "react-router-dom";
import "./register.css";
import { useRef } from "react";
import axios from "axios";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't mathc !");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">UFO Social Media</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on UFO Social Media.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              ref={username}
              className="loginInput"
              required
            />
            <input
              placeholder="Email"
              ref={email}
              className="loginInput"
              type="email"
              required
            />
            <input
              placeholder="Password"
              type="password"
              ref={password}
              className="loginInput"
              minLength="6"
              required
            />
            <input
              placeholder="Password Again"
              type="password"
              ref={passwordAgain}
              className="loginInput"
              minLength="6"
              required
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton">
              <Link
                to="/login"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Log into Account
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
