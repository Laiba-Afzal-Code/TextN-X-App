import React, { useState } from "react";

export default function TextForm(props) {
  const handelUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };
  const handelLowclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  };
  const handelClearclick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared Text!", "warning");
  };
  const handelCopy = () => {
    let text = document.getElementById("my-box")
   text.select();
   navigator.clipboard.writeText(text.value);
   props.showAlert("Copied text on Clipboard!", "success");
  };
  const handelExtraSpece = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Remove All Extra Sepaces!", "success");
  };
  const changeMood = (event) => {
    console.log("Chnage mood was clicked!");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div>
        <div className="container">
          <h1 className=" text-info">{props.h1}</h1>
          <div className="mb-3">
            <label forindex="my-box" className="form-label fw-medium text-info">
              Enter your text for changes!
            </label>
            <textarea
              className="form-control"
              value={text} style={{backgroundColor: props.mode ==='dark'?'gray':'white', color: props.mode ==='dark'?'white':'black'}}
              id="my-box"
              onChange={changeMood}
              rows="8"
            ></textarea>
          </div>
          <button className="btn btn-warning mx-1" onClick={handelUpclick}>
            Convert UpperCase
          </button>
          <button className="btn btn-info mx-1" onClick={handelLowclick}>
            Convert LowerCase
          </button>
          <button className="btn btn-secondary mx-1" onClick={handelExtraSpece}>
            Remove Extra Spaces
          </button>
          <button className="btn btn-danger mx-1" onClick={handelClearclick}>
            Clear Text
          </button>
          <button className="btn btn-dark mx-1" onClick={handelCopy}>
            Copy Text
          </button>
        </div>
      </div>
      <div className="container my-3">
        <h1>Your Text summary</h1>
        <p>{text.split(" ").length} word and {text.length} Characters</p>
        <p>{0.008 *text.split("").length} Minutes for reading</p>
        <h2>Preview Text</h2>
        <p>{text.length>0?text:"Enter Something into text-box above to Preview it here!"}</p>
      </div>
    </>
  );
}
