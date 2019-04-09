import React from "react";
import { connect } from "react-redux";

export class Photos extends React.Component {
  render() {
    return (
      <fieldset className="photos" id="photos">
        <legend>Photos</legend>
        <div>
          <label htmlFor="photo-title-0">Photo 1 Title</label>
          <input type="text" id="photo-title-0" name="photo-title-0" />
          <label htmlFor="photo-url-0">Photo 1 URL</label>
          <input type="url" id="photo-url-0" name="photo-url-0" />
        </div>
        <div>
          <label htmlFor="photo-title-1">Photo 2 Title</label>
          <input type="text" id="photo-title-1" name="photo-title-1" />
          <label htmlFor="photo-url-1">Photo 2 URL</label>
          <input type="url" id="photo-url-1" name="photo-url-1" />
        </div>
        <div>
          <label htmlFor="photo-title-2">Photo 3 Title</label>
          <input type="text" id="photo-title-2" name="photo-title-2" />
          <label htmlFor="photo-url-2">Photo 3 URL</label>
          <input type="url" id="photo-url-2" name="photo-url-2" />
        </div>
      </fieldset>
    );
  }
}

const mapStateToProps = state => ({
  user: state.users.user
});

export default connect(mapStateToProps)(Photos);
