const connectDB = require('./db/connect');
const express = require('express');
const app = express();
const routes = require('./routes/tasks');

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
        await connectDB()
        app.listen(port,console.log(`server is listening to port ${port}...`));
    }catch(error){
        console.log(error)
    }
}

