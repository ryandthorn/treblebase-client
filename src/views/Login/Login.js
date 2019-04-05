import React from "react";
import { connect } from "react-redux";
import { userLogin } from "../../actions";
import "./Login.css";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null
    };
  }

  updateEmail(val) {
    this.setState({
      email: val
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
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter email address"
              required
              onChange={e => this.updateEmail(e.target.value)}
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
  email: state.email,
  password: state.password
});

export default connect(mapStateToProps)(Login);
