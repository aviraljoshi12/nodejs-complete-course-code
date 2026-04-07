import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017");

await client.connect();

const db = client.db();

// await db.createCollection("users");

await db.command({
  create: "users",
  validator: {
    name: {
      $type: "string",
    },
    age: {
      $type: "int",
    },
  },
});

// await db.command({
//   collMod: "users",
//   validator: {
//     name: {
//       $type: "string",
//     },
//     age: {
//       $type: "int",
//       $gte: 18,
//     },
//   },
//   validationAction: "warn",
// });

// const collections = await db.listCollections().toArray();
// console.log(collections[0].options);

// try {
//   await collection.insertOne({ name: "passi", age: 16 });
// } catch (err) {
//   console.log(err);
// }

client.close();
