import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";



/** Connection will only happen when there is a valid connection */
async function connect(){
    // to create a new instance whenever the server is started
    const mongod = await MongoMemoryServer.create();
    const getUri = mongod.getUri(); 

    mongoose.set('strictQuery', true);
    const db = await mongoose.connect(getUri);
    console.log("Database is Connected")
    return db;
}

export default connect; 