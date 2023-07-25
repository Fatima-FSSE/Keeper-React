import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BE_API+"/notes")
      .then((res) => setNotes(res.data))
      .catch((error) => console.log(error));
  });

  function deleteNote(id) {
    axios
      .delete(process.env.REACT_APP_BE_API+"/notes/" + id)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <Header />
      <CreateArea />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem._id.toString()}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
