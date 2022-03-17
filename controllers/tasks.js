const Task = require("../models/task");
//
// const Test = require("../models/task");

const getAllTasks = async (req, res) => {
  try {
    // let allTask = await Task.find({ _id: "6232bd5cf26ead29206b7e1e" });
    let tasks = await Task.find({});
    res.json({ tasks });
  } catch (error) {
    res.status(500).json({ error });
  }
};
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.json({ task });
  } catch (error) {
    res.status(500).json({ error });
  }
  //   const task = await Test.create(req.body);
};
const getTask = async (req, res) => {
  try {
    let task = await Task.findOne({ _id: req.params.id });
    res.json({ task });
  } catch (error) {
    res.json(error);
  }
};
const updateTask = async (req, res) => {
  try {
    let task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res
        .status(500)
        .json({ msg: `No task exist with id: ${req.params.id}` });
    }
    res.json({ task });
  } catch (error) {
    res.status(500).json(error);
  }
  // res.send("update task");
};
const deleteTask = async (req, res) => {
  try {
    let task = await Task.findOneAndDelete({ _id: req.params.id });
    if (!task) {
      return res
        .status(500)
        .json({ msg: `No task exist with id: ${req.params.id}` });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  deleteTask,
  updateTask,
};
