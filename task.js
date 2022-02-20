import { MongoClient } from "mongodb";


const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'todo';

const createTask = async (providedName) => {
    await client.connect()

   const db = client.db(dbName);

   const collection = db.collection('tasks');

   const result = await collection.insertOne({name: providedName, done: false})

   console.log(result)

   return result;
    
}

createTask("maï");
