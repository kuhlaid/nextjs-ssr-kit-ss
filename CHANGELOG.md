# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.2] - 2021-07.27

- [ ] adding assets

## [0.1.1] - 2021-07.22

- [x] updating next to v11 and bootstrap to 5
- [x] correcting the .gitattributes file so EOL changes are not made to image files (which causes corrupt images files to be saved to Git)

## [0.1.0] - 2021-07-21

### Changed

- converted the code to single server so it would be easier to install on OpenShift
- removing redux-devtools-extension since it does not work on production (even if specifying developmentOnly)

## [0.0.1] - 2021-07-07

- Looking into updating the jest.json an tsconfig.json to so we can specify absolute paths to modules instead relative (which makes it difficult to interpret) using this format <https://til.hashrocket.com/posts/lmnsdtce3y-import-absolute-paths-in-typescript-jest-tests> but realized that the ~ path approach is better if you want a more flexible path configuration, so abandoning the absolute paths in most cases
- trying to add Tags as another element to the app to understand the code better
- using the .git/info/exclude file to exclude some files from Git source control locally
- adding poolSize setting within the database configuration so we can reduce or increase socket/connections to the database depending on our expected query loads
- replacing snackables with noshot/env
