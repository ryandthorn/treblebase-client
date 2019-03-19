import React from "react";
import "./Registration.css";

export default class Registration extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/dashboard`);
  }

  render() {
    return (
      <section className="wrap__registration-form block-center">
        <form
          onSubmit={e => this.handleSubmit(e)}
          className="form__registration block-center"
        >
          <h1 className="inline-center">Register for TrebleBase</h1>
          <fieldset>
            <legend className="hidden">
              Please enter your information below
            </legend>
            <div className="wrap__field">
              <label htmlFor="firstname">First name</label>
              <input type="text" name="firstname" />
            </div>
            <div className="wrap__field">
              <label>Last name</label>
              <input type="text" name="lastname" />
            </div>
            <div className="wrap__field">
              <label>Email address</label>
              <input type="email" name="email" />
            </div>
            <div className="wrap__field">
              <label>New password</label>
              <input
                type="password"
                name="password"
                placeholder="Minimum 8 characters"
                minLength="8"
              />
            </div>
            <div className="wrap__field">
              <label>Confirm password</label>
              <input type="password" name="password" minLength="8" />
            </div>
            <div className="wrap__button">
              <button type="submit">Submit</button>
            </div>
          </fieldset>
        </form>
      </section>
    );
  }
}
