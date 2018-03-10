const flatten = arr => arr instanceof Array
  ? [].concat(...arr.map(flatten))
  : arr;

export default flatten;