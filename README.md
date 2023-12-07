# ABC PUBLISHERS BOOKSTORE

# How to set up your working environment

## Project Overview

Welcome to ABC Publishers Bookstore, an e-commerce platform designed to provide a seamless experience for book enthusiasts. This project showcases the latest books, offers a user-friendly search functionality, and ensures optimal user engagement.

## Installation Instructions

To get started with ABC Publishers Bookstore, follow these steps:

### Prerequisites

- Node.js installed
- MongoDB installed and running
- Package manager (npm or yarn)

### Installation

1. Clone the repository:

  ```
   git clone https://github.com/sid-lee/abc-publishers-bookstore.git
  ```

2. Navigate to the project directory:
```bash
cd abc-publishers-bookstore
```

3. Install dependencies:

```
npm install
```

4. Set up the MongoDB database:
```
npm run data:import
```


# Usage Guide
## Running the Application
Start the backend server
```
npm run server
```

Start the frontend

```
npm run client
```

Visit http://localhost:3000 in your browser to explore the ABC Publishers Bookstore.

## API Endpoints
/api/books: Get all books
/api/books/:id: Get a specific book by ID

# Configuration
ABC Publishers Bookstore comes with customizable options:

Update configurations in .env for backend settings.
Adjust frontend settings in the respective configuration files.

## License
This project is licensed under the MIT License.


# Running both front and backend together
To start both, type in 
```
npm run dev
```

# Note on MongoDB Mongoose
- Excellent resource for Mongoose in JavaScript
[https://www.mongodb.com/developer/languages/javascript/getting-started-with-mongodb-and-mongoose/] 

From the top directory, install mongoose by running the following command,
```
npm i mongoose
```

# Information regarding bcrypt library used
- Start with wiki [https://en.wikipedia.org/wiki/Bcrypt]
- Open source [https://www.openwall.com/crypt/]
- A paper on the algorithm that explains the design decisions[https://static.usenix.org/events/usenix99/provos/provos_html/index.html]

# Generating or deleting test data on MongoDB 
To import data
```
npm run data:import
```

To delete data
```
npm run data:destroy
```

------

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



