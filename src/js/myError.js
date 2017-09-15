function MyError(message = 'Default Message') {
    this.name = 'MyError';
    this.message = message;
    this.stack = (new Error()).stack;
}
MyError.prototype = Object.create(Error.prototype);
MyError.prototype.constructor = MyError;

export default MyError;