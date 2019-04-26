import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { userLogout } from "../../actions/users";
import "./Dropdown.css";

export class Dropdown extends React.Component {
  handleLogout() {
    localStorage.clear();
    this.props.dispatch(userLogout());
    return <Redirect to="/" />;
  }
  render() {
    return (
      <nav role="navigation" className="dropdown" id="dropdown">
        <Link to="/" onClick={this.handleLogout}>
          Log out
        </Link>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(Dropdown);
