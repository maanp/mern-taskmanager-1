const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide name"],
    trim: true, //trim the string
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// const TestSchema = new mongoose.Schema({
//     name:String,
//     completed:Boolean
// })

module.exports = mongoose.model("Task", TaskSchema);
// module.exports = mongoose.model('Test',TestSchema)
