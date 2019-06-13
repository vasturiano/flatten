flatten
=======

[![NPM package][npm-img]][npm-url]
[![Build Size][build-size-img]][build-size-url]
[![Dependencies][dependencies-img]][dependencies-url]

A utility function to recursively flatten nested arrays with arbitrary levels

`flatten(array)`

## Quick start

```
import flatten from '@vasturiano/flatten';
```
or
```
const flatten = require('@vasturiano/flatten');
```
or even
```
<script src="//unpkg.com/@vasturiano/flatten"></script>
```

## Usage example

```
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


[npm-img]: https://img.shields.io/npm/v/@vasturiano/flatten.svg
[npm-url]: https://npmjs.org/package/@vasturiano/flatten
[build-size-img]: https://img.shields.io/bundlephobia/minzip/@vasturiano/flatten.svg
[build-size-url]: https://bundlephobia.com/result?p=@vasturiano/flatten
[dependencies-img]: https://img.shields.io/david/vasturiano/@vasturiano/flatten.svg
[dependencies-url]: https://david-dm.org/vasturiano/@vasturiano/flatten
