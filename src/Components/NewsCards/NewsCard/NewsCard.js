// Importing Required Files And pacakges Here.
import React, { useEffect, useState, createRef } from "react";

import image from "../../../assets1/Images/news.jpg";

// Defining Functional Component Here.
const NewsCard = ({
  article: { title, description, source, url, urlToImage, publishedAt },
  i,
  activeArticle,
}) => {
  // Auto Scrolling Setup Here.
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);
  const [elRefs, setElRefs] = useState([]);
  useEffect(() => {
    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);
  useEffect(() => {
    if (i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);

  // Active Card Setup Here.
  let activestyle = null;
  if (activeArticle === i) {
    activestyle = {
      borderBottom: "5px solid blue",
    };
  }
  return (
    <div ref={elRefs[i]} className="card" style={activestyle}>
      <img src={urlToImage || image} alt="news" />
      <div className="panel">
        <span className="date">{new Date(publishedAt).toDateString()}</span>
        <p>Source :{source.name}</p>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="actions">
          <h3>{i + 1}&nbsp;</h3>
          <a href={url} className="btn">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
