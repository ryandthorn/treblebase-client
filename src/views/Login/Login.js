import React from "react";
import { connect } from "react-redux";
import { userLogin } from "../../actions";
import "./Login.css";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null
    };
  }

  updateUsername(val) {
    this.setState({
      username: val
    });
  }

  updatePassword(val) {
    this.setState({
      password: val
    });
  }

  submitLogin(e) {
    e.preventDefault();
    this.props.dispatch(userLogin(this.state));
  }

  render() {
    return (
      <form
        className="form__login block-center"
        onSubmit={e => this.submitLogin(e)}
      >
        <fieldset>
          <legend className="hidden">Log in</legend>
          <div className="wrap__field">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username or email"
              required
              onChange={e => this.updateUsername(e.target.value)}
            />
          </div>
          <div className="wrap__field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              required
              onChange={e => this.updatePassword(e.target.value)}
            />
          </div>
          <button type="submit" className="button--small">
            Log in
          </button>
        </fieldset>
      </form>
    );
  }
}

Login.defaultProps = {
  username: "",
  password: ""
};

const mapStateToProps = state => ({
  username: state.username,
  password: state.password
});

export default connect(mapStateToProps)(Login);
