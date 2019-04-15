import React from "react";
import { filterPostsRegion } from "../../actions/posts";
import { connect } from "react-redux";

export class SelectRegion extends React.Component {
  handleChange(e) {
    this.props.dispatch(filterPostsRegion(e.target.value));
  }
  render() {
    let region;
    if (!this.props.users.user) {
      region = "";
    } else {
      region = this.props.users.user.region;
    }
    const regions = [
      "Pacific",
      "New York City",
      "New England",
      "Upper Midwest",
      "Midwest",
      "Plains",
      "Southeast",
      "South",
      "Southwest",
      "Mountain"
    ];
    const regionCodes = [
      "pa",
      "ny",
      "ne",
      "um",
      "mw",
      "pl",
      "se",
      "s",
      "sw",
      "mt"
    ];
    const regionOptions = regionCodes.map((region, i) => {
      return (
        <option value={region} key={i}>
          {regions[i]}
        </option>
      );
    });
    return (
      <select
        id="region"
        name="region"
        onChange={e => this.handleChange(e)}
        defaultValue={region}
      >
        <option value="">All / Select a region</option>
        {regionOptions}
      </select>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  posts: state.posts
});

export default connect(mapStateToProps)(SelectRegion);
