// tslint:disable:no-invalid-this
export function BaseError (msg: any) {
  this.msg = '[BASE ERROR] ' + msg
  this.name = 'Base Error'
  this.stack = (new Error()).stack
}

BaseError.prototype = Object.create(Error.prototype)
BaseError.prototype.constructor = BaseError
