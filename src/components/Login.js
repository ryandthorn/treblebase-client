import React from 'react';

export default function Login() {
  return (
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
  );
};