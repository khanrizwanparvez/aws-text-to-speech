import React from "react";

const Section = ({ text, setText }) => {
  return (
    <div className="section-container">
      <textarea
        name=""
        id=""
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button className="btn-convert">Convert to Speech</button>
    </div>
  );
};

export default Section;
