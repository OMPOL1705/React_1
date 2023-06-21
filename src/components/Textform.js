import React, { useState } from "react";

export default function Textform(props) {
  const change = (event) => {
    setText(event.target.value);
  };

  const clear = () => {
    let newtext = "";
    setText(newtext);
  };

  const toupper = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const tolower = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const space = () => {
    let newtext = text.replaceAll(/ /g, "");
    setText(newtext);
  };

  const cap = () => {
    let newtext = text.replace(
      /(^|[.!?]\s+)([a-z])/g,
      (match, punctuation, letter) => {
        return punctuation + letter.toUpperCase();
      }
    );
    setText(newtext);
  };

  const copy = () => {
    navigator.clipboard.writeText(text);
  }

  

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <form>
          <h1>Enter the text</h1>
          <div className="form-group">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="7"
              value={text}
              onChange={change}
              style={{
                backgroundColor: props.mode === "dark" ? "#bfbfbf" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            ></textarea>
          </div>
        </form>
        <button
          type="button"
          onClick={clear}
          className="btn btn-primary mx-3 my-3"
          style={{
            backgroundColor: props.mode === "dark" ? "#bfbfbf" : "#3381c3",
            color: "white"
          }}
        >
          Clear
        </button>
        <button
          style={{
            backgroundColor: props.mode === "dark" ? "#bfbfbf" : "#3381c3",
            color: "white"

          }}
          type="button"
          onClick={toupper}
          className="btn btn-primary mx-3 my-3"
        >
          Upper Case
        </button>
        <button
          style={{
            backgroundColor: props.mode === "dark" ? "#bfbfbf" : "#3381c3",
            color: "white"
          }}
          type="button"
          onClick={tolower}
          className="btn btn-primary mx-3 my-3"
        >
          Lower Case
        </button>
        <button
          type="button"
          onClick={space}
          className="btn btn-primary mx-3 my-3"
          style={{
            backgroundColor: props.mode === "dark" ? "#bfbfbf" : "#3381c3",
            color: "white",
          }}
        >
          Space Remover
        </button>
        <button
          style={{
            backgroundColor: props.mode === "dark" ? "#bfbfbf" : "#3381c3",
            color: "white",
          }}
          type="button"
          onClick={cap}
          className="btn btn-primary mx-3 my-3"
        >
          Capitalize sentence
        </button>
        <button
          style={{
            backgroundColor: props.mode === "dark" ? "#bfbfbf" : "#3381c3",
            color: "white",
          }}
          type="button"
          onClick={copy}
          className="btn btn-primary mx-3 my-3"
        >
          Copy Text
        </button>
        <button
          type="button"
          onClick={()=>{props.onToggle("primary")}}
          className="btn btn-primary mx-3"
        >
          Blue
        </button>
        <button
          type="button"
          onClick={()=>{props.onToggle("danger")}}
          className="btn btn-danger mx-3"
        >
          Red
        </button>
        <div className="cont my-1">
          <h2>Summary of data</h2>
          <p>{(text.split(/\s+/).filter((element)=>{return element.length!==0;}).length)} words</p>
          <p>{text.length + 1 - text.split(/\s+/).length} charcters</p>
          <h2>Preview</h2>
          <p>{text.length>0 ? text:"Enter something"}</p>
        </div>
      </div>
    </>
  );
}
