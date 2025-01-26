import React, { Component } from 'react';
import { validateSignUp } from "../../utils/validateSignUp";
import "./SignIn_SignUp.css";
import Button from "../button/Button";
import Input from '../Input/Input';
import { Link } from 'react-router-dom';
export default class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    errors: {},
    isSubmitting: false,
    serverMessage: '', // For success or error messages
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateSignUp(this.state);
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
    } else {
      this.setState({ isSubmitting: true, serverMessage: '' });

      try {
        const response = await fetch('http://localhost:5000/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
          }),
        });

        const result = await response.json();
        if (response.ok) {
          this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            isSubmitting: false,
            serverMessage: 'Account created successfully!',
            errors: {},
          });
        } else {
          this.setState({
            isSubmitting: false,
            serverMessage: result.error || 'Failed to create account.',
          });
        }
      } catch (error) {
        console.error('Error:', error);
        this.setState({
          isSubmitting: false,
          serverMessage: 'An unexpected error occurred. Please try again later.',
        });
      }
    }
  };

  render() {
    const { firstName, lastName, email, password, errors, isSubmitting, serverMessage } = this.state;

    return (
      <main className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={this.handleSubmit} className="auth-form-container">
            <h3>Create Account</h3>

            {serverMessage && (
              <p className={`server-message ${serverMessage.includes('success') ? 'success' : 'error'}`}>
                {serverMessage}
              </p>
            )}

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
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Creating Account...' : 'Create Account'}
              </Button>
            </div>

            <div className="auth-links">
              <p className="forgot-password">
                Already registered? <Link to="/sign-in">Sign in</Link>
              </p>
            </div>
          </form>
        </div>
      </main>
    );
  }
}
