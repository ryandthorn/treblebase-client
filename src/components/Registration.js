import React from 'react';

export default function Registration() {
  return (
    <section className="wrap__registration-form block-center">
      <form className="form__registration block-center">
        <h1 className="inline-center">Register for TrebleBase</h1>
        <fieldset>
          <legend className="hidden">Please enter your information below</legend>
          <div className="wrap__field">
            <label htmlFor="firstname">First name</label>
            <input type="text" name="firstname" required />
          </div>
          <div className="wrap__field">
            <label>Last name</label>
            <input type="text" name="lastname" required />
          </div>
          <div className="wrap__field">
            <label>Email address</label>
            <input type="email" name="email" required />
          </div>
          <div className="wrap__field">
            <label>New password</label>
            <input type="password" name="password" placeholder="Minimum 8 characters" minLength="8" required />
          </div>
          <div className="wrap__field">
            <label>Confirm password</label>
            <input type="password" name="password" minLength="8" required />
          </div>
          <div className="wrap__button">
            <button type="submit">Submit</button>
          </div>
        </fieldset>
      </form>

    </section>
  )
};