'use strict';

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const generateKey = (length, possible) => {
  let result = '';
  
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * possible.length);
    result += possible[index];
  }

  return result
};

module.exports = { generateKey };