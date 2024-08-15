"use client";

import React, { useState, useEffect } from "react";

const LeftPanel = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.nytimes.com/svc/topstories/v2/home.json?api-key="
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

  let topStoryOne = data.results[0].title;
  let topStoryOneAbstract = data.results[0].abstract;
  let topStoryTwo = data.results[1].title;
  let topStoryTwoAbstract = data.results[1].abstract;
  let storyOneUrl = data.results[0].url;
  let storyTwoUrl = data.results[1].url;
  let storyImage = data.results[0].multimedia[0].url;

  return (
    <section className="w-3/4 flex">
    <div className="grid text-left flex-1">
      <div className="mt-5 w-80">
        <a href={storyOneUrl} className="font-bold">{topStoryOne}</a>
        <p className="mt-2 mb-2">{topStoryOneAbstract}</p>
        <hr></hr>
      </div>
      <div className="mt-4 w-80">
        <a href={storyTwoUrl} className="font-bold">{topStoryTwo}</a>
        <p className="mt-2">{topStoryTwoAbstract}</p>
      </div>
    </div>
    <div className="flex mr-20 mt-5">
      <img src={storyImage} className="h-96"></img>
      <hr className=""></hr>
    </div>
    
  </section>
  
  );
};

export default LeftPanel;
