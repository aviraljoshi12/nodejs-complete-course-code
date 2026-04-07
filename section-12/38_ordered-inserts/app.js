import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017/");

await client.connect();

const db = client.db();
const collection = db.collection("users");

const result = await collection.insertMany(
  [
    { _id: new ObjectId("69aa4b08d3d26143a332d067"), name: "Aditya" },
    { name: "Shubham" },
    { name: "Lokesh" },
  ],
  { ordered: false },
);
console.log(result);
// const data = await collection.find().toArray();
// console.log(data);

client.close();
