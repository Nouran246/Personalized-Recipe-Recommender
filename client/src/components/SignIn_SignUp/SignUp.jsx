import React, { Component } from 'react';
import { validateSignUp } from "../../utils/validateSignUp";
import "./SignIn_SignUp.css";
import Button from "../button/Button";
import Input from '../Input/Input';

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
      <main className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={this.handleSubmit} className="auth-form-container">
            <h3>Create Account</h3>
            
            <div className="auth-form-group">
              <Input
                label="First Name"
                name="firstName"
                value={firstName}
                onChange={this.handleChange}
                placeholder="Enter your first name"
                error={errors.firstName}
                required
              />
            </div>

            <div className="auth-form-group">
              <Input
                label="Last Name"
                name="lastName"
                value={lastName}
                onChange={this.handleChange}
                placeholder="Enter your last name"
                error={errors.lastName}
                required
              />
            </div>

            <div className="auth-form-group">
              <Input
                label="Email Address"
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                placeholder="Enter your email"
                error={errors.email}
                required
              />
            </div>

            <div className="auth-form-group">
              <Input
                label="Password"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                placeholder="Create a password"
                error={errors.password}
                required
              />
            </div>

            <div className="auth-actions">
              <Button
                type="submit"
                variant="primary"
                fullWidth
              >
                Create Account
              </Button>
            </div>
            
            <div className="auth-links">
              <p className="forgot-password">
                Already registered? <a href="/sign-in">Sign in</a>
              </p>
            </div>
          </form>
        </div>
      </main>
    );
  }
}
