import { MongoClient, ObjectId } from "mongodb";


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

const getAllTasks = async ()  => {
    await client.connect()
    const db = client.db(dbName)
    const collection = db.collection('tasks')
    const result = await collection.find().toArray()
    console.log(result)
    return result;
}

createTask("maï");

getAllTasks()

const updateTask = async (id) => {
    // connect to the server
    await client.connect();
  
    const db = client.db(dbName);
    const collection = db.collection("tasks");
  
  
    const objId = new ObjectId(id);
    const updateTask = await collection.updateOne({ _id: objId }, { $set: { done: true }});
  
    console.log(updateTask);
    return updateTask;
  };
 
 updateTask("6212756d476c2ab71099f20f")


 const deleteTask = async (id) => {
     await client.connect()
     const db = client.db(dbName)
     const collection = db.collection('tasks')
     
     const objId = new ObjectId(id);
     const deleteTask =await collection.deleteOne({ _id: objId });
     
     console.log(deleteTask);
     return deleteTask;
 }

 deleteTask("62127736d2ff46c6e2923b04")