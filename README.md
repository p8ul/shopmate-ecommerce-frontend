[![Coverage Status](https://coveralls.io/repos/github/p8ul/shopmate-ecommerce-frontend/badge.svg?branch=develop&cacheBuster=1)](https://coveralls.io/github/p8ul/shopmate-ecommerce-frontend?branch=develop&cacheBuster=1)
[![Build Status](https://travis-ci.org/p8ul/shopmate-ecommerce-frontend.svg?branch=develop&cacheBuster=1)](https://travis-ci.org/p8ul/shopmate-ecommerce-frontend)
[![Heroku](https://heroku-badge.herokuapp.com/?app=shopmate&style=flat)](https://shopmate.herokuapp.com/)

🔥Turing shopmate ecommerce frontend code.
## Deployment link
[Check it out](https://shopmate.herokuapp.com/)
## Root Endpoint
[Backend API](http://backendapi.turing.com/docs)

## Screenshot
![Screenshot](/screenshots/screenshot2.gif?raw=true "Screenshot")

![Screenshot](/screenshots/mobile.gif?raw=true "Screenshot")

![Screenshot](/screenshots/screenshot.gif?raw=true "Screenshot")
## Feature requirements
- [x] Users can view all items when entering the website
- [x] Items are displayed properly based on the selected department and category
- [x] Users can search items through search box
- [x] Support paging if we have too many items
- [x] Users can see item details by selecting a specific item
- [x] Users can add items to their shopping carts
- [x] Users can register/login using website custom forms, or social login libraries
- [x] Users can update personal profiles with shipping addresses and other info
- [x] Users can checkout with 3rd party payment gateways: Paypal, Stripe…

## Tech Stack

Here's a curated list of packages that you should be at least familiar with before starting your awesome project. However, the best way to see a complete list of the dependencies is to check `package.json`.

### Core

- [x] [React](https://facebook.github.io/react/)
- [x] [React Router](https://github.com/ReactTraining/react-router)
- [x] [Redux](http://redux.js.org/)
- [x] [Redux-saga](https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html)
- [x] [Sass](https://sass-lang.com/)
- [ ] [React semantic ui](https://react.semantic-ui.com) (optional)

### Unit Testing

- [x] [Jest](http://facebook.github.io/jest/)
- [X] [Enzyme](http://airbnb.io/enzyme/)

### Linting

- [X] [ESLint](http://eslint.org/)

### Folder Structure

```
src
└─├─ __tests_
  ├─ components
  ├─ containers
  ├─ constants
  ├─ assets // images & styles
  ├─ redux // houses actions, reducers & sagas
  ├─ routes
  ├─ utils
```
#### [CSS architecture](https://sass-guidelin.es/#architecture)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

