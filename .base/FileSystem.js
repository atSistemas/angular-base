import fs from 'fs';
import BaseError from './Errors';

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

function writeFile(file, content){
  try{
    fs.writeFileSync(file, content, 'utf8');
    return true;
  }catch(e){
    throw new BaseError(e);
  }
}

export { fileExists, readDir, writeFile };
