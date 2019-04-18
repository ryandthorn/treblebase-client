import React from "react";
import { connect } from "react-redux";
import { userLogin } from "../../actions/users";
import { Redirect } from "react-router-dom";
import "./Login.css";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null
    };
  }

  updateField(target) {
    const key = target.id;
    this.setState({
      [key]: target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(
      userLogin({ email: this.state.email, password: this.state.password })
    );
  }

  render() {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <form className="form__login" onSubmit={e => this.handleSubmit(e)}>
        <fieldset>
          <legend className="hidden">Log in</legend>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter email address"
            required
            onChange={e => this.updateField(e.target)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            onChange={e => this.updateField(e.target)}
          />
          <input type="submit" className="input__login" value="Submit" />
        </fieldset>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.users.loggedIn
});

export default connect(mapStateToProps)(Login);
