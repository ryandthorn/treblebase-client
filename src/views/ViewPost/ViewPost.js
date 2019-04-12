import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

export class ViewPost extends React.Component {
  render() {
    if (this.props.posts.storage.length === 0) {
      return <Redirect to="/login" />;
    }
    const _post = this.props.posts.storage.filter(
      post => post.id === this.props.match.params.postID
    );
    const post = _post[0];
    return (
      <section className="viewPost">
        <Link to="/dashboard">Return to Dashboard</Link>
        <p className="post__datePosted">{post.datePosted}</p>
        <h2 className="post__title">{post.title}</h2>
        <h3 className="post__company">{post.company}</h3>
        <h3 className="post__location">{post.location}</h3>
        <p className="post__content">{post.content}</p>
        <h3 className="post__open">
          {post.status === "open"
            ? "Open - accepting applications"
            : "Closed - no longer accepting applications"}
        </h3>
        <h3 className="post__fee">Offer: {post.fee}</h3>
        <button type="button" className="btn__apply">
          Apply
        </button>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(mapStateToProps)(ViewPost);
