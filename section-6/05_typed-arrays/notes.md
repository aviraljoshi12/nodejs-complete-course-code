// ** TypedArrays ** //

These all are present inside TypeArrays property, basically a constructor, have many properties similar to arrays, but not all added here
Like here we can only use Int or float in the array.

// Int8Array
// Int16Array
// Int32Array
// BigInt64Array

// Uint8Array
// Uint8ClampedArray
// Uint16Array
// Uint32Array
// BigUInt64Array

//Float32Array
//Float64Array

//Array Buffer has property like maxByteLength, resizable
Resizable is initially false, but if at the time of creating the array buffer we have told its value of maxByteLength, then it becomes true

Also detached property,
suppose I have one array buffer name a
now in b i do something like

const b = a.transfer()

thenm b will have everything of a
and detacvhed will be true
