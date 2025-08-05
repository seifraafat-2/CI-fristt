const sayHello = require('./index');

if (sayHello() !== "Wrong text") {
  throw new Error("❌ Test failed!");
}
