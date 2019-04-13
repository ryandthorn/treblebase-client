import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { applyToPost } from "../../actions/posts";
import SelectRegion from "../../components/SelectRegion/SelectRegion"

export class ViewPost extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.dispatch(applyToPost(formData, this.props.match.params.postID));
  }
  render() {
    const user = this.props.users.user;
    if (this.props.posts.storage.length === 0) {
      return <Redirect to="/login" />;
    }
    const _post = this.props.posts.storage.filter(
      post => post.id === this.props.match.params.postID
    );
    const post = _post[0];
    console.log(post)

    let successMessage = "";
    const alreadyApplied = post.applicants.filter(applicant => applicant.email === user.email);
    if (alreadyApplied) {
      successMessage = <h3>You've successfully applied to this post!</h3>
    }

    return (
      <section className="viewPost">
        {successMessage}
        <Link to="/dashboard">Return to Dashboard</Link>
        <p className="post__datePosted">{post.datePosted}</p>
        <h2 className="post__title">{post.title}</h2>
        <h3 className="post__company">{post.company}</h3>
        <h3 className="post__location">{post.location}</h3>
        <p className="post__content">{post.content}</p>
        <h3 className="post__open">
          {post.status === "open"
            ? "Open - accepting applications"
            : "Closed - no longer accepting applications"}
        </h3>
        <h3 className="post__fee">Offer: {post.fee}</h3>
        <form className="application" onSubmit={e => this.handleSubmit(e)}>
          <legend>Application</legend>
          <fieldset>
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
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" defaultValue={user.email} readOnly />
            </p>
            <p>
              <label htmlFor="instrument">Instrument</label>
              <input type="text" id="instrument" name="instrument" defaultValue={user.instrument} />
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
          <input type="submit" value="Submit Application" />
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  users: state.users
});

export default connect(mapStateToProps)(ViewPost);
