import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Fab from "@mui/material/Fab";

function Note(props) {
  function handleDelete() {
    //when each of the notes component in "App.jsx" is renderd
    //we pass the index of the noteItem of the notes array as an id to props.onDelete.
    //so when we triger the props.onDelet we send it back to App.jsx
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.note}</p>
      <Fab onClick={handleDelete}>
        <DeleteIcon />
      </Fab>
    </div>
  );
}

export default Note;
