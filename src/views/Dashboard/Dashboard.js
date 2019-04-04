import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import FilterPosts from "../../components/FilterPosts/FilterPosts";
import { fetchPosts } from "../../actions";
import "./Dashboard.css";

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts);
  }

  render() {
    const posts = this.props.posts.map((post, i) => (
      <div className="card-wrapper" key={i}>
        <h2 className="post__title">{post.title}</h2>
        <h3 className="post__company">{post.company}</h3>
        <h3 className="post__location">{post.location}</h3>
        <p className="post__content">{post.content}</p>
        <button className="btn__details">View details</button>
      </div>
    ));
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

Dashboard.defaultProps = {
  posts: []
};

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(mapStateToProps)(Dashboard);
