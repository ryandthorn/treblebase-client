import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile">
      <section className="dashboard-navigation">
        <div className="tab">
          <Link to="/dashboard">Opportunities</Link>
        </div>
        <div className="active tab">
          <Link to="/profile">Profile</Link>
        </div>
      </section>

      <section className="profile__edit">
        <h1>Edit profile</h1>
        <form>
          <fieldset className="general-info">
            <legend>General information</legend>
            <p>
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                defaultValue="Ryan"
              />
            </p>
            <p>
              <label htmlFor="lastName">Last name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                defaultValue="Thorn"
              />
            </p>
            <p>
              <label htmlFor="region">Region</label>
              <select id="region">
                <option value="pa">Pacific</option>
                <option value="ny">New York City</option>
                <option value="ne">New England</option>
                <option value="um">Upper Midwest</option>
                <option value="mw">Midwest</option>
                <option value="pl">Plains</option>
                <option value="se">Southeast</option>
                <option value="s">South</option>
                <option value="sw">Southwest</option>
                <option value="mt">Mountain</option>
              </select>
            </p>
            <p>
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                defaultValue="Portland, OR"
              />
            </p>
            <p>
              <label htmlFor="age">Age</label>
              <input type="text" id="age" name="age" defaultValue="32" />
            </p>
          </fieldset>
          <fieldset className="press-kit">
            <legend>Press kit</legend>
            {/* recordings, photos */}
            <p>
              <label htmlFor="headshot">Headshot</label>
              <input
                type="url"
                id="headshot"
                name="headshot"
                defaultValue="https://www.imagehost.com/user/0/headshot.jpg"
              />
            </p>
            <p>
              <label htmlFor="resume">Resume</label>
              <input
                type="url"
                id="resume"
                name="resume"
                defaultValue="https://www.artistsite.com/resume.pdf"
              />
            </p>
            <p>
              <label htmlFor="bio">Bio</label>
              <input
                type="url"
                id="bio"
                name="bio"
                defaultValue="https://www.artistsite.com/bio.pdf"
              />
            </p>
            <p>
              <label htmlFor="website">Personal website</label>
              <input
                type="url"
                id="website"
                name="website"
                defaultValue="https://www.artistsite.com/"
              />
            </p>
          </fieldset>
          <fieldset className="recordings">
            <legend>Recordings</legend>
            <p>
              <label htmlFor="recording1">Recording 1</label>
              <input
                type="url"
                id="recording1"
                name="recording1"
                defaultValue="https://www.youtube.com/recording1"
              />
            </p>
            <p>
              <label htmlFor="recording2">Recording 2</label>
              <input
                type="url"
                id="recording2"
                name="recording2"
                defaultValue="https://www.youtube.com/recording2"
              />
            </p>
            <button type="button">Add another</button>
          </fieldset>
          <fieldset className="photos">
            <legend>Photos</legend>
            <p>
              <label htmlFor="photo1">Photo 1</label>
              <input
                type="url"
                id="photo1"
                name="photo1"
                defaultValue="https://www.artistsite.com/photo1.jpg"
              />
            </p>
            <p>
              <label htmlFor="photo2">Photo 2</label>
              <input
                type="url"
                id="photo2"
                name="photo2"
                defaultValue="https://www.artistsite.com/photo2.jpg"
              />
            </p>
            <button type="button">Add another</button>
          </fieldset>

          <input type="submit" value="Save changes" />
        </form>
      </section>
    </div>
  );
}
