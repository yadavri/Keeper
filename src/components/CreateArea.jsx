import React, { useState } from "react";

function CreateArea(props) {
  const [inputText, setInputText] = useState({
    title: "",
    content: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInputText((preValue) => {
      return {
        ...preValue,
        [name]: value
      };
    });
  }

  function addNewItem(e) {
    props.addItem(inputText);
    e.preventDefault();
    setInputText({ title: "", content: "" });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          value={inputText.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          value={inputText.content}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={addNewItem}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
