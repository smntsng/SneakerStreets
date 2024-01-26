import Container from "react-bootstrap/Container";
import './loginform.css'
import { Link } from "react-router-dom";
import React, { useState } from "react";
const LoginForm = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert("Login successful!");

    } else {
        alert("Invalid email or password. Please try again.");
      }
    };
    return (
        <>

          <Container fluid className="loginContainer">
            <div style={{ fontFamily: 'Monument Extended, sans-serif', textTransform: 'uppercase', fontSize: '1.4rem', letterSpacing: '.1rem' }}>
              <h1 className="mt-4">Login</h1>
            </div>
            <form onSubmit={handleLogin}>
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
              <button type="submit" className="btn btn-primary" id="loginBtn">
                Login
              </button>
              <div className="signupAction m-3">
                <Link to="/registration"> Don't have an account? <strong className="text-violet-700">Click here to sign up!</strong></Link>
              </div>
            </form>
          </Container>

        </>
      );
    };
    
    export default LoginForm;