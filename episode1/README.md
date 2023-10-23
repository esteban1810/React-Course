# EPISODE 1: Create a empty project
## Introduction
To create a project, you need to write one of the following commands.

Download all required files into the same directory (without creating another directory).
```sh
npx create-react-app .
```

Create a directory with all the required files inside it, and you can name the directory as you prefer.
```sh
npx create-react-app name-project
```

## Note
I want to specify that all these configurations will be useful if you aren't interested in testing in your current project. And you want to start with a empty project.

## Files necesary to start
- App.css
- App.js
- index.js

## Files to modify
You will need deleting the next code

### App.js
- import logo from './logo.svg';
- The code of the 'App Div'.

### index.js
- import './index.css';
- Below code (// If you want to start measuring...)