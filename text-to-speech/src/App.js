import React, { useState } from "react";

import Header from "./components/Header";
import Section from "./components/Section";

const App = () => {
  const [text, setText] = useState("");

  const convertToSpeech = () => {};

  return (
    <>
      <div className="container">
        <Header />
        <Section
          text={text}
          setText={setText}
          convertToSpeech={convertToSpeech}
        />
      </div>
    </>
  );
};

export default App;
