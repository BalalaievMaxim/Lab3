'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const numericalIp = ip.split('.').map(Number);
  const shifter = (result, byte) => (result << 8) + byte;

  return numericalIp.reduce(shifter, 0);
}

module.exports = { ipToInt };
