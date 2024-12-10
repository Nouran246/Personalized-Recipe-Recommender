import React, { Component } from 'react';
import { validateSignUp } from "../../utils/validateSignUp"; 
import "./SignIn_SignUp.css";
export default class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    errors: {}
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateSignUp(this.state);
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
    } else {
      console.log('Form submitted successfully', this.state);
      // Perform further actions like sending data to the server
    }
  };

  render() {
    const { firstName, lastName, email, password, errors } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            placeholder="First name"
            value={firstName}
            onChange={this.handleChange}
          />
          {errors.firstName && (
            <p className="text-danger">{errors.firstName}</p>
          )}
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            placeholder="Last name"
            value={lastName}
            onChange={this.handleChange}
          />
          {errors.lastName && (
            <p className="text-danger">{errors.lastName}</p>
          )}
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={this.handleChange}
          />
          {errors.email && <p className="text-danger">{errors.email}</p>}
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={this.handleChange}
          />
          {errors.password && (
            <p className="text-danger">{errors.password}</p>
          )}
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    );
  }
}
