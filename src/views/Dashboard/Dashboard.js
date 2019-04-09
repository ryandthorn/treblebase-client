import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import FilterPosts from "../../components/FilterPosts/FilterPosts";
import { fetchPosts } from "../../actions";
import "./Dashboard.css";

export class Dashboard extends React.Component {
  componentDidMount() {
    if (this.props.loggedIn === true) {
      this.props.dispatch(fetchPosts());
    }
  }

  render() {
    if (this.props.loggedIn === false) {
      return <Redirect to="/login" />;
    }
    let posts;
    if (this.props.posts) {
      posts = this.props.posts.map((post, i) => (
        <div className="card-wrapper" key={i}>
          <h2 className="post__title">{post.title}</h2>
          <h3 className="post__company">{post.company}</h3>
          <h3 className="post__location">{post.location}</h3>
          <p className="post__content">{post.content}</p>
          <button className="btn__details">View details</button>
        </div>
      ));
    } else {
      posts = "No posts found";
    }
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
        <section className="feed">{posts}</section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.storage,
  user: state.users.user,
  loggedIn: state.users.loggedIn
});

export default connect(mapStateToProps)(Dashboard);
