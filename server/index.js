import express from 'express';
import Connection from './database/db.js';
import router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app=express();
const port=8000;


app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/',router);
Connection();


app.listen(port,()=>{
    console.log("Server is running on port:"+port);
})