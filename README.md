
## Introduction

This is a [Next.js] project where it's designed to visualise the most popular developer regarding the choosen programming language and which duration. 

the app consists of two filters that control the results. The results appear in a Card with all the developer details such as

1- name
2- username
3- avatar
4- repository (name, description)
5- Url

The card also contains `Learn more` button that takes you to the the github repository of this specific developer.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

These scripts refer to the different stages of developing an application:

dev - Runs next dev to start Next.js in development mode
build - Runs next build to build the application for production usage
start - Runs next start to start a Next.js production server
lint - Runs next lint to set up Next.js' built-in ESLint configuration


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technology Stack

1- Functional Components &  React hooks,
2- Next.js
3- Material UI as UI library
4- TypeScript.

## Contents

The `pages/index` has the main page of the react app. This is the page that is rendered when the user visits the root of your application. Any edit in `pages/index will update the result in your browser.

The `pages/src` has the main components of the react app. First is the SearchBar and second is the card that will show the developer contents.

## API documentation

The `services/developers.ts` has the api function for `github-trending-api (https://github-trending-api.de.a9sapp.eu/) ` with the desired language and duration.

`fetchDevelopers`

 #Description
`fetchDevelopers` Fetch developers from the `github-trending-api (https://github-trending-api.de.a9sapp.eu/)`.

 #Parameters
 language
 duration

 #what function return
eturns a promise array of all the developers found for this specific desired programming language and duration of time.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


