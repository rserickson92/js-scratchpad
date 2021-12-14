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

async function runBelatedHelloWorldExercises() {
  console.log("Incoming hello world using await at some point...");
  console.log(await belatedHelloWorld());

  console.log("Incoming goodbye world using await at some point...");
  try {
    await belatedHelloWorld(true);
  } catch (val) {
    console.log(val);
  }

  const belatedBelatedHello = new Promise(resolve => resolve(belatedHelloWorld()));
  console.log("Wait for it...");
  console.log(`${await await belatedBelatedHello} Again!`);

  const belatedBelatedGoodbye = new Promise(resolve => resolve(belatedHelloWorld(true)));
  console.log("Wait for it...");
  try {
    await await belatedBelatedGoodbye;
  } catch (val) {
    console.log(`${val} Again!`);
  }
}

runBelatedHelloWorldExercises();

