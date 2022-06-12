const connectDB = require('./db/connect');
const express = require('express');
const app = express();
const routes = require('./routes/tasks');
const Task = require('./models/task')
require('dotenv').config()

//middleware
app.use(express.json());

//routes 
app.get('/hello',(req,res)=>{
    res.send('Task Manager App')
})

app.use('/api/v1/tasks/',routes);

const port = 5000;
const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`server is listening to port ${port}...`));
    }catch(error){
        console.log(error)
    }
}

start()
