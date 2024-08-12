import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Auth.css";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    name: "",
    password: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${API_URL}/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        name: credentials.name,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="signupMainDiv">
      <div className="SUheading">
        <h2>Create A New Account On</h2>
        <h1>TODO</h1>
      </div>
      <div className="signupMain">
        <div className="signup">
          <form onSubmit={handleSubmit}>
            <div className="email">
              <label>Email address</label>
            </div>
            <div className="authT">
              <input
                type="email"
                value={credentials.email}
                onChange={onChange}
                name="email"
                required
                className="authTxt"
              />
            </div>
            <div className="uname">
              <label>Username</label>
            </div>
            <div className="authT">
              <input
                type="text"
                value={credentials.name}
                onChange={onChange}
                name="name"
                required
                className="authTxt"
              />
            </div>
            <div className="pass">
              <label htmlFor="password">Password</label>
            </div>
            <div className="authT">
              <input
                type="password"
                value={credentials.password}
                onChange={onChange}
                name="password"
                id="password"
                required
                className="authTxt"
              />
            </div>
            <button type="submit" className="submit">
              Sign Up
            </button>
            <p>If You Already Have An Account <Link to="/" >SignIn</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
