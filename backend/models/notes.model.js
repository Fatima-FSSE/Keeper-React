const mongoose = require("mongoose");

//create Schema for note
const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
});

//passing the schema to model for notes
const Note = new mongoose.model("Note", noteSchema);

//export the model
module.exports = Note;
