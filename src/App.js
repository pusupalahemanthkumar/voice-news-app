// Importing Required Files And Packages Here.
import React, {useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import Header from "./Components/Header/Header";
import NewsCards from "./Components/NewsCards/NewsCards";
import Instructions from "./Components/Instructions/Instructions";
import { ALAN_KEY } from "./keys/Keys";

// Defining Functional Component Here.
const App = () => {
  const [ newsArticles, setNewsArticles] =useState([]);

  // This is exceuted only onces when App Component is Mounted.
  useEffect(() => {
    alanBtn({
      key: ALAN_KEY,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
        }
      },
    });
  }, []);
  return (
    <div>
      <Header />
      {/* <Instructions /> */}
      <NewsCards articles={newsArticles} />
    </div>
  );
};

export default App;
