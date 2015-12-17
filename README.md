# pure-render

> a pure render higher-order function

## install

```console
$ npm install --save pure-render
```

## import

```javascript
import pureRender from "pure-render"
```

## api

### pureRender(shouldComponentUpdate = notShallowEqual)(Component)

Wraps `Component` in a function comparing `prevProps` & `props`. If `shouldComponentUpdate` returns `false`, the last value returned by `Component(similarProps)` is returned.

By default, if `prevProps` and `props` have a shallow equality, the value is left untouched. You can use a custom function to compare them:

```javascript
const customShouldComponentUpdate = (prevProps, props) =>
  prevProps._id !== props._id

pureRender(customShouldComponentUpdate)(MyComponent)
```

## [license](LICENSE)
