// function MyError(message = 'Default Message') {
//     this.name = 'MyError';
//     this.message = message;
//     this.stack = (new Error()).stack;
//     Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
// }
// MyError.prototype = Object.create(Error.prototype);
// MyError.prototype.constructor = MyError;

// export default MyError;

function MyError(message = 'Default Message') {
    var instance = new Error(message);
    instance.name = 'MyError';
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    return instance;
}

MyError.prototype = Object.create(Error.prototype, {
    constructor: {
        value: MyError,
        enumerable: false,
        writable: true,
        configurable: true
    }
});

if (Object.setPrototypeOf) {
    Object.setPrototypeOf(MyError, Error);
} else {
    MyError.__proto__ = Error;
}

export default MyError;