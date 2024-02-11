// // Exmple 01
// const promise = new Promise(function (resolve, reject) {
//   // do async task
//   // DB Calls, cryptography, network
//   console.log("Promise is pending 1");
//   setTimeout(() => {
//     console.log("Async task 01 is complete");
//   }, 0);
//   something();
//   resolve();
// });

// function something() {
//   setTimeout(() => {
//     console.log("inside a SOMETHING : PROMISE 01");
//   }, 0);
// }
// promise.then(function () {
//   console.log("Promise 01 Comsumed");
// });

// // Example 02
// new Promise(function (resolve, reject) {
//   console.log("Promise 2 Producing");
//   resolve();
//   setTimeout(() => {
//     console.log("Async task 02 is complete");
//   }, 3000);
// }).then(function () {
//   console.log("Promise 2 consumed");
// });

// // Example 03: Pass data through resolve function
// const promise_03 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve({
//       name: "Rakib",
//       age: 27,
//     });
//   }, 3000);
// });

// promise_03
//   .then(function (user) {
//     console.log("Nothing in the first line");
//     return user
//   })
//   .then((user) => {
//     console.log("2nd Line: ", user);
//   });

// Example 04: Can we get promise value in a variable?
// Ans: can not get the value directly. But it will show pending state.

const promise_04 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    const error = false;
    if (!error) {
      resolve({ username: "rakib", pass: "123" });
    } else {
      reject("ERROR: Something went wrong!");
    }
  }, 1400);
});

const userName = promise_04.then(function (user) {
  console.log(user);
  return user.username;
});

console.log(userName);
