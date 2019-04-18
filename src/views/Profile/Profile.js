import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import SelectRegion from "../../components/SelectRegion/SelectRegion";
import Recordings from "../../components/Recordings/Recordings";
import Photos from "../../components/Photos/Photos";
import { editProfile } from "../../actions/users";
import "./Profile.css";

export class Profile extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.dispatch(editProfile(formData));
  }
  render() {
    const user = this.props.user;
    if (!user) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="profile">
        <section className="wrap__edit-profile">
          <h1>Edit profile</h1>
          <form
            className="form__edit-profile"
            onSubmit={e => this.handleSubmit(e)}
          >
            <fieldset className="general-info">
              <legend>General information</legend>
              <p>
                <label htmlFor="firstName">First name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  defaultValue={user.firstName}
                />
              </p>
              <p>
                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  defaultValue={user.lastName}
                />
              </p>
              <p>
                <label htmlFor="instrument">Instrument</label>
                <input
                  type="text"
                  id="instrument"
                  name="instrument"
                  defaultValue={user.instrument}
                />
              </p>
              <p>
                <label htmlFor="region">Region</label>
                <SelectRegion region={user.region} />
              </p>
              <p>
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  defaultValue={user.location || ""}
                />
              </p>
              <p>
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  defaultValue={user.age || null}
                />
              </p>
            </fieldset>
            <input type="submit" className="btn__submit" value="Save changes" />
            <fieldset className="press-kit">
              <legend>Press kit</legend>
              <p>
                <label htmlFor="headshot">Headshot</label>
                <input
                  type="url"
                  id="headshot"
                  name="headshot"
                  defaultValue={user.headshot || ""}
                />
              </p>
              <p>
                <label htmlFor="resume">Resume</label>
                <input
                  type="url"
                  id="resume"
                  name="resume"
                  defaultValue={user.resume || ""}
                />
              </p>
              <p>
                <label htmlFor="bio">Bio</label>
                <input
                  type="url"
                  id="bio"
                  name="bio"
                  defaultValue={user.bio || ""}
                />
              </p>
              <p>
                <label htmlFor="website">Personal website</label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  defaultValue={user.website || ""}
                />
              </p>
            </fieldset>
            <input type="submit" className="btn__submit" value="Save changes" />
            <Recordings />
            <input type="submit" className="btn__submit" value="Save changes" />
            <Photos />
            <input type="submit" className="btn__submit" value="Save changes" />
          </form>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.users.user
});

export default connect(mapStateToProps)(Profile);
