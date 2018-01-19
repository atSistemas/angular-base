import { expect } from 'chai';
import { spy } from 'sinon';

import * as libconsole from '../console';

describe('shared / console', () => {
  describe('helper functions', () => {
    const generateColouredString = (colorCode, str) => `\u001b[${colorCode}m${str}\u001b[0m`;

    it('"color" should return corresponding terminal-ready coloured strings', () => {
      const defaultFormatted = libconsole.color('default', 'testing default');
      expect(defaultFormatted).to.equal(generateColouredString(libconsole.colors.default, 'testing default'));

      const infoFormatted = libconsole.color('info', 'testing info');
      expect(infoFormatted).to.equal(generateColouredString(libconsole.colors.info, 'testing info'));

      const successFormatted = libconsole.color('success', 'testing success');
      expect(successFormatted).to.equal(generateColouredString(libconsole.colors.success, 'testing success'));

      const errorFormatted = libconsole.color('error', 'testing error');
      expect(errorFormatted).to.equal(generateColouredString(libconsole.colors.error, 'testing error'));
    });

    it('"printLog" should', () => {
      const spyOn = spy(console, 'log');
      libconsole.printLog('error', ['testing printLog']);
      expect(spyOn.args[0][0].trim()).to
        .equal(`[BASE] \u001b[31m${libconsole.symbols.error}\u001b[0m testing printLog`);
      spyOn.restore();
    });
  });

  describe('logging', () => {
    let spyOn;

    beforeEach(() => {
      if (spyOn) spyOn.restore();
      spyOn = spy(console, 'log');
    });

    it('"line" should call console.log with the function argument', () => {
      libconsole.line('testing line function');
      expect(spyOn.args[0][0]).to.equal('\n');
      expect(spyOn.args[0][2]).to.equal('\n');
      expect(spyOn.args[0][1]).to.equal('testing line function');
    });

    it('"info" should log an info coloured message', () => {
      libconsole.info('testing info');
      const loggedText = spyOn.args[0][0].trim();
      const colorCode = `[BASE] \u001b[${libconsole.colors.info}m${libconsole.symbols.info}\u001b[0m`;
      expect(loggedText.startsWith(colorCode)).to.equal(true);
      expect(loggedText.endsWith('testing info')).to.equal(true);
    });

    it('"success" should log a success coloured message', () => {
      libconsole.success('testing success');
      const loggedText = spyOn.args[0][0].trim();
      const colorCode = `[BASE] \u001b[${libconsole.colors.success}m${libconsole.symbols.success}\u001b[0m`;
      expect(loggedText.startsWith(colorCode)).to.equal(true);
      expect(loggedText.endsWith('testing success')).to.equal(true);
    });

    it('"error" should log an error coloured message', () => {
      libconsole.error('testing error');
      const loggedText = spyOn.args[0][0].trim();
      const colorCode = `[BASE] \u001b[${libconsole.colors.error}m${libconsole.symbols.error}\u001b[0m`;
      console.log('loggedText', loggedText);
      expect(loggedText.startsWith(colorCode)).to.equal(true);
      expect(loggedText.endsWith('testing error')).to.equal(true);
    });

    it('"clear" should clear the screen', () => {
      const spyOnStdoutWrite = spy(process.stdout, 'write');
      expect(spyOnStdoutWrite.called).to.equal(false);
      libconsole.clear();
      expect(spyOnStdoutWrite.called).to.equal(true);
      expect(spyOnStdoutWrite.calledWith('\x1B[2J\x1B[0f'));
    });
  });
});
