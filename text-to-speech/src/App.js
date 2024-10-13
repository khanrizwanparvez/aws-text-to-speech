import React, { useState } from "react";

import Header from "./components/Header";
import Section from "./components/Section";

const App = () => {
  const [text, setText] = useState("");
  console.log(text);
  

  return (
    <div className="container">
      <Header />
      <Section text={text} setText={setText} />
    </div>
  );
};

export default App;
