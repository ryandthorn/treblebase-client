import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <section className="wrap__Landing">
        <section className="hero inline-center">
          <h1>TrebleBase</h1>
          <h2>Connecting classical musicians to performance opportunities</h2>
        </section>

        <section className="about inline-center">
          <h2>Who we are</h2>
          <h3>What we do</h3>
        </section>

        <section className="register inline-center">
          <h2>Become a part of our community today!</h2>
          <button className="button--large">Sign up for TrebleBase</button>
        </section>

        <section className="login inline-center">
          <h3>Already a member?</h3>
          <form className="form__login block-center">
            <fieldset>
              <legend className="hidden">Log in</legend>
              <div className="wrap__field">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Username or email"
                  required
                />
              </div>
              <div className="wrap__field">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" required />
              </div>
              <button type="submit" className="button--small">
                Log in
              </button>
            </fieldset>
          </form>
        </section>
      </section>
    );
  }
}

export default Landing;
