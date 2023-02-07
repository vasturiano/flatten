flatten
=======

[![NPM package][npm-img]][npm-url]
[![Build Size][build-size-img]][build-size-url]
[![NPM Downloads][npm-downloads-img]][npm-downloads-url]

A utility function to recursively flatten nested arrays with arbitrary levels

`flatten(array)`

## Quick start

```js
import flatten from '@vasturiano/flatten';
```
or using a *script* tag
```html
<script src="//unpkg.com/@vasturiano/flatten"></script>
```

## Usage example

```js
const nestedArray = [
  1, 
  [
    2, 
    [3, 4], 
    [
      5, 
      6, 
      [7, 8]
    ], 
    9
  ], 
  [
    10, 
    [11]
  ]
];

flatten(nestedArray);

// Result: 
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
```


[npm-img]: https://img.shields.io/npm/v/@vasturiano/flatten
[npm-url]: https://npmjs.org/package/@vasturiano/flatten
[build-size-img]: https://img.shields.io/bundlephobia/minzip/@vasturiano/flatten
[build-size-url]: https://bundlephobia.com/result?p=@vasturiano/flatten
[npm-downloads-img]: https://img.shields.io/npm/dt/flatten
[npm-downloads-url]: https://www.npmtrends.com/flatten
