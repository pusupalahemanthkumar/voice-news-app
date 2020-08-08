// Importing Required Files And Packages Here.
import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import wordsToNumbers from "words-to-numbers";

import Header from "./Components/Header/Header";
import NewsCards from "./Components/NewsCards/NewsCards";
import { ALAN_KEY } from "./keys/Keys";

// Defining Functional Component Here.
const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);

  // This is exceuted only onces when App Component is Mounted.
  useEffect(() => {
    alanBtn({
      key: ALAN_KEY,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          if (parsedNumber > 20) {
            alanBtn().playText("Please try that again!");
          } else {
            window.open(articles[parsedNumber - 1].url, "_blank");
            alanBtn().playText("Opening ");
          }
        }
      },
    });
  }, []);
  return (
    <div>
      <Header />
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
};

export default App;
