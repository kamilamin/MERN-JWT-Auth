import React, { Component } from "react";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors: {}
  };

  handleSubmit = ev => {
    ev.preventDefault();
    const { name, email, password, confirmPassword } = this.state;
    console.log(name, email, password, confirmPassword);
  };
  render() {
    return (
      <div className="container" style={{ marginTop: "50px", width: "700px" }}>
        <h2>Registration</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="name"
              value={this.state.name}
              className="form-control"
              name="name"
              onChange={ev => {
                this.setState({ name: ev.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={this.state.email}
              className="form-control"
              name="email"
              onChange={ev => {
                this.setState({
                  email: ev.target.value
                });
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={this.state.name}
              className="form-control"
              name="password"
              onChange={ev => {
                this.setState({
                  password: ev.target.value
                });
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              value={this.state.confirmPassword}
              className="form-control"
              name="Confirm Password"
              onChange={ev => {
                this.setState({
                  confirmPassword: ev.target.value
                });
              }}
            />
          </div>
          <div class="form-group">
            <button type="submit" className="btn btn-primary">
              Register User
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
