import React from "react";
import { userLogin } from "../../actions/users";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./index.css";

export class Demo extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(
      userLogin({ email: "demo@user.com", password: "demouser" })
    );
  }
  render() {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <form className="form__demo" onSubmit={e => this.handleSubmit(e)}>
        <legend>Demo</legend>
        <input type="submit" value="Try it out!" />
      </form>
    );
  }
}

export default connect()(Demo);
