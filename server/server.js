import express from "express";
import cors from 'cors';
import morgan from "morgan";
import connect from './database/connection.js';
import router from "./router/route.js";


const  app = express();

/** middlewares */
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by'); // less hackers know about stack

const port = 4000;

/** HTTP request to the server */
app.get('/', (req, res) =>{
    res.status(201).json("Home of Ivory Health and Muscles by Brahima");
});


/** Api routes */
app.use('/api', router)



/** starting server with only valid connection */
connect().then(() => {
    try{

        app.listen(port, () => {
    console.log(`Server connected to http://localhost:${port}`);
})
    } catch (error) {
        console.log('Cannot connect to the server')
    }
}) .catch(error => {
     console.log("Invalid connection to the database, Sorry...!")
})






