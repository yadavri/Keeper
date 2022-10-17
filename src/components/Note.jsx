import React from "react";

function Note(props) {
  function handleclick(e) {
    props.DeleteNote(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button name="id" value={props.id} onClick={handleclick}>
        Delete
      </button>
    </div>
  );
}

export default Note;
