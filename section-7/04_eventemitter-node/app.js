import EventEmitter from "events";

const emitter = new EventEmitter();

emitter.on("abc", () => {
  console.log("abc event fired 1");
});
emitter.on("abc", () => {
  console.log("abc event fired 2");
});
emitter.on("x", () => {
  console.log("x event fired");
});
emitter.on("y", () => {
  console.log("y event fired ");
});

//Inside _events in emitter, an array of two functions, inside abc will be there
//Inside events x and y are also there
//Basically three events but for event handlers

emitter.emit("x");
