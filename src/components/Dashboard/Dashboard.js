import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import FilterPosts from "../FilterPosts/FilterPosts";
import PostsFeed from "../PostsFeed/PostsFeed";
import { fetchPosts } from "../../actions/posts";
import { fetchUser } from "../../actions/users";

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
