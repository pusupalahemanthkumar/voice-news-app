// Importing Required Files And Packages Here.
import React from "react";

import NewsCard from "./NewsCard/NewsCard";
import Instructions from "../Instructions/Instructions";

// Defining Functional Component Here.
const NewsCards = ({ articles ,activeArticle}) => {
  if (articles.length === 0) {
    return <Instructions />;
  }
  return (
    <div className="container">
      <div className="commands">
        <h3>Try Saying : Open Article number[2]</h3>
        <h3>Try Saying : Go Back</h3>
      </div>
      <div className="column-card">
        {articles.map((article, i) => {
          return <NewsCard key={i} article={article} i={i} activeArticle={activeArticle} />;
        })}
      </div>
    </div>
  );
};

export default NewsCards;
