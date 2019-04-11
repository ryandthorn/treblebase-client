import React from "react";
import { connect } from "react-redux";

export class PostsFeed extends React.Component {
  render() {
    let posts;
    if (this.props.posts) {
      const storage = [...this.props.posts.storage];
      if (this.props.posts.region || this.props.posts.query) {
        const region = this.props.posts.region;
        const query = this.props.posts.query || "";
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
        const filtered = filterRegion.filter(rPost =>
          filterSearch.some(sPost => rPost.id === sPost.id)
        );
        posts = filtered.map((post, i) => (
          <div className="card-wrapper" key={i}>
            <h2 className="post__title">{post.title}</h2>
            <h3 className="post__company">{post.company}</h3>
            <h3 className="post__location">{post.location}</h3>
            <p className="post__content">{post.content}</p>
            <button className="btn__details">View details</button>
          </div>
        ));
      } else {
        posts = storage.map((post, i) => (
          <div className="card-wrapper" key={i}>
            <h2 className="post__title">{post.title}</h2>
            <h3 className="post__company">{post.company}</h3>
            <h3 className="post__location">{post.location}</h3>
            <p className="post__content">{post.content}</p>
            <button className="btn__details">View details</button>
          </div>
        ));
      }
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