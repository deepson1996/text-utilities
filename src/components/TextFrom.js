import React, { useState } from "react";

export default function TextFrom(props) {

  const [text, setText] = useState(""); //text valiable, setText method for change "enter text here" initial value for text
  //   text = "abcd" //invalid in react directly state lai yesari set garna mildaina you can use setText("abcd") which changes the state
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleLoClick = () => {
    let lowText = text.toLowerCase();
    setText(lowText);
    props.showAlert("Converted to lowercase", "success");

  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("Cleared text field", "success");

  };

  const handleCopy = () => {
    // let text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard", "success");

  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");

  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="mb-5">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows={8}
            value={text}
            onChange={handleOnChange}
            placeholder="Enter text here"
            style={{
              backgroundColor: props.mode === "dark" ? "#27196a" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          />
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length === 0} className="btn btn-danger mx-2 my-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length === 0} className="btn btn-danger mx-2 my-2" onClick={handleClearClick}>
          Clear text
        </button>
        <button disabled={text.length === 0} className="btn btn-danger mx-2 my-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length === 0} className="btn btn-danger mx-2 my-2" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes required to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
