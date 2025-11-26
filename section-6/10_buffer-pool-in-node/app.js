// Buffer pool is also one of the reason why alloc unsafe is fast
import { Buffer, constants } from "buffer";

const a = Buffer.alloc(4);
const b = Buffer.allocUnsafe(4);
const c = Buffer.allocUnsafeSlow(4); // Does not use buffer pool

//Our Node.js Buffer
console.log(a.byteLength); //shows 4
console.log(b.byteLength); //shows 4

console.log("***************"); //just for divider

//Array Buffer
console.log(a.buffer.byteLength); //shows 4
console.log(b.buffer.byteLength); //shows 8192

//Buffer pool
console.log(Buffer.poolSize); //shows 8192
/*This Buffer pool is basically an ArrayBuffer*/

// allocUnsafe make a buffer pool of size 8142, even if we dont need these may bytes

// Condition for allocUnsafe to use Buffer Pool

/*BufferSize < Buffer.poolSize / 2;*/
/*That is BUffer size should be less than 4096 (8192 / 2) */

/* one more variable given by buffer, buffer created of more then this length wont be created
 */
console.log(constants.MAX_LENGTH);
