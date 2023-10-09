# ABCPB

# How to set up your working environment

1. Create your project folder (e.g., ACBPublishersBookstore).
2. Move to the folder and type the command:

```bash
npx create-react-app frontend
```

3. Move to the 'frontend' folder. Copy the content of this repository and run:

```
npm start
```

# Setting up the 'backend'
1. Move to the parent directory of 'frontend' and initialize npm:
```
bash
npm init
```

2. Create the 'backend' folder:
```
mkdir backend
echo "Hello, world" > backend/server.js
```
3. Edit the 'package.json' file by adding the "start" command under the "scripts" section:
```
"scripts": {
    "start": "node backend/server.js"
}
```
4. Test if the setup is correct by running the following command:
```
npm start
```
5. If successful, you will see 'Hello, world' on the console.

6. Run the following command to install express
```
npm i express
```

These changes include formatting adjustments and clarifications. Let me know if there's anything else you'd like!

# Running both front and backend together
To make your dev life easier, grab nodemon and concurrently. For more information, you can read from npmjs site.
 nodemon[https://www.npmjs.com/package/nodemon] and concurrently[https://www.npmjs.com/package/concurrently]. Install both by typing the following command.

```
 npm install -D nodemon concurrently
```

```
npm i -D dotenv
```

Added 'server', 'client' and 'dev' scripts

```
  "scripts": {
    "start": "node backend/server.js",
    "server": "nodemon backend/server.js",
    "client": "npm start --prefix frontend",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  }
```

Peek into your package.json file, and you'll spot some new lines added under "devDependencies".

```
  "devDependencies": {
    "concurrently": "^8.2.1",
    "dotenv": "^16.3.1",
    "nodemon": "^3.0.1"
  }
```

To start both, type in 
```
npm run dev
```

# Note on Axios
[https://axios-http.com/]

## Features
- Make XMLHttpRequests from the browser
- Make http requests from node.js
- Supports the Promise API
- Intercept request and response
- Transform request and response data
- Cancel requests
- Automatic transforms for JSON data
- 🆕 Automatic data object serialization to multipart/form-data and x-www-form-urlencoded body encodings
- Client side support for protecting against XSRF

# Note on MongoDB Mongoose
- Excellent resource for Mongoose in JavaScript
[https://www.mongodb.com/developer/languages/javascript/getting-started-with-mongodb-and-mongoose/] 

From the top directory, install mongoose by running the following command

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



