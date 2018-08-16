var mongoose = require("mongoose");
mongoose.set("debug", true);

// mongoose.connect("mongodb://localhost:3000/todo-api", { useNewUrlParser: true });

// mongoose.Promise = Promise;


mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost:3000/todo-api", { useNewUrlParser: true })
  .then(() => {
    console.log('mongoDB is connected...')
  })
  .catch((err) => {
    throw err
  })


module.exports.Todo = require("./todo");



