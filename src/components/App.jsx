import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [Notes, setNotes] = useState([]);

  function addItem(Note) {
    setNotes((preNotes) => {
      return [...preNotes, Note];
    });
  }

  function DeleteNote(id) {
    setNotes((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
    console.log(id);
  }

  return (
    <div>
      <Header />
      <CreateArea addItem={addItem} />
      {Notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            DeleteNote={DeleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
