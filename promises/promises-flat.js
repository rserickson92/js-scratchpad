const timeoutMillis = 5000;
const errorMessage = "Go fix your code";

const belatedHelloWorld = (fail = false) => {
  return new Promise((resolve, reject) => {
    const delayedFunc = () => {
      if (fail) {
	reject("Goodbye world!");
      } else {
	resolve("Hello world!");
      }
    };
    setTimeout(delayedFunc, timeoutMillis);
  });
}

console.log("Incoming hello world using .then at some point...");
belatedHelloWorld().then((val) => console.log(val));

console.log("Incoming goodbye world using .then at some point...");
belatedHelloWorld(true).then(
  (val) => console.log(errorMessage),
  (val) => console.log(val)
);

console.log("Wait for it...");
const chainedBelatedHello = new Promise(resolve => resolve(belatedHelloWorld()));
chainedBelatedHello
  .then(p => p)
  .then((val) => console.log(`${val} Again!`))
  .catch(() => console.log(errorMessage));

console.log("Wait for it...");
const chainedBelatedGoodbye = new Promise(resolve => resolve(belatedHelloWorld(true)));
chainedBelatedGoodbye
  .then(p => p)
  .then((val) => console.log(errorMessage))
  .catch((val) => console.log(`${val} Again!`));

