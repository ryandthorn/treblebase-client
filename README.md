# TrebleBase

Check it out: https://treblebase-client.herokuapp.com/

## Screenshots

## API

### Routes
/api/auth
/api/posts  
/api/users

#### /auth
- POST /login - takes valid email & password and returns a JWT
- POST /refresh - refreshes a valid JWT

#### /posts
- GET / - returns an array of serialized post objects: {posts: []}
- PUT /apply/:postID - pushes applicant information to an array "applicants" on post object

#### /users
- GET / - returns a serialized user object based on req.user (from JWT)
- POST / - registers a new user
- PUT / - updates a user
- DELETE / - deletes a user

## Objective

TrebleBase is a way for classical musicians to connect with performance organizations.

Many classical musicians rely on professional recommendations and word of mouth to consistently get reliable work, and many performing groups tend to hire people who they know. This can make it difficult for musicians who are new to an area to establish themselves in their city or region's musical community.

Treblebase aims to provide a means to bridge that gap by making it easy to find relevant and interesting work. Users sign up for an artist account (or an organization account - yet to be implemented). They can filter and search for posts and quickly and easily apply to them using their uploaded materials. 

## Tech Used

TrebleBase was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

React, React Redux, Redux Thunk, React Router, MongoDB, Express, Passport, bcryptjs, Enzyme, Jest, Heroku, Travis CI
