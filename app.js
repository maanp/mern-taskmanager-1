const express = require("express");
const app = express();
const cors = require("cors");
const tasks = require("./routes/tasks");
// require("dotenv").config();
const connectDb = require("./db/connect");
const notFound = require("./middleware/not-found");
if (process.env.NODE_ENV !== 'production') require('dotenv').config()
// middleware
app.use(cors());
app.use(express.static("./public"));
app.use(express.json());

// routes
app.get('/',(req,res)=>{
    res.send('Running backed successfully....')
})

app.use("/api/v1/tasks", tasks);

app.use(notFound);

const port = process.env.PORT || 5000;
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
