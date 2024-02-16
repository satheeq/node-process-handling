const filePath = require('filepath');
// var value = parseInt('Infinity');
// // value = +"Infinity";
// function functionExample(){};
// delete functionExample;           // returns false
// console.log(functionExample);
//
// let path = filePath.create(process.cwd());
//
// let newPath = path.append('node_modules');
// console.log(newPath.toString());
//
// let arr = newPath.split();
// console.log(arr);
//
// if (arr.includes('Users')) {
//     console.log('node contains');
// }
//
// let exclArr = ['node_modules', 'bower_components', '.idea', 'dist', 'tmp', 'clone-script.js'];
//
// const arrayContains = (arr, checkArr) => {
//     let has = false;
//
//     checkArr.forEach((i) => {
//         if (arr.includes(i)) {
//             has = true;
//             return false;
//         }
//     });
//
//     return has;
// }
//
// let ret = arrayContains(exclArr, arr);
// console.log(ret);
// if (ret) {
//     console.log('contains');
// }

// const val = Math.PI;
// Math.PI = 1111;
// delete Math.PI;
// console.log(Math.PI);
// let testobj = {};
// Object.defineProperty(testobj, 'name', {value: 'satheeq', configurable: false});
//
// testobj.name = 'nasee';
// console.log(testobj);

// console.log(5&2);

// console.log('remove last / in urls');
//
// const url = 'http://example.com/foo/bar//'
// const newUrl = url.charAt(url.length - 1) === '/' ? url.substr(0, url.length - 1) : url;
//
// console.log('url', url);
// console.log('new URL', newUrl);

setInterval(() => {

    console.log(Date.now());
}, 400);
