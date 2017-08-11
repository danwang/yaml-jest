# yaml-jest
A YAML transform for [Jest](https://facebook.github.io/jest/)

# Install
```
yarn install --dev yaml-jest
```

# Usage
Add an entry to `moduleFileExtensions` and `transform` to your project's [Jest config](https://facebook.github.io/jest/docs/configuration.html):

```jsx
{
  "moduleFileExtensions": ["js", "yaml"],
  "transform": {
    "\\.yaml$": "yaml-jest",
    "\\.js?$": "babel-jest"
  },
}
```
