import MyError from './myError.js';

function errorHandler(error) {
    if (error instanceof MyError) {
        alert(error.message);
    } else {
        console.error(error);
    }
}

export default errorHandler;