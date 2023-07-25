const router = require("express").Router();
let Note = require("../models/notes.model");

router.route("/").get((req, res) => {
  Note.find()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(400).json("Erorr" + err));
});

router.route("/add").post((req, res) => {
  const noteToAdd = new Note({
    title: req.body.title,
    content: req.body.content,
  });
  noteToAdd
    .save()
    .then(() => res.json("Note added!"))
    .catch((err) => res.status(400).json("Error " + err));
});

router.route("/:id").delete((req, res) => {
  Note.findByIdAndDelete(req.params.id)
    .then(() => res.json("Note Deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
