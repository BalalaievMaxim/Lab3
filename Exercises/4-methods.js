'use strict';

const methods = iface => {
  const result = [];

  for (const propName in iface) {
    const property = iface[propName];

    if (typeof property === 'function') {
      result.push([propName, property.length]);
    }
  }

  return result;
}

// uncomment for testing
// console.log(methods({
//   m1: x => [x],
//   m2: function (x, y) {
//     return [x, y];
//   },
//   m3(x, y, z) {
//     return [x, y, z];
//   },
//   m4: 0
// }))


module.exports = { methods };


// Introspect all properties of iface object and
// extract function names and number of arguments
// For example: {
//   m1: (x) => [x],
//   m2: function (x, y) {
//     return [x, y];
//   },
//   m3(x, y, z) {
//     return [x, y, z];
//   }
// will return: [
//   ['m1', 1],
//   ['m2', 2],
//   ['m3', 3]
// ]