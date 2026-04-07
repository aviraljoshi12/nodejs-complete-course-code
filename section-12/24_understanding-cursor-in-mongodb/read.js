import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017/");

await client.connect();

const db = client.db("todoApp");

const collection = db.collection("todos");

// const todosData = await collection.find().toArray();
const todosData = await collection.find({ completed: false }).toArray();

console.log(todosData);

client.close();
