import React from "react";
import { connect } from "react-redux";
import SelectRegion from "../SelectRegion/SelectRegion";
import { filterPostsSearch, filterPostsStatus } from "../../actions/posts";
import "./FilterPosts.css";
import logo from "../../views/Landing/logo.jpg";

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
            <legend>Search TrebleBase</legend>
            <div className="wrap__search">
              <label htmlFor="search" id="searchLabel" aria-label="Search">
                <img src={logo} alt="" />
              </label>
              <input
                type="search"
                id="search"
                placeholder="Search..."
                autoFocus
              />
              <input type="submit" value="Go" />
            </div>
          </fieldset>
        </form>
        <form>
          <fieldset>
            <legend>Filter Posts</legend>
            <div className="filter-field">
              <label htmlFor="region">Region</label>
              <SelectRegion />
            </div>
            <div className="filter-field">
              <label htmlFor="openStatus">Accepting applications</label>
              <select
                id="openStatus"
                name="openStatus"
                onChange={e => this.handleOpenStatus(e)}
              >
                <option value="open">Open</option>
                <option value="closed">Closed</option>
              </select>
            </div>
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
