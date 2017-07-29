## Table of Contents

- [How to run with api in development mode](#how-to-run-with-api-in-development-mode)
- [How to run with api in production mode](#how-to-run-with-api-in-production-mode)
- [How to run tests](#how-to-run-tests)
- [How to run tests with coverage](#how-to-run-tests-with-coverage)
- [Known issues](#known-issues)

## How to run with api in development mode

- When you want to run this app and hit fake data you just need to ensure the ArticleAPI.js (src/utils/api/ArticleAPI) line 1 is set to `(process.env.NODE_ENV === 'development')`
- Next either use yarn or npm to install the required libraries
  - yarn: type `yarn` to install libraries
  - npm: type `npm install`
- Next continuing with that package manager use the start command
  - yarn: type `yarn start`
  - npm: type `npm start`
- You should now be able to find this web app running at http://localhost:3000/

## How to run with api in production mode

- When you want to run this app and hit fake data you just need to ensure the ArticleAPI.js (src/utils/api/ArticleAPI) line 1 is set to `(process.env.NODE_ENV !== 'development')`
- Next either use yarn or npm to install the required libraries
  - yarn: type `yarn` to install libraries
  - npm: type `npm install`
- Next continuing with that package manager use the start command
  - yarn: type `yarn start`
  - npm: type `npm start`
- You should now be able to find this web app running at http://localhost:3000/

## How to run tests

- First either use yarn or npm to install the required libraries
  - yarn: type `yarn` to install libraries
  - npm: type `npm install`
- Next continuing with that package manager use the test command
  - yarn: type `yarn test`
  - npm: type `npm test`
- You should now be able to see the tests that are written and either add or change tests and be able to see the results

## How to run tests with coverage

- First either use yarn or npm to install the required libraries
  - yarn: type `yarn` to install libraries
  - npm: type `npm install`
- Next continuing with that package manager use the test command
  - yarn: type `yarn test -- --coverage`
  - npm: type `npm test -- --coverage`
- You should now be able to see the tests that are written and the what the coverage for every file is
  - Some files have been excluded if they are a config file, not written by the author, or irrelevant to the running application

## Known issues

- You can run `yarn build` and have a production build ready to deploy, but without the X-Frame-Option changed the iframe will not pop up with the article
  - You can find a production build running at http://react-ny-times.s3-website-us-east-1.amazonaws.com/#
- Test coverage is almost at 100%, Testing the container file was being a little finicky when trying to pass in the store so it is commented out for the time being. Normally this shouldn't be.
