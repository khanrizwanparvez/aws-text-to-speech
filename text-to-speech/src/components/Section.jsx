import React from "react";

const Section = ({ text, setText, convertToSpeech }) => {
  return (
    <div className="section-container">
      <textarea
        name=""
        id=""
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <button onClick={convertToSpeech} className="btn-convert">
        Convert tot Speech
      </button>
    </div>
  );
};

export default Section;
