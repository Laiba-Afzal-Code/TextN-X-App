import React from "react";

export default function About(props) {

  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "rgb(83, 82, 82)" : "white",
  };

  return (
    <>
      <div>
        <div className="container my-5 text-info"
          style={{ color: props.mode === "dark" ? "white" : "black" }}>
          <h1>About Us</h1>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  style={myStyle}
                >
                  <strong>Analyze your Text</strong>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body" style={myStyle}>
                  <strong>TextN-X</strong> give you a way to Analyze your text
                  quickly and efficiently. Be it word count, Character count or
                </div>
              </div>
            </div>
            <div className="accordion-item" style={myStyle}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  style={myStyle}
                >
                  <strong>Free to Use</strong>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body" style={myStyle}>
                  <strong>TextN-X</strong> Is a free Character counter that
                  provide instant charater or word count statistics for a given
                  text. TextN-X reports the number of words and characters. Thus
                  it is suitable for writing text with word / Charaters limit.
                </div>
              </div>
            </div>
            <div className="accordion-item" style={myStyle}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  style={myStyle}
                >
                  <strong>Browser Compatible</strong>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body" style={myStyle}>
                  <strong>TextN-X</strong> This word counter software work in
                  any web browsers such as Chrome. Firefox, Safari, Internet
                  Exploer, Opera. It suits to count character in Facebook, Blog,
                  Books, Excel Document, PDF Document, Essays, etc.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
