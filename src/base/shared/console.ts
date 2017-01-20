const useColors = require('supports-color');

const colors = {
  success: 32,
  error: 31,
  default: 32,
  info: 34,
};

const symbols = {
  success: '✓',
  error: '✖',
  info: 'i',
  dot: '․',
  CR: '\u000A',
};

if (process.platform === 'win32') {
  symbols.success = '\u221A';
  symbols.error = '\u00D7';
  symbols.info = 'i';
  symbols.dot = '.';
  symbols.CR = '\u000D\u000A';
}

const color = (type, str) => {
  if (!useColors) {
    return String(str);
  }

  if (!colors[type]) {
    type = 'default';
  }

  return '\u001b[' + colors[type] + 'm' + str + '\u001b[0m';
};

function printLog(type, args) {

  let decorators = [' ', '[BASE]', color(type, symbols[type])].join(' ');

  if (typeof args[0] !== 'object') {
    args[0] = decorators + ' ' + args[0];
  } else {
    args.unshift(decorators);
  }
  return console.log.apply(console, args);
}

export const line = function (str) {
  const args = Array.prototype.slice.call(arguments);
  return console.log.apply(console, [symbols.CR].concat(args).concat(symbols.CR));
};

export const info = function (str) {
  const args = Array.prototype.slice.call(arguments);
  return printLog('info', args);
};

export const success = function (str) {
  const args = Array.prototype.slice.call(arguments);
  return printLog('success', args);
};

export const error = function (str) {
  const args = Array.prototype.slice.call(arguments);
  return printLog('error', args);
};

export const clear = () => {
  process.stdout.write('\x1B[2J\x1B[0f'); // \u001b[2J\u001b[0;0H");
};
