// Importing Required Files And Packages Here.
import React from "react";

import classes from "./Header.module.css";

// Defining Functional Component Here.
const Header=()=>{
    return (
        <header className={classes.Header}>
            <h1><span><i className="fas fa-robot"></i></span>Voice News App</h1>
        </header>
        
    );
}

export default Header;