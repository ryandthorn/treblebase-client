import React from "react";
import { connect } from "react-redux";

export class Recordings extends React.Component {
  render() {
    return (
      <fieldset className="recordings" id="recordings">
        <legend>Recordings</legend>
        <div className="recording">
          <label htmlFor={`recording-title-0`}>Recording 1 title</label>
          <input
            type="text"
            id={`recording-title-0`}
            name={`recording-title-0`}
          />
          <label htmlFor={`recording-url-0`}>Recording 1 URL</label>
          <input type="url" id={`recording-url-0`} name={`recording-url-0`} />
        </div>
        <div className="recording">
          <label htmlFor={`recording-title-1`}>Recording 2 title</label>
          <input
            type="text"
            id={`recording-title-1`}
            name={`recording-title-1`}
          />
          <label htmlFor={`recording-url-1`}>Recording 2 URL</label>
          <input type="url" id={`recording-url-1`} name={`recording-url-2`} />
        </div>
        <div className="recording">
          <label htmlFor={`recording-title-2`}>Recording 3 title</label>
          <input
            type="text"
            id={`recording-title-2`}
            name={`recording-title-2`}
          />
          <label htmlFor={`recording-url-2`}>Recording 3 URL</label>
          <input type="url" id={`recording-url-2`} name={`recording-url-2`} />
        </div>
      </fieldset>
    );
  }
}

const mapStateToProps = state => ({
  user: state.users.user
});

export default connect(mapStateToProps)(Recordings);
