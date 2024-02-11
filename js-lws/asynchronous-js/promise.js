// Exmple 01
const promise = new Promise(function (resolve, reject) {
  // do async task
  // DB Calls, cryptography, network
  console.log("Promise is pending");
  setTimeout(() => {
    resolve();
    console.log("Async task is complete");
  }, 3000);
});

promise.then(function () {
  console.log("Promise Comsumed");
});

// Example 02
new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Task 2 complete");
    resolve();
  }, 2000);
}).then(function () {
  console.log("Promise 2 consumed");
});

// Example 03:
const promise_03 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({
      name: "Rakib",
      age: 27,
    });
  }, 3000);
});

promise_03.then(function (user) {
  console.log(user);
});
