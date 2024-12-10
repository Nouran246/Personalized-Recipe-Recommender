import React, { Component } from 'react';
import { validateLogin } from '../../utils/validateSignIn';
import "./SignIn_SignUp.css";
import Button from "../button/Button";

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
          <form onSubmit={this.handleSubmit}>
            <h3>Sign In</h3>
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
                value={email} // This ensures the `email` variable is used
                onChange={this.handleChange}
              />
              {errors.email && <p className="text-danger">{errors.email}</p>} {/* `errors` used */}
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter password"
                value={password} // This ensures the `password` variable is used
                onChange={this.handleChange}
              />
              {errors.password && <p className="text-danger">{errors.password}</p>} {/* `errors` used */}
            </div>
            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  name="rememberMe"
                  className="custom-control-input"
                  id="customCheck1"
                  checked={rememberMe} // This ensures `rememberMe` is used
                  onChange={this.handleChange}
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>
            <div className="d-grid">
              <Button
                type="submit"
                variant="primary"
                fullWidth
              >
                Sign In
              </Button>
            </div>
            <p className="forgot-password text-right">
              Don't have an Account? <a href="/sign-up">Sign up</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
