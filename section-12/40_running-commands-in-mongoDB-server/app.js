import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017/newDB");

await client.connect();

const db = client.db();
// const collection = db.collection("fruits");
// await collection.insertOne({ name: "Apple", color: "Red" });

// await db.createCollection("vegetables");

const result = await db.command({ drop: "grains" });
console.log(result);
// const result = await db.command({ listCollections: 1 });

client.close();
