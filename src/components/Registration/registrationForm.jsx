import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import './registrationForm.css';

const RegisterForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = (e) => {
    e.preventDefault();

    const user = {
      fullName,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));


    alert("Account successfully created!");


  };

  return (
    <>
      <Container fluid className="registerContainer">
        <div style={{ fontFamily: 'Monument Extended, sans-serif', textTransform: 'uppercase', fontSize: '1.4rem', letterSpacing: '.1rem' }}>
          <h1 className="mt-4">Register</h1>
        </div>
        <form onSubmit={handleRegistration}>
          <div className="form-group">
            <label htmlFor="exampleName">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleName"
              aria-describedby="nameHelp"
              placeholder="Enter full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary" id="registerBtn">
            Register
          </button>
          <div className="loginAction m-3">
            <Link to="/login"> Already a member? <strong className="clickHere text-violet-700">Click here to sign in!</strong></Link>
          </div>
        </form>
      </Container>
    </>
  );
};

export default RegisterForm;
