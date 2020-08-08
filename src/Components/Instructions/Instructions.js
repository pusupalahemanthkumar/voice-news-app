// Importing Required Files And Packages Here.
import React from "react";

import Instruction from "./Instruction/Instruction";

// Defining Functional Component Here.
const Instructions = () => {
  const instructions = [
    {
      title: "Latest News",
      command: " Give me the latest news!",
    //   examples: 'Try it'
    },
    {
      title: "News By Categories",
      command: "Give me the latest about [Category]",
      examples:
        "Business , Entertainment , General , Health , Science , Sports, Technology",
    },
    {
      title: "News By Terms",
      command: "What's up with [Terms]",
      examples: "PlayStation5 , Smartphones , Bitcons ",
    },
    {
      title: "News By Sources",
      command: "Give me the News from [Source]",
      examples: "ABC News, Wired, BBC, Time, IGN, Buzzfeed, CNN...",
    },
  ];
  return (
    <div className="container">
      <h3 className="text-center">Try Saying Something!</h3>
      {instructions.map((instruction, idx) => {
        return <Instruction  key={idx} instruction={instruction} />;
      })}
    </div>
  );
};

export default Instructions;
