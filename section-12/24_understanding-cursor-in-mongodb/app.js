import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017/");

await client.connect();

const db = client.db("todoApp");
const collection = db.collection("todos");

const cursor = collection.find();

console.log(await cursor.hasNext());

console.log(await cursor.next());
console.log(await cursor.next());
console.log(await cursor.next());

// for await (const document of cursor) {
//   console.log(document);
// }

client.close();
