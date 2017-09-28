import MyError from './myError.js';

function errorHandler(error) {
    if (error instanceof MyError) {
        alert(error.message);
    } else {
        error.message += ` https://stackoverflow.com/questions?q=${encodeURI(error.message)}`
        console.error(error);
    }
}

export default errorHandler;