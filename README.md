# 21 MERN: Google Books Search Project

## Summary 

The purpose of the assignment was to create a workout tracker using a Mongo database with a Mongoose schema and handle routes with Express.

```
User Story

As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

Acceptance Criteria

When the user loads the page, they should be given the option to create a new workout, or continue with their last workout.

The user should be able to:

- Add exercises to a previous workout plan
- Add new exercises to a new workout plan
- View multiple the combined weight of multiple exercises on the `stats` page
```

## Application Site

![Site](images/workout.png)

![Site](images/exercise.png)

![Site](images/stats.png)

## Technologies Used

- HTML - used to create elements on the DOM
- CSS - styles HTML elements on page
- Bootstrap - CSS development framework that helps create beautiful, responsive layouts using human-friendly HTML
- JavaScript - provides dynamic interactivity on HTML documents
- jQuery - easy to use API library simplifying Javascript actions
- Node.js - asynchronous event-driven JavaScript runtime
- Express - Node.js web application server framework, designed for building web applications
- MongoDB - document-based, NoSQL database built for modern application developers and the cloud era
- Mongoose - an Object Data Modeling (ODM) library for MongoDB and Node.js
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages
- Heroku - cloud platform that lets developers build, deliver, monitor and deploy apps rapidly

## Installation & Use

To use the application simply use the deloyed site link below and add a new workout, continue an existing workout, or view fitness stats in the dashboard:

 https://fitness-tracker-wtg.herokuapp.com/

## Code Snippet

Below is the Mongoose schema for the Exercise model.

```js
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    duration: Number,
    distance: Number
});

const Exercise = mongoose.model("Exercise", ExerciseSchema)

module.exports = Exercise;
```
<!-- [Deployed Site](https://fitness-tracker-wtg.herokuapp.com/) -->

[GitHub Project Repo](https://github.com/wtgibson/17-fitness-tracker)

## Author Links

![Site](images/william-gibson-jr-photo.jpg)

Will Gibson

[LinkedIn](https://www.linkedin.com/in/wtgibson/)

[GitHub](https://github.com/wtgibson)