const colors = {
  default: 32,
  error: 31,
  info: 34,
  success: 32,
};

const symbols = {
  CR: '\u000A',
  dot: '․',
  error: '✖',
  info: 'i',
  success: '✓',
};

if (process.platform === 'win32') {
  symbols.CR = '\u000D\u000A';
  symbols.dot = '.';
  symbols.error = '\u00D7';
  symbols.info = 'i';
  symbols.success = '\u221A';
}

const color = (type: any, str: any) => {
  if (!colors[type]) {
    type = 'default';
  }

  return '\u001b[' + colors[type] + 'm' + str + '\u001b[0m';
};

function printLog(type: any, args: any) {

  const decorators = [' ', '[BASE]', color(type, symbols[type])].join(' ');

  if (typeof args[0] !== 'object') {
    args[0] = decorators + ' ' + args[0];
  } else {
    args.unshift(decorators);
  }
  return console.log.apply(console, args);
}

/* tslint:disable:only-arrow-functions */
export const line = (...args: string[]) => (
  console.log.apply(console, [symbols.CR].concat(args).concat(symbols.CR))
);

export const info = (...args: string[]) => (
  printLog('info', args)
);

export const success = (...args: string[]) => (
  printLog('success', args)
);

export const error = (...args: string[]) => (
  printLog('error', args)
);

export const clear = () => {
  process.stdout.write('\x1B[2J\x1B[0f'); // \u001b[2J\u001b[0;0H");
};