//Creating array buffer
const a = new ArrayBuffer(4);

//Dataview is a constructor fn, it requires arrayBuffer as first argument
const view = new DataView(a);

// Dataview gives a bunch of methods for setting and getting the data in buffer.

//Setting the array buffer value of all four indexes, using different ways (all values are same)
view.setInt8(0, 80);
view.setInt8(1, 0b1010000);
view.setInt8(2, 0x50);
view.setInt8(3, 0o120);

//Getting the value
const value = view.getInt8(1);
console.log(value);

// view
// DataView(4)

// view.setInt8(0, -1)
// undefined

//getInt8 reads value as signed

// view.getInt8(0)
// -1

//getUint8 reads value as unsigned

// view.getUint8(0)
// 255
