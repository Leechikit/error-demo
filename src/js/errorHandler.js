import MyError from './myError.js';

function errorHandler(error) {
    if (error instanceof MyError) {
        alert(error.message);
    } else {
        error.message += ` https://stackoverflow.com/questions?q=${encodeURI(error.message)}`
    }
}

export default errorHandler;