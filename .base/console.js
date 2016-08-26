exports.useColors = process.browser ? null : require('supports-color');

exports.colors = {
  success: 32,
  error: 31,
  default: 32
};

exports.symbols = {
  ok: '✓',
  err: '✖',
  dot: '․',
  CR: '\u000A'
};

if (process.platform === 'win32') {
  exports.symbols.ok = '\u221A';
  exports.symbols.err = '\u00D7';
  exports.symbols.dot = '.';
  exports.symbols.CR = '\u000D\u000A';
}

/**
 * Color `str` with the given `type`,
 * allowing colors to be disabled,
 * as well as user-defined color
 * schemes.
 *
 * @param {string} type
 * @param {string} str
 * @return {string}
 * @api private
 */
exports.color = function (type, str) {
  if (!exports.useColors) {
    return String(str);
  }

  if (!exports.colors[type]) {
    type = 'default';
  }

  return '\u001b[' + exports.colors[type] + 'm' + str + '\u001b[0m';
};

exports.line = function (str) {
   const args = Array.prototype.slice.call(arguments);
  return console.log.apply(console, [exports.symbols.CR].concat(ars).concat(exports.symbols.CR));
};

exports.info = function (str) {
  const args = Array.prototype.slice.call(arguments);
  return console.log.apply(console, [' [BASE] '].concat(args));
};

exports.success = function (str) {
  const args = Array.prototype.slice.call(arguments);
  return console.log.apply(console, [' ', exports.color('success', exports.symbols.ok), ' [BASE] '].concat(args));
};

exports.error = function (str) {
  const args = Array.prototype.slice.call(arguments);
  return console.log.apply(console, [' ', exports.color('error', exports.symbols.error), ' [BASE] '].concat(args));
};

exports.clear = function () {
  process.stdout.write("\x1B[2J\x1B[0f");//\u001b[2J\u001b[0;0H");
};