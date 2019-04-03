import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
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
        <div className="inline-center">
          <button className="btn__details">View details</button>
        </div>
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
        <h1 className="inline-center">Hello Ryan!</h1>
        <h2 className="block-center">
          Here are some recently-posted opportunities in your area:
        </h2>

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
