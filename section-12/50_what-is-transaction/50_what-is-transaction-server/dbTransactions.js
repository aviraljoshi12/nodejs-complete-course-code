import { MongoClient } from "mongodb";

export const client = new MongoClient("mongodb://localhost:27017/");
await client.connect();
console.log("Database Connected");

const db = client.db();
const directories = db.collection("directories");
const users = db.collection("users");

const session = client.startSession();

session.startTransaction();

try {
  await directories.insertOne({ name: "db2", userName: "Jo" }, { session });
  await users.insertOne({ name: "Jo", rootDirName: "db2" }, { session });

  await session.commitTransaction();
} catch (err) {
  console.log(err);
  await session.abortTransaction();
}

await client.close();
console.log("Database Disconnected");
