import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Note from "./Note";

function App() {
  //9a. Add new note to an array. here we create a setNotes func that will use to update the notes array.
  const [Notes, setNotes] = useState([]);
  //6 Pass the new note back to the App.
  //Here we cretaed a function that can receive a note object from "CreateArea" component

  function addInput(input) {
    //9b. Here we try to add new note to an array by using spread
    setNotes((prevNotes) => {
      return [...prevNotes, input];
    });
  }
  //Here the id that needs to be deleted will be passed to the "deleteNote" function
  function deleteNote(id) {
    setNotes((prevNote) => {
      return prevNote.filter((Notes, index) => {
        return index != id;
      });
    });
  }
  return (
    <div>
      <Header />
      
      {/*7 Here the addNote function is passed as value to one of the props (onAdd) in the createArea */}
      <CreateArea onAdd={addInput} />
      {/*10 Take array and render seperate Note components for each item.
      the map func here is going to loop through the notes array and gets each of the noteItem then will return the items below*/}

      {Notes.map((newNote, index) => (
        <Note
          id={index}
          key={index}
          title={newNote.title}
          note={newNote.note}
          onDelete={deleteNote}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
