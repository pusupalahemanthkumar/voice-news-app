// Importing Required Files And Packages Here.
import React from "react";
import NewsCard from "./NewsCard/NewsCard";

// Defining Functional Component Here.
const NewsCards = ({ articles }) => {
  return (
    <div className="container">
      {articles.map((article, i) => {
        return <NewsCard key={i} article={article} />;
      })}
    </div>
  );
};

export default NewsCards;
