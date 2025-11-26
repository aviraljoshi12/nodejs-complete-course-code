class MyEventEmitter {
  constructor() {
    this._events = {};
  }
  on(eventName, handler) {
    if (this._events[eventName]) {
      this._events[eventName].push(handler);
    } else {
      this._events[eventName] = [handler];
    }
  }

  emit(eventName) {
    if (this._events[eventName]) {
      this._events[eventName].forEach((event) => {
        event();
      });
    }
  }
}

const emitter = new MyEventEmitter();
emitter.on("x", () => {
  console.log("Emitted event x 1");
});
emitter.on("x", () => {
  console.log("Emitted event x 2");
});

emitter.emit("x");
