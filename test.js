const sayHello = require('./index');

if (sayHello() !== "Hello, World!") {
  throw new Error("❌ Test failed!");
}

console.log("✅ Test passed!");
