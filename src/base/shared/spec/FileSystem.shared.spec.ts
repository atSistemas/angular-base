import * as fs from 'fs';
import * as path from 'path';
import { expect } from 'chai';
import { fileExists, readDir, writeFile } from '../FileSystem';

describe('shared / FileSystem', () => {

  describe('fileExists', () => {

    it('Sould check if file exist', () => {

      const realPath = path.resolve(__dirname, '../Env.ts');
      const fakePath = path.resolve(__dirname, 'fake');
      expect(fileExists(realPath)).to.equal(true);
      expect(fileExists(fakePath)).to.equal(false);

    });
  });

  describe('readDir', () => {

    it('Should read a directory', () => {

      const dir = path.resolve(__dirname, '../../state');
      const files = readDir(dir);
      expect(files.length).to.equal(1);

    });
  });

  describe('writeFile', () => {

    it('Sould write a file', () => {

      const file = path.resolve(__dirname, 'test.js');
      const content = 'Hello!';
      writeFile(file, content);

      const wrote  = fs.readFileSync(file, 'utf8');
      // tslint:disable-next-line:no-empty
      fs.unlink(file, () => {});

      expect(wrote).to.equal(content);

    });
  });

});
