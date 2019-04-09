import React from "react";
import { connect } from "react-redux";

export class SelectRegion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ region: e.target.value });
  }
  render() {
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
        value={this.state.value}
        onChange={this.handleChange}
        defaultValue={this.props.userRegion}
      >
        <option value="">Set your region</option>
        {regionOptions}
      </select>
    );
  }
}

const mapStateToProps = state => ({
  userRegion: state.users.user.region || ""
});

export default connect(mapStateToProps)(SelectRegion);
