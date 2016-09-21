import fs from 'fs';
import BaseError from './Error';
import * as path from 'path';

function fileExists(filename){
  try{
    fs.accessSync(filename);
    return true;
  }catch(e){
    return false;
  }
}

function readDir(path){
  return fs.readdirSync(path);
}

function getDirectories(srcPath) {
  return fs.readdirSync(srcPath).filter(function(file) {
    return fs.statSync(path.join(srcPath, file)).isDirectory();
  });
}

function writeFile(file, content){
  try{
    fs.writeFileSync(file, content, 'utf8');
    return true;
  }catch(e){
    throw new BaseError(e);
  }
}

export { fileExists, readDir, getDirectories, writeFile };
