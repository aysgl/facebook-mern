import React from "react";

const ChooseEmotions = () => {
  return (
    <div className="emotions">
      <a href="#." className="emoji emoji--like">
        <div className="emoji__hand">
          <div className="emoji__thumb"></div>
        </div>
      </a>
      <a href="#." className="emoji emoji--love">
        <div className="emoji__heart"></div>
      </a>
      <a href="#." className="emoji emoji--haha">
        <div className="emoji__face">
          <div className="emoji__eyes"></div>
          <div className="emoji__mouth">
            <div className="emoji__tongue"></div>
          </div>
        </div>
      </a>
      <a href="#." className="emoji emoji--yay">
        <div className="emoji__face">
          <div className="emoji__eyebrows"></div>
          <div className="emoji__mouth"></div>
        </div>
      </a>
      <a href="#." className="emoji emoji--wow">
        <div className="emoji__face">
          <div className="emoji__eyebrows"></div>
          <div className="emoji__eyes"></div>
          <div className="emoji__mouth"></div>
        </div>
      </a>
      <a href="#." className="emoji emoji--sad">
        <div className="emoji__face">
          <div className="emoji__eyebrows"></div>
          <div className="emoji__eyes"></div>
          <div className="emoji__mouth"></div>
        </div>
      </a>
      <a href="#." className="emoji emoji--angry">
        <div className="emoji__face">
          <div className="emoji__eyebrows"></div>
          <div className="emoji__eyes"></div>
          <div className="emoji__mouth"></div>
        </div>
      </a>
    </div>
  );
};

export default ChooseEmotions;
