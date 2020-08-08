// Importing Required Files And Packages Here.
import React from "react";

import classes from "./Showcase.module.css";

// Defining Functional Component Here.
const Showcase = () => {
 const imageUrl ="https://miro.medium.com/max/768/1*9O-ZkZoHQVYc7zw95h8L2Q.jpeg";

  return (
    <div className={classes.Showcase}>
      <img src={imageUrl}  alt=""/>
      <h3>Try Saying Something !</h3>
    </div>
  );
};

export default Showcase;
