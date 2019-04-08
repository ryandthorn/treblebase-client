import React from "react";
import { connect } from "react-redux";

export class Recordings extends React.Component {
  handleClick(e) {
    e.preventDefault();
  }
  render() {
    const items = this.props.user.recordings.map((recording, i) => (
      <div className="recording" key={i}>
        <label htmlFor={`recording-title-${i}`}>Recording {i + 1} title</label>
        <input
          type="text"
          id={`recording-title-${i}`}
          name={`recording-title-${i}`}
          defaultValue={recording.title || ""}
        />
        <label htmlFor={`recording-url-${i}`}>Recording {i + 1} URL</label>
        <input
          type="url"
          id={`recording-url-${i}`}
          name={`recording-url-${i}`}
          defaultValue={recording.url || ""}
        />
      </div>
    ));
    if (items) {
      return (
        <fieldset className="recordings">
          <legend>Recordings</legend>
          {items}
          <button type="button" onClick={e => this.handleClick(e)}>
            Add recording
          </button>
        </fieldset>
      );
    } else {
      return (
        <fieldset className="recordings">
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
          <button type="button" onClick={e => this.handleClick(e)}>
            Add recording
          </button>
        </fieldset>
      );
    }
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Recordings);
