import React from "react";
import { connect } from "react-redux";
import { userRegistration } from "../../actions/users";
import "./Registration.css";

export class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      confirmPassword: null
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .dispatch(userRegistration(this.state))
      .then(() => {
        this.props.history.push("/dashboard");
      })
      .catch(err => {
        console.error(err);
      });
  }

  updateField(target) {
    this.setState({
      [target.id]: target.value
    });
  }

  render() {
    return (
      <section className="wrap__registration-form">
        <form
          onSubmit={e => this.handleSubmit(e)}
          className="form__registration"
        >
          <h1>Register for TrebleBase</h1>
          <fieldset>
            <legend className="hidden">
              Please enter your information below
            </legend>
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={e => this.updateField(e.target)}
            />
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              onChange={e => this.updateField(e.target)}
            />
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={e => this.updateField(e.target)}
            />
            <label htmlFor="password">New password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Minimum 8 characters"
              minLength="8"
              onChange={e => this.updateField(e.target)}
            />
            <label htmlFor="confirmPassword">Confirm password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              minLength="8"
              onChange={e => this.updateField(e.target)}
            />
            <input
              type="submit"
              class="input__submit"
              value="Submit registration"
            />
          </fieldset>
        </form>
      </section>
    );
  }
}

export default connect()(Registration);
