import * as fs from 'fs'
import { BaseError } from './BaseError'

function fileExists (filename: any) {
  try {
    fs.accessSync(filename)
    return true
  } catch (e) {
    return false
  }
}

function readDir (path: any) {
  return fs.readdirSync(path)
}

function readFile (path: any, options: any) {
  return fs.readFileSync(path, options)
}

function writeFile (file: any, content: any) {
  try {
    fs.writeFileSync(file, content, 'utf8')
    return true
  } catch (e) {
    throw new BaseError(e)
  }
}

export { fileExists, readDir, readFile, writeFile }
