// Promisses in javascript
const pro = new Promise((resolve, reject) => {
  let a = 2 + 2;
  if (a == 4) {
    resolve("success");
  } else {
    reject("reject");
  }
});

pro.then((data) => console.log(data)).catch((err) => console.log(err));
