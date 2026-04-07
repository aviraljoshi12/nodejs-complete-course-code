import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017/");

await client.connect();

const db = client.db();
const collection = db.collection("users");

const result = await collection.updateOne(
  { name: "hari" },
  { $set: { age: 29 } },
  { upsert: true },
);

console.log(result);

client.close();
