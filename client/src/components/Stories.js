/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import storiesData from "../data/stories";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import IconPlus from "./Icons/IconPlus";

const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/stories`)
      .then((res) => res.json())
      .then((data) => {
        setStories(data.data);
      })
      .catch((error) => {
        console.error("Error fetching stories:", error);
      });
  }, []);

  const option = {
    perPage: 4,
    autoplay: false,
    interval: 8000,
    pagination: false,
    drag: "free",
    perMove: 1,
    lazyLoad: "nearby",
    margin: "10px",
  };
  return (
    <div className="my-4">
      <Splide aria-label="My Favorite Images" options={option}>
        <SplideSlide>
          <div className="story p-1">
            <img
              className="img-fluid story-img"
              src="https://avatars.githubusercontent.com/u/3141716?v=4"
            />
            <div className="story-new">
              <a href="#." className="plus">
                <IconPlus />
              </a>
              <span className="mb-2 mt-2">Hikaye Oluştur</span>
            </div>
          </div>
        </SplideSlide>
        {stories.map((story, index) => (
          <SplideSlide key={index}>
            <div className="story p-1">
              <div className="username">
                <img className="username-img" src={story?.img} />
                <p className="username-title mb-2">{story?.name}</p>
              </div>
              <img className="img-fluid story-img" src={story?.story} />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Stories;
