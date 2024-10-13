import React, { useState } from "react";
import AWS from "aws-sdk";

import Header from "./components/Header";
import Section from "./components/Section";

AWS.config.update({
  accessKeyId: process.env.REACT_APP_CLIENTID,
  secretAccessKey: process.env.REACT_APP_SECRETKEY,
  region: process.env.REACT_APP_REGION,
});

const polly = new AWS.Polly();

const App = () => {
  const [text, setText] = useState("");

  const convertToSpeech = () => {
    polly.synthesizeSpeech(
      {
        Text: text,
        OutputFormat: "mp3",
        VoiceId: "Salli",
      },

      (error, data) => {
        if (error) {
          console.log(error);
        } else {
          console.log(data);
        }
      }
    );
  };

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
