# flatten
A utility function to recursively flatten nested arrays with arbitrary levels

`flatten(array)`

[![NPM](https://nodei.co/npm/@vasturiano/flatten.png?compact=true)](https://nodei.co/npm/@vasturiano/flatten/)

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
