import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./PostsFeed.css";
import displayRegion from "../../displayRegion";

export class PostsFeed extends React.Component {
  render() {
    let posts;
    if (this.props.posts) {
      const storage = [...this.props.posts.storage];
      const region = this.props.posts.region;
      const query = this.props.posts.query || "";
      const status = this.props.posts.status;
      const filterRegion = storage.filter(post =>
        !region ? true : region === post.region
      );
      const filterSearch = storage.filter(post => {
        const regex = new RegExp(query, "i");
        return !query
          ? true
          : Object.values(post).reduce((acc, cur) => {
              if (acc === true) {
                return acc;
              }
              return regex.test(cur);
            }, false);
      });
      const regionSearch = filterRegion.filter(rPost =>
        filterSearch.some(sPost => rPost.id === sPost.id)
      );
      const filtered = regionSearch.filter(post => post.status === status);
      posts = filtered.map((post, i) => (
        <div className="wrap__post" key={i}>
          <h2 className="post__title">{post.title}</h2>
          <h3 className="post__company">Company: {post.company}</h3>
          <h3 className="post__region">Region: {displayRegion(post.region)}</h3>
          <h3 className="post__location">Location: {post.location}</h3>
          <p className="post__status">
            {post.status === "open"
              ? "Open - accepting applications"
              : "Closed - no longer accepting applications"}
          </p>
          <p className="wrap__details">
            <Link to={`/post/${post.id}`} className="Link__details">
              View details
            </Link>
          </p>
        </div>
      ));
    } else {
      posts = "No posts found";
    }
    return <section className="feed">{posts}</section>;
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(mapStateToProps)(PostsFeed);
