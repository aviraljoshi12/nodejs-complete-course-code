import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017/");

await client.connect();

const db = client.db("school2");

// Delete a collection
// const studentsCollection = db.collection("students");
// await studentsCollection.drop();

// Delete a field or property
// const teachersCollection = db.collection("teachers");
// await teachersCollection.updateOne(
//   {
//     _id: new ObjectId("69a1b11f67d8f23f3b9bfeb3"),
//   },
//   { $unset: { age: "" } },
// );

// Delete a database
// await db.dropDatabase();

client.close();
