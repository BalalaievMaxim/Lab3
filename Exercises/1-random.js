'use strict';

const random = (min, max) => {
  // [min, max)

  if (!max) {
    max = min;
    min = 0;
  }
  
  return Math.floor(Math.random() * (max - min) + min);
};

module.exports = { random };