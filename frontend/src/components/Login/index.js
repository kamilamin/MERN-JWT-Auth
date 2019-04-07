import React, { Component } from "react";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };
  handleSubmit = ev => {
    ev.preventDefault();
    const { email, password } = this.state;
    console.log("Email", email);
    console.log("Password", password);
  };
  render() {
    return (
      <div className="container" style={{ marginTop: "50px", width: "700px" }}>
        <h2>Hello from Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              value={this.state.email}
              name="email"
              onChange={ev => {
                this.setState({
                  email: ev.target.value
                });
              }}
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              value={this.state.password}
              name="password"
              onChange={ev => {
                this.setState({
                  password: ev.target.value
                });
              }}
            />
          </div>
          <div class="form-group">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
