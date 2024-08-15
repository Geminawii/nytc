"use client";

import React, { useState, useEffect } from "react";

const RightPanel = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=GavWsvVaMBa7qXjaATtbStalyGwgjtzZ"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.error("Error fetching stories:", err);
      });
  }, []);

  if (!data) return <div>Loading...</div>;

  const topStoryOne = data.results[0].title;
  const topStoryOneAbstract = data.results[0].abstract;
  const storyOneUrl = data.results[0].url;
  const storyImageOne = data.results[0].media?.[0]?.['media-metadata']?.[0]?.url
  

  return (
    <section className="w-1/4">
      <div className="mt-5">
        <img src={storyImageOne} className="size-60 mb-2"></img>
        <a href={storyOneUrl} className="font-bold">
          {topStoryOne}
        </a>
        <p>{topStoryOneAbstract}</p>
        <hr></hr>
      </div>

    </section>
  );
};

export default RightPanel;
