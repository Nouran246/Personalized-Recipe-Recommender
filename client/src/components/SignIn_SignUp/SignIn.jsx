import React, { Component } from 'react';
import { validateLogin } from '../../utils/validateSignIn';
import "./SignIn_SignUp.css";
import Button from "../button/Button";
import Input from '../Input/Input';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    rememberMe: false,
    errors: {},
  };

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateLogin(this.state);
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
    } else {
      console.log('Form submitted successfully', this.state);
      // Perform further actions like sending data to the server
    }
  };

  render() {
    const { email, password, rememberMe, errors } = this.state;

    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={this.handleSubmit} className="auth-form-container">
            <h3>Welcome Back!</h3>
            
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
                placeholder="Enter your password"
                error={errors.password}
                required
              />
            </div>

            <div className="remember-me-container">
              <input
                type="checkbox"
                name="rememberMe"
                id="customCheck1"
                checked={rememberMe}
                onChange={this.handleChange}
              />
              <label htmlFor="customCheck1">
                Remember me
              </label>
            </div>

            <div className="auth-actions">
              <Button
                type="submit"
                variant="primary"
                fullWidth
              >
                Sign In
              </Button>
            </div>
            
            <div className="auth-links">
              <p className="forgot-password">
                Don't have an Account? <a href="/sign-up">Sign up</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
