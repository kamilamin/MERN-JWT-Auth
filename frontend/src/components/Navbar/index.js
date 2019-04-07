import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
        <Router>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div>
          <Link class="navbar-brand" href="#">
            Redux Auth
          </Link>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link class="nav-link" href="#">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="#">
                Register
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="#">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      </Router>
    );
  }
}
export default Navbar;
