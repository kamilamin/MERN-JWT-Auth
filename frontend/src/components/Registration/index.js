import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { registerUser } from "../../redux/actions/authentication";

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
    const user = {
      name,
      email,
      password,
      confirmPassword
    };
    this.props.registerUser(user, this.props.history);
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  render() {
    return (
      <div className="container" style={{ marginTop: "50px", width: "700px" }}>
        <h2 style={{ marginBottom: "40px" }}>Registration</h2>
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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
