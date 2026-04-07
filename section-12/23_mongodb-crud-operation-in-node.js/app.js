import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017/");

await client.connect();

const db = client.db("school");
const studentsCollection = db.collection("students");

await studentsCollection.updateOne(
  { _id: new ObjectId("69a1b040c00fdb7d759b0280") },
  { $set: { name: "Aviral" } },
);

client.close();
