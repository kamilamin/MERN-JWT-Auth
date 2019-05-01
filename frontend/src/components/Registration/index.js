import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { registerUser } from "../../redux/actions/authentication";
import classnames from "classnames";

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
    const { errors } = this.state;
    return (
      <div className="container" style={{ marginTop: "50px", width: "700px" }}>
        <h2 style={{ marginBottom: "40px" }}>Registration</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="name"
              value={this.state.name}
              className={classnames("form-control form-control-lg", {
                "is-invalid": errors.name
              })}
              name="name"
              onChange={ev => {
                this.setState({ name: ev.target.value });
              }}
            />
            {errors.name && (<div className="invalid-feedback">{errors.name}</div>) }
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={this.state.email}
              className={classnames("form-control form-control-lg", {
                "is-invalid": errors.email
              })}
              name="email"
              onChange={ev => {
                this.setState({
                  email: ev.target.value
                });
              }}
            />
            {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={this.state.name}
              className={classnames("form-control form-control-lg", {
                "is-invalid": errors.password
              })}
              name="password"
              onChange={ev => {
                this.setState({
                  password: ev.target.value
                });
              }}
            />
            {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              value={this.state.confirmPassword}
              className={classnames("form-control form-control-lg", {
                "is-invalid": errors.confirmPassword
              })}
              name="Confirm Password"
              onChange={ev => {
                this.setState({
                  confirmPassword: ev.target.value
                });
              }}
            />
            {errors.confirmPassword && (<div className="invalid-feedback">{errors.confirmPassword}</div>)}
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
