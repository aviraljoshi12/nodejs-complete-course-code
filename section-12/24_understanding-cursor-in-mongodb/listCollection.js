import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017/");

await client.connect();

const db = client.db("expenseApp");

const collection = db.collection("expenses");
const expenses = await collection.find().toArray();

console.log(expenses);
