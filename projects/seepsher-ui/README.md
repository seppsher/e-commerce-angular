# seepsher-ui

Reusable Angular components and utilities for forms and HTTP feedback.

## Build

From the repository root, install dependencies and build the library:

```sh
npm install --legacy-peer-deps
npm run build:ui
```

The package is generated in `projects/seepsher-ui/dist/`.

## Private GitHub Packages registry

The package is published privately to GitHub Packages when a tag matching `seepsher-ui-v*` is pushed. The tag version must match the `version` in this package's `package.json`; for example, publish version `0.1.0` with:

```sh
git tag seepsher-ui-v0.1.0
git push origin seepsher-ui-v0.1.0
```

To install it in a consuming project, configure `.npmrc`:

```ini
@seppsher:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

Set `GITHUB_TOKEN` to a GitHub token with `read:packages` access. Do not commit the token. Then install the package:

```sh
npm install @seppsher/seepsher-ui
```

## Public API

- `ReactiveFieldErrorsComponent` and `SignalFieldErrorsComponent`
- `LoaderComponent`
- `ScrollToFirstErrorDirective` and `scrollToFirstError`
- `REGEX`, `phoneValidator`, and `phoneSchema`
- `errorInterceptor` and `loaderInterceptor`
- `ErrorService` and `LoaderService`

The field error components use the `app-field-errors` selector and require Angular Material plus `@ngx-translate/core` in the consuming application. Translation keys use the `global.validation.*` namespace.
