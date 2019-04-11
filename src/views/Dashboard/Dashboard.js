import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import FilterPosts from "../../components/FilterPosts/FilterPosts";
import PostsFeed from "../../components/PostsFeed/PostsFeed";
import { fetchPosts } from "../../actions/posts";
import { fetchUser } from "../../actions/users";
import "./Dashboard.css";

export class Dashboard extends React.Component {
  componentDidMount() {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      return <Redirect to="/login" />;
    }
    if (jwt) {
      this.props.dispatch(fetchUser());
      this.props.dispatch(fetchPosts());
    }
  }

  render() {
    return (
      <div className="dashboard">
        <section className="dashboard-navigation">
          <div className="active tab">
            <Link to="/dashboard">Opportunities</Link>
          </div>
          <div className="tab">
            <Link to="/profile">Profile</Link>
          </div>
        </section>
        <FilterPosts />
        <PostsFeed />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  users: state.users
});

export default connect(mapStateToProps)(Dashboard);
