// Importing Required Files And pacakges Here.
import React from "react";

import image from "../../../assets1/Images/news.jpg";

// Defining Functional Component Here.
const NewsCard = ({
  article: { title, description, source, url, urlToImage, publishedAt },
  i,
}) => {
  return (
    <div className="card">
      <img src={urlToImage || image} alt="news" />
      <div className="panel">
        <span className="date">{new Date(publishedAt).toDateString()}</span>
        <p>Source :{source.name}</p>
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="breaker"><b>{i + 1}&nbsp;</b></span>
        <a href={url}>Learn More</a>
      </div>
    </div>
  );
};

export default NewsCard;
