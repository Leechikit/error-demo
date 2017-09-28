import './html/index.html';
import './sass/index.scss';
import MyError from './js/myError.js';
import errorHandler from './js/errorHandler.js';
// import trycatch from './js/try-catch.js';

const TIMES = 100000;

// console.time('test normal in');
// let count = 0;
// for (let i = 0; i < TIMES; i++) {
//     count += i;
// }
// console.log(count);
// console.timeEnd('test normal in');

function logMessage() {
    let count = 0;
    for (let i = 0; i < TIMES; i++) {
        count += i;
    }
    // console.log(count);
}

// console.time('test normal out');
// logMessage()
// console.timeEnd('test normal out');

console.time('test try out');
try {
    logMessage();
} catch (error) {

}
console.timeEnd('test try out');

console.time('test try in');
try {
    let count = 0;
    for (let i = 0; i < TIMES; i++) {
        count += i;
    }
    // console.log(count);
} catch (error) {

}
console.timeEnd('test try in');

// console.time('test catch out');
// try {
//     throw 'test'
// } catch (error) {
//     logMessage();

// }
// console.timeEnd('test catch out');

// console.time('test catch in');
// try {
//     throw 'test'
// } catch (error) {
//     let count = 0;
//     for (let i = 0; i < TIMES; i++) {
//         count += i;
//     }
//     console.log(count);

// }
// console.timeEnd('test catch in');


// logMessage();

// console.log(123);

// function test() {
//     try {
//         // logMessage();
//         throw new Error('can not find it1');
//         return 1;
//     } catch (error) {
//         console.log(error.message);
//         throw new Error('can not find it2');
//         return 2;
//         // try {
//         //     console.log('11')
//         //     throw new Error('can not find it2');
//         // } catch (error) {
//         //     console.log(error.message);
//         //     throw new Error('can not find it3');
//         // } finally {
//         //     throw new Error('can not find it4');
//         // }
//     } finally {
//         // throw new Error('can not find it5');
//         return 3;
//         console.log(123);
//     }
// }

// console.log(test());

// try {
//     try {
//         throw new Error('can not find it1');
//     } finally {
//         throw new Error('can not find it2');
//     }
// } catch (err) {
//     console.log(err.message);
// }

// function funcResult1({ result, success = '成功', fail = '失败' }) {
//     return new Promise((resolve, reject) => {
//         if (result == void 0)
//             return reject(new TypeError('result undefined'));
//         if (result) {
//             try {
//                 resolve(success);
//             } catch (error) {
//                 reject(error);
//             }
//         } else {
//             reject(new MyError(fail));
//             // throw new MyError(fail);
//             // setTimeout(() => { throw new MyError(fail); }, 0)
//         }
//     });
// }

// function funcResult2({ result = true, success = '成功', fail = '失败' }) {
//     if (result) {
//         console.log(success);
//     } else {
//         // throw new Error(fail);
//         return Promise.reject(new MyError(fail));
//     }
// }


// Promise.resolve()
//     .then(funcResult1.bind(null, {
//         result: false,
//         success: '成功1',
//         fail: '失败1'
//     })).then(funcResult2.bind(null, {
//         result: true,
//         success: '成功2',
//         fail: '失败2'
//     })).then((result) => {
//         console.log(result);
//     }, (result) => {
//         errorHandler(result);
//     })
// .catch((result) => {
//     errorHandler(result);
// });

// Promise.all([funResult1.call(null, {
//     success: '成功1',
//     fail: '失败1'
// }), funResult1.call(null, {
//     result: false,
//     success: '成功2',
//     fail: '失败2'
// })]).then((result) => {
//     console.log(result);
// },(result)=>{
//     console.log(result);
// }).catch((result) => {
//     errorHandler(result);
// })

// try {
//     console.log('before throw error');
//     throw new Error('throw error');
//     console.log('after throw error');
// } catch (err) {
//     console.log(err.message);
// }

// Promise.resolve()
//     .then(() => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 reject(new Error('throw error'));
//             }, 0);
//         });
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// try {
//     throw new MyError("sss");
// } catch (error) {
//     errorHandler(error);
// }
window.onerror = function (msg, url, line, col, err) {
    errorHandler(err);
}
try {
    setTimeout(() => {
        throw new Error("sss")
    }, 0)
} catch (err) {
    console.log(err)
}
