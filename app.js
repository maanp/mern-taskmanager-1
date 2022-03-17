const express = require("express");
const app = express();
const cors = require("cors");
const tasks = require("./routes/tasks");
require("dotenv").config();
const connectDb = require("./db/connect");
const notFound = require("./middleware/not-found");

// middleware
app.use(cors());
app.use(express.static("./public"));
app.use(express.json());

// routes
// app.get('/hello',(req,res)=>{
//     res.send('Hey from ...')
// })

app.use("/api/v1/tasks", tasks);

app.use(notFound);

const port = 5000;
const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listing on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

/*
GET     /api/tasks              -get all task
POST    /api/tasks              -create new task
GET     /api/tasks/:id          -get single task
Patch   /api/tasks/:id          -update task
Delete  /api/tasks/:id          -delete task

*/
