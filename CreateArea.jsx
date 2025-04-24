import React, { useState } from "react";
import AddCommentIcon from "@mui/icons-material/AddComment";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  //1 Created a const that keeps track of content and title
  //intead of creating two const we use "note" for the both content and title
  const [input, setInput] = useState({
    title: "",
    note: "",
  });

  function handleChange(event) {
    //2 we destructred the event to get hold of the event.target and it will tap into name and value
    const value = event.target.value;
    const name = event.target.name;
    //3 the setNote received the prevNote and using the arrrow function
    //we will return using spread function to add name,value and prevNote
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }
  
  //4 when the onclick button is clicked it trigers the "handleClick" function and pass an event to it
  function handleClick(event) {
    //8 using props we get back the onAdd func and when add button is clicked it triggers the onAdd which has addNote as a value
    props.onAdd(input);
    //5 here we use the event that is passed to it to prevent our form from refreshing when ever we click on add button
    event.preventDefault();
    event.preventDefault();
    //to make our title and note clear itself after clicking on add, we pass an empty string of "title" and "content" to setNote func.
    setInput({ title: "", note: "" });
  }
  function expand() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form>
        <input
          onClick={expand}
          onChange={handleChange}
          type="text"
          placeholder="Title"
          name="title"
          value={input.title}
          rows={isExpanded ? 3 : 1}
        />
        <br />
        {isExpanded ? (
          <textarea
            onChange={handleChange}
            placeholder="Take a Note"
            name="note"
            value={input.note}
          ></textarea>
        ) : null}

        <Zoom in={isExpanded}>
          <Fab onClick={handleClick}>
            <AddCommentIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
