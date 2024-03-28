import React from "react";
import Avatars from "./Icons/IconAvatars";
import IconSmile from "./Icons/IconSmile";
import IconPhoto from "./Icons/IconPhoto";
import IconGif from "./Icons/IconGif";
import IconSticker from "./Icons/IconSticker";
import IconSend from "./Icons/IconSend";

const Comment = () => {
  return (
    <div className="d-flex mx-3 border-top py-3">
      <img
        className="rounded-pill me-2"
        style={{ width: "40px", height: "40px" }}
        src="https://avatars.githubusercontent.com/u/3141716?v=4"
      />
      <div className="list-wrapper w-100">
        <textarea
          className="form-control rounded-4 border-0"
          rows="3"
          placeholder="Yorum yaz..."
        />
        <ul className="list-group list-group-horizontal w-100">
          <li className="list-group-item">
            <div
              aria-label="Bir Avatar Çıkartması ile Yorum Yap"
              role="button"
              tabIndex="0"
            >
              <Avatars />
            </div>
          </li>
          <li className="list-group-item">
            <div aria-label="Bir ifade simgesi ekle" role="button" tabIndex="0">
              <IconSmile />
            </div>
          </li>
          <li className="list-group-item">
            <div
              aria-label="Bir fotoğraf veya video ekle"
              role="button"
              tabIndex="0"
            >
              <IconPhoto />
            </div>
          </li>
          <li className="list-group-item">
            <div aria-label="Bir GIF ile Yorum Yap" role="button" tabIndex="0">
              <IconGif />
            </div>
          </li>
          <li className="list-group-item">
            <div
              aria-label="Bir Çıkartmayla Yorum Yap"
              role="button"
              tabIndex="0"
            >
              <IconSticker />
            </div>
          </li>
          <li className="list-group-item ms-auto me-2">
            <IconSend />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Comment;
