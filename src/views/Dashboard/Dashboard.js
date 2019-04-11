import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import FilterPosts from "../../components/FilterPosts/FilterPosts";
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
    console.log({ dashprops: this.props });
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
          console.log({ objValues: Object.values(post) });
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
        console.log({
          region,
          query,
          filterRegion,
          filterSearch
        });
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
  posts: state.posts,
  users: state.users
});

export default connect(mapStateToProps)(Dashboard);
