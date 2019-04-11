import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import FilterPosts from "../../components/FilterPosts/FilterPosts";
import PostsFeed from "../../components/PostsFeed/PostsFeed";
import DashNav from "../../components/DashNav/DashNav";
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
        <DashNav />
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
