# NextJs SSR Kit (Single Server)

This version of the app moves all API related things back to a single
NextJs server.

This a template for creating a NextJs app with testing and best practices and much more. The build scripts and configurations assume you are using a Linux shell. If you are a Windows user, then setup WSL and use the 'Remote - WSL' plugin within VSCode to run and test the app locally (DO NOT USE Powershell or DOS).

![logo.png](https://i.imgur.com/xd1mL6K.png)

[![Codecov](https://img.shields.io/codecov/c/github/mattcarlotta/nextjs-ssr-kit?style=for-the-badge)](https://codecov.io/gh/kuhlaid/nextjs-ssr-kit-ss) [![Open Issues](https://img.shields.io/github/issues-raw/mattcarlotta/nextjs-ssr-kit?style=for-the-badge)](https://github.com/kuhlaid/nextjs-ssr-kit-ss/issues) [![Dependencies](https://img.shields.io/david/mattcarlotta/nextjs-ssr-kit.svg?style=for-the-badge)](https://david-dm.org/kuhlaid/nextjs-ssr-kit-ss) [![License](https://img.shields.io/github/license/mattcarlotta/nextjs-ssr-kit?style=for-the-badge)](https://github.com/kuhlaid/nextjs-ssr-kit-ss/blob/master/LICENSE)

## Working with this app

Run this command before pushing new updates to Git since it run EsLint to check for TypeScript errors that will prevent a production build from running.

```bash
yarn build
```

Use this to simply check for simple errors (but build will do a more thorough check)

```bash
yarn lint
```

## ToDo Items

[ ] Update react bootstrap once it moves out of beta v2
[ ] Work on database watching (https://www.youtube.com/watch?v=9LA7_CSyZb8)
[ ] Add user login

## Table of contents

[Pre-Configured Packages](#pre-configured-packages)

[Project Structure](#project-structure)

[Installation](#installation)

[Commands](#commands)

[NextJS Configuration](#nextjs-configuration)

[API Configuration](#api-configuration)

[Misc Configurations](#misc-configurations)

[Packages Incorporated](#packages-incorporated)

[NextJS and API Integrations](#nextjs-and-api-integrations)

[ENV Setup](#env-setup)

[Known Issues](#known-issues)

[Contributers](#contributors)

## Pre-Configured Packages

✔️ Typescript implementation.

✔️ Pre-configured Github Actions for CI.

✔️ Redux + Redux + Redux Saga implementation.

✔️ Emotion implementation.

✔️ Eslint JS/JSX files.

✔️ Stylelint SCSS files.

✔️ Runs Eslint, Jest, and Stylelint before committing.

✔️ Pre-configured Cypress for E2E testing.

✔️ Pre-configured interactive API.

## Project Structure

<details>
<summary>Click to expand project structure</summary>
<pre><code>
├── .github
├── .next
├── api
|   ├── controllers
|   ├── database
|   ├── middlewares
|   ├── models
|   ├── routes
|   ├── testServer
|   ├── .eslintignore
|   ├── .eslintrc
|   ├── jest.json
|   ├── nodemon.json
|   ├── prod-paths.json
|   ├── server.ts
|   ├── tsconfig.json
|   └── tsconfig.prod.json
|
├── build
├── e2e
├── logger
├── public
├── src
|   ├── @types
|   ├── actions
|   ├── components
|   ├── constants
|   ├── pages
|   ├── reducers
|   ├── sagas
|   ├── store
|   ├── styles
|   ├── types
|   └── utils
|
├── .browserslistrc
├── .env.dev
├── .env.prod
├── .env.seed
├── .env.staging
├── .env.teardown
├── .env.test
├── .eslintignore
├── .eslintrc
├── .gitignore
├── .npmrc
├── .prettierc
├── .stylelintrc
├── babel.config.js
├── CHANGELOG.md
├── jest.json
├── next.env.d.ts
├── next.config.json
├── package.json
├── README.md
└── tsconfig.json
</code></pre>
</details>

<hr />

## Installation

1 - Clone the repository.

```git
git clone git@github.com:kuhlaid/nextjs-ssr-kit.git
```

2 - Run `yarn install` to install dependencies.

3 - Run `yarn dev` to run a development server.

Provided in this boilerplate is an example of how to integrate a RESTful API utilizing MongoDB.

In order to interact with the API, you'll need to:

- Create a test cluster in <a href="https://cloud.mongodb.com/">Cloud MongoDB Atlas</a> and save yourself the hassle of setting up MongoDb locally.
- While the development server is running, open your browser and navigate to <a href="http://localhost:3000/users">http://localhost:3000/users</a>.

<hr />

## Commands

| `yarn <command>` | Description                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------------- |
| `analyze`        | Compiles `src` app to `.next/static` and displays chunk distribution charts for production. |
| `build`          | Compiles `src` app to `.next/static` and `api` to `build` for production. †                 |
| `dev`            | Starts development servers (`localhost:3000` for app and `localhost:5000` for api).         |
| `lint`           | Lints all `.ts`/`.tsx` files in `src`.                                                      |
| `l:api`          | Lints all `.ts` files in `api`.                                                             |
| `start`          | Starts production servers (must run `build` first).                                         |
| `test`           | Tests `.test.tsx` files in `src` once.                                                      |
| `t:api`          | Tests `.spec.ts` files in `api` once.                                                       |
| `t:apicov`       | Tests `.spec.ts` files in `api` with code coverage.                                         |
| `t:apiwatch`     | Tests and watches all `.spec.ts` files in `api` for changes.                                |
| `t:cov`          | Tests `.test.tsx` files in `src` with code coverage.                                        |
| `t:e2e`          | Runs cypress `.spec.ts` files in `e2e` in a browser.                                        |
| `t:e2erun`       | Runs cypress `.spec.ts` files in `e2e` headlessly.                                          |
| `t:watch`        | Tests and watches `.tsx` files in `src` that have changed since last commit.                |
| `t:watchall`     | Tests and watches all `.test.tsx` files in `src` for changes.                               |
| `tsc`            | Type checks all `.ts`/`.tsx` within the `src` and `api` directories.                        |

† Note: Before running this command, you must edit the [.env.prod](.env.prod#L2) file and update the `baseURL` from `http://localhost:5000/api/` to include your remote API server host and update `CLIENT` from `http://localhost:3000` to include your remote server application host.

<hr />

## NextJS Configuration

<details>
<summary>Click to expand NextJS configuration</summary>
<pre><code>
- .next: NextJS development/production compiled source.
- public: NextJS public assets.
- lib/actions: Redux actions.
- lib/components: React components.
- lib/constants: Redux constants.
- lib/pages/_app.tsx: NextJS app configuration (redux + redux saga + global stylesheet).
- lib/pages/_document.tsx: NextJS document configuration for emotion components.
- lib/pages/_error.tsx: NextJS fallback 404 page.
- lib/reducers: Redux reducers.
- lib/sagas: Redux sagas.
- lib/store: Redux store configuration.
- lib/styles: Custom component/page styles.
- lib/types: Shareable typescript types and interfaces.
- lib/utils/setupTest/index.ts: Enzyme test setup for your React components.
- lib/utils/axiosConfig/index.ts: Custom axios configuration.
- lib/utils/mockAxios/index.ts: A mocked axios instance for testing.
- lib/utils/parseFields/index.ts: Custom functions for parsing form fields into a simple object.
- lib/utils/parseResponse/index.ts: Custom functions for parsing 'res' responses.
- lib/@types: typescript module declaration types for jest and redux globals.
- .eslintignore: NextJS eslint config for NextJS.
- .eslintrc: NextJS eslint ignore config for NextJS.
- .stylelintrc: Stylelint config for NextJS.
- babel.config.js: Babel config for NextJS.
- jest.json: jest Config for NextJS.
- next.env.d.ts: Types for NextJS.
- next.config.js: Custom NextJS webpack config.
- tsconfig.json: TS compiler options for Next (integration with IDE)
</code></pre>
</details>
<br />

## API Configuration

<details>
<summary>Click to expand API configuration</summary>
<pre><code>
- api/controllers: Express route controllers.
- api/database: Mongo connection configuration.
- api/middlewares: Express middlewares.
- api/models: Mongoose models for Mongo.
- api/routes: Express routes.
- api/testServer/index.ts: Test server.
- api/.eslintignore: API eslint config.
- api/.eslintrc: API eslint ignore config.
- api/jest.json: jest config for API.
- api/nodemon.json: Development options for reloading the API process on save.
- api/prod-path.js: Resolving aliased modules for API in production.
- api/server.ts: Express API server setup.
- api/tsconfig.json: TS compiler options for the API (integration with IDE)
- api/tsconfig.prod.json: TS compiler options for building the API (excludes tests)
- build: API compiled source.
</code></pre>
</details>
<br />

## Misc Configurations

<details>
<summary>Click to expand misc configurations</summary>
<pre><code>
- .github: Continous integration using Github Actions and repo issue templates.
- e2e: Cypress end-to-end test suites (.spec.ts files under the e2e directory).
- logger: Shareable chalk console notifications.
- .browserslistrc: Browsers list config (for babel transpiling).
- .prettierc: Prettier config.
- .npmrc: Yarn config.
</code></pre>
</details>
<br />

<hr />

## Packages Incorporated

Click [here](package.json) to see latest versions.

### NextJS Specfic

<details>
<summary>Click to expand brief overview of NextJS packages</summary>
<pre><code>
- <a href="https://github.com/axios/axios">Axios</a>
- <a href="https://github.com/babel/babel">Babel</a>
- <a href="https://github.com/cypress-io/cypress">Cypress</a>
- <a href="https://github.com/emotion-js/emotion">Emotion</a>
- <a href="http://airbnb.io/enzyme/">Enzyme</a>
- <a href="https://github.com/eslint/eslint/">Eslint</a>
- <a href="https://github.com/facebook/jest">Jest</a>
- <a href="https://github.com/zeit/next.js">NextJS</a>
- <a href="https://github.com/kirill-konshin/next-redux-wrapper">NextJS Redux Wrapper</a> 
- <a href="https://github.com/prettier/prettier">Prettier</a>
- <a href="https://github.com/facebook/react">React</a>
- <a href="https://github.com/fkhadra/react-toastify">React Toastify</a>
- <a href="https://github.com/reduxjs/redux">Redux</a>
- <a href="https://github.com/zalmoxisus/redux-devtools-extension">Redux DevTools Extension</a>
- <a href="https://redux-saga.js.org/">Redux Saga</a>
- <a href="https://github.com/sass/dart-sassr">Sass</a>
- <a href="https://github.com/no-shot/env">no-shot/env</a>
- <a href="https://stylelint.io/">Stylelint</a>
- <a href="https://github.com/kristerkari/stylelint-scss">Stylelint-SCSS</a>
- <a href="https://github.com/stylelint/stylelint-config-recommended">Stylelint-Config-Recommended</a>
</code></pre>
</details>
<br />

### API Specific

<details>
<summary>Click to expand brief overview of API packages</summary>
<pre><code>
- <a href="https://github.com/petkaantonov/bluebird">Bluebird</a>
- <a href="https://github.com/expressjs/cors">CORS</a>
- <a href="https://github.com/expressjs/express">Express</a>
- <a href="https://mongoosejs.com/">Mongoose</a>
- <a href="https://github.com/expressjs/morgan">Morgan</a>
- <a href="https://github.com/prettier/prettier">Prettier</a>
- <a href="https://github.com/no-shot/env">no-shot/env</a>
</code></pre>
</details>
<br />

<hr />

## NextJS and API Integrations

By default, most directories within the root and `src` directories are [aliased](tsconfig.json#L22-L43) (`~`). This means that you can refer to root files or directories by using the `~` symbol followed by a child file or directory name (root-level `index.js` files [require their own aliases](https://github.com/zeit/next.js/issues/12743), as such this project has been set up to handle predefined directories -- you'll be responsible for any additional directories). For example, `~middlewares` refers to the [api/middlewares/index.ts](api/middlewares/index.ts) file, while `lib/api/models/users` refers to the [api/model/user.ts](api/models/user.ts) file. This allows for rapid development when referring to root-level directories as it eliminates the hassle of specifiying relative paths (like `../models`) to the directory!

<hr />

## ENV Setup

By default, this project attempts to import `.env` files placed within the `root` directory according to the `process.env.ENV_LOAD` variable (`dev`, `staging`, `prod`, `test`, ...etc; see no-shot/env [documentation](https://github.com/no-shot/env/blob/main/README.md) for more info). However, this has been set up to be flexible so that if you don't wish to utilize any `.env` files, then as long the following `process.env` variables are defined, then the `.env` files and/or directory can be discarded:

- `APIPORT` (required and used [here](api/server.ts#L19))
- `baseURL` (required and used [here](lib/utils/axiosConfig/index.ts#L8))
- `CLIENT` (required and used [here](next.config.js#L8), [here](next.config.js#L14) and [here](api/middlewares/index.ts#L32))
- `DATABASE_URI` (required and used [here](api/database/index.ts))
- `PORT` (required and used [here](next.config.js#L14))

<hr />

## Known Issues

If you run into any issues, please fill out an issue report <a href="https://github.com/kuhlaid/nextjs-ssr-kit/issues">here</a>.

### Unresolved

⚠️ As of updating this boilerplate to v7.0.0, [enzyme-react-adapter-16](https://www.npmjs.com/package/enzyme-adapter-react-16) does **NOT** currently support React 17, see [issue tracker](https://github.com/enzymejs/enzyme/issues/2429). As such, this boilerplate is forced to use [@wojtekmaj/enzyme-adapter-react-17](https://www.npmjs.com/package/@wojtekmaj/enzyme-adapter-react-17) as a replacement until support is officially added. If concerned or incompatibilities arise, please downgrade to `react` and `react-dom` to 16.x.x and revert back to `enzyme-react-adapter-16` in the [setupTests](lib/utils/setupTests/index.ts#L5) file.

## Contributors

Support this boilerplate by becoming a contributor. Your github logo will show up here with a link to your profile.

<a href="https://github.com/kimberleykelly" target="_blank"><img src="https://avatars0.githubusercontent.com/u/32412752?s=120&v=4" height="30px"><span style="margin-left: 5px">kimberleykelly</span></a>

## Adding Tags to this boilerplate

<details>
<summary>This explains some of the steps to setting up new pages. Here we setup 'tags' to be assigned to users.</summary>
<code>
- Copy the lib/pages/users.tsx into a new file named tags.tsx
- Rename all of the instances of 'user' in the tags.tsx file to 'tag' (keep the same case as was used in the users page)
- Now we look at the errors in the tags.tsx file to work backwards through the scripts we need to create
- Copy the lib/actions/Users folder contents and rename as a Tags folder
- Rename the lib/actions/Tags/__tests__/Users.test.tsx to Tags.test.tsx, then update instances of user with tag within the script
- Now we need to copy the lib/components/Forms/UserForm to TagForm
- Under lib/constants/index.ts add TAG constants
- In lib/types/index.d.ts we need a TagData type
- now we need a lib/components/Layout/DisplayTagList
- we need to add sagas
- we need to add reducers/Tags
</code>
</details>

## ToDo

// note sure why the value of 2 works in this statement found in
// src\components\Forms\TagForm\__tests__\TagForm.test.tsx
expect(wrapper.find("[data-testid='errors']")).toHaveLength(2);

// try to track connection pool instances in the app
<http://mongodb.github.io/node-mongodb-native/3.5/reference/management/cmap-monitoring/>
