import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import axios from "axios";

function CreateArea() {
  const [isMultiLine, setMultiLine] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    axios
      .post(process.env.REACT_APP_BE_API+"/notes/add", note)
      .then((res) => console.log(res.data));
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
    setMultiLine(false);
  }

  function handleClick() {
    setMultiLine(true);
  }

  return (
    <div>
      <form className="create-note">
        {isMultiLine && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isMultiLine ? "3" : "1"}
          onClick={handleClick}
        />
        <Zoom in={isMultiLine}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
