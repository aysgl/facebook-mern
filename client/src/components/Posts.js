import React, { useState } from "react";
import IconDots from "./Icons/IconDots";
import IconClose from "./Icons/IconClose";
import IconCommentFill from "./Icons/IconCommentFill";
import IconShareFill from "./Icons/IconShareFill";
import IconComment from "./Icons/IconComment";
import IconLike from "./Icons/IconLike";
import IconShare from "./Icons/IconShare";
import Emotions from "./Emotions";
import ShareDropdown from "./ShareDropdown";
import IconEarth from "./Icons/IconEarth";
import Avatar from "./Avatar";
import Comment from "./Comment";
import ChooseEmotions from "./ChooseEmotions";
import postsData from "../data/posts";

const Posts = () => {
  const [showEmoji, setShowEmoji] = useState(false);
  const [showComment, setShowComment] = useState(false);

  const totalEmotions = postsData.reduce((emotionCounts, post) => {
    emotionCounts[post.emotions] = (emotionCounts[post.emotions] || 0) + 1;
    return emotionCounts;
  }, {});

  return (
    <div>
      {postsData.map((i) => (
        <div key={i.id} className="bg-dark rounded mb-3">
          <div className="p-3 d-flex justify-content-between align-items-center">
            <div className="username d-flex align-items-center">
              <Avatar url={i.userImg} size={40} />

              <div className="ms-2">
                <p className="mb-0">{i.username}</p>
                <p className="mb-0 small text-light">
                  Senin için öneriliyor · 1g · <IconEarth />{" "}
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center action">
              <div className="action-btn">
                <IconDots />
              </div>
              <div className="action-btn">
                <IconClose />
              </div>
            </div>
          </div>
          <div>
            <div className="p-3">{i.description}</div>

            <img className="img-fluid w-100" src={i.postImg} />
            <div className="mx-3 py-2 d-flex justify-content-between border-bottom">
              <Emotions
                emotion={i.emotions}
                count={totalEmotions[i.emotions] || 0}
              />
              <div className="d-flex">
                <div className="d-flex align-items-center me-3">
                  <span className="me-2 small">{i.shared}</span>
                  <IconCommentFill />
                </div>
                <div className="d-flex align-items-center">
                  <span className="me-2 small"> {i.commented}</span>
                  <IconShareFill />
                </div>
              </div>
            </div>

            <div className="emotion-wrapper px-3 py-1 d-flex justify-content-between">
              <button
                onMouseOver={() => setShowEmoji(true)}
                onMouseOut={() => setShowEmoji(false)}
                className="show-emoji btn btn-dark w-100 d-flex align-items-center justify-content-center"
              >
                <IconLike />
                Beğen
                {showEmoji && <ChooseEmotions />}
              </button>

              <button
                onMouseOver={() => setShowComment(true)}
                className="btn btn-dark w-100 d-flex align-items-center justify-content-center"
              >
                <IconComment />
                Yorum Yap
              </button>

              <div className="dropdown">
                <button
                  className="btn btn-dark w-100 d-flex align-items-center justify-content-center dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <IconShare />
                  Paylaş
                </button>

                <ShareDropdown />
              </div>
            </div>

            {showComment && <Comment />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
