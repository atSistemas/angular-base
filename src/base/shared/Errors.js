export default function BaseError(msg) {
  this.msg = '[BASE ERROR] ' + msg;
  this.name = 'Base Error';
  this.stack = (new Error()).stack;
}

BaseError.prototype = Object.create(Error.prototype);
BaseError.prototype.constructor = BaseError;
