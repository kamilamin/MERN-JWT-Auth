import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div>
          <Link class="navbar-brand" to="/">
            React Redux Node Auth
          </Link>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/register">
                Sign Up
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/login">
                Sign In
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
