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
    serverMessage: '', // For success or error messages
  };

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateLogin(this.state);
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
    } else {
      this.setState({ serverMessage: '', errors: {} });

      try {
        const response = await fetch('http://localhost:5000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: this.state.email,
            password: this.state.password,
          }),
        });

        const result = await response.json();
        if (response.ok) {
          this.setState({
            serverMessage: 'Login successful!',
            // Redirect or update the UI accordingly
          });
        } else {
          this.setState({
            serverMessage: result.error || 'Failed to log in.',
          });
        }
      } catch (error) {
        console.error('Error:', error);
        this.setState({
          serverMessage: 'An unexpected error occurred. Please try again later.',
        });
      }
    }
  };

  render() {
    const { email, password, rememberMe, errors, serverMessage } = this.state;

    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={this.handleSubmit} className="auth-form-container">
            <h3>Welcome Back!</h3>

            {serverMessage && (
              <p className={`server-message ${serverMessage.includes('success') ? 'success' : 'error'}`}>
                {serverMessage}
              </p>
            )}

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
              <label htmlFor="customCheck1">Remember me</label>
            </div>

            <div className="auth-actions">
              <Button type="submit" variant="primary" fullWidth>
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
