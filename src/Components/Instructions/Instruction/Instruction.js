// Importing Required Files And Packages Here.
import React from "react";

import classes from "./Instruction.module.css";

// Defining Functional Component Here.
const Instruction = ({ instruction: { title, command, examples } }) => {
  return (
    <div className={classes.Instruction}>
      <h3>{title}</h3>
      {examples ? (
        <p>
          <b>Examples :</b> {examples}
        </p>
      ) : null}

      <p>
        <b>Command :</b>
        {command}
      </p>
    </div>
  );
};

export default Instruction;
