import React, { useState } from "react";

export default function Textform() {
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

  

  const [text, setText] = useState("");

  const [search, setSearch] = useState("");

  return (
    <>
      <form>
        <h1>Enter the text</h1>
        <div className="form-group">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="7"
            value={text}
            onChange={change}
          ></textarea>
        </div>
      </form>
      <button type="button" onClick={clear} className="btn btn-primary mx-3">
        Clear
      </button>
      <button type="button" onClick={toupper} className="btn btn-primary mx-3">
        Upper Case
      </button>
      <button type="button" onClick={tolower} className="btn btn-primary mx-3">
        Lower Case
      </button>
      <button type="button" onClick={space} className="btn btn-primary mx-3">
        Space Remover
      </button>
      <button type="button" onClick={cap} className="btn btn-primary mx-3 my-3">
        Capitalize sentence
      </button>
      <div className="container my-3">
        <h2>Summary of data</h2>
        <p>{text.split(" ").length} words</p>
        <p>{text.length + 1 - text.split(" ").length} charcters</p>
      </div>
    </>
  );
}
