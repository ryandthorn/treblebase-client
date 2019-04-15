import React from "react";
import { connect } from "react-redux";
import SelectRegion from "../SelectRegion/SelectRegion";
import { filterPostsSearch, filterPostsStatus } from "../../actions/posts";
import "./FilterPosts.css";

export class FilterPosts extends React.Component {
  handleSearchSubmit(e) {
    e.preventDefault();
    const value = document.getElementById("search").value.trim();
    this.props.dispatch(filterPostsSearch(value));
  }
  handleOpenStatus(e) {
    this.props.dispatch(filterPostsStatus(e.target.value));
  }

  render() {
    return (
      <section className="filter-posts">
        <form onSubmit={e => this.handleSearchSubmit(e)}>
          <fieldset>
            <legend>Search Posts</legend>
            <input
              type="search"
              id="search"
              placeholder="Search TrebleBase..."
            />
            <input type="submit" value="Go" />
          </fieldset>
        </form>
        <form>
          <fieldset>
            <legend>Filter Posts</legend>
            <label htmlFor="region">Region</label>
            <SelectRegion />
            <label htmlFor="open">Accepting applications</label>
            <select
              id="openStatus"
              name="openStatus"
              onChange={e => this.handleOpenStatus(e)}
            >
              <option value="open">Open</option>
              <option value="closed">Closed</option>
            </select>
          </fieldset>
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(mapStateToProps)(FilterPosts);
