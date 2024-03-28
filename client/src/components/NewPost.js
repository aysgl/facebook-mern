import React from "react";
import Avatar from "./Avatar";

const NewPost = () => {
  return (
    <div className="bg-dark p-3 rounded mb-3">
      <div className="d-flex border-bottom pb-3">
        <Avatar
          size={"40px"}
          url={"https://avatars.githubusercontent.com/u/3141716?v=4"}
          className={"me-2"}
        />
        <input
          className="form-control rounded-pill border-0"
          placeholder="Ne düşünüyorsun, Aysegul
                ?"
        />
      </div>
      <div className="mt-2 text-center d-flex justify-content-between">
        <button className="btn btn-secondary w-100">
          <img
            height="24"
            width="24"
            alt=""
            className="me-2"
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/epGAMnVkMsy.png"
          />
          Canlı video
        </button>
        <button className="btn btn-secondary w-100">
          <img
            height="24"
            width="24"
            alt=""
            className="me-2"
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/74AG-EvEtBm.png"
          />
          Fotoğraf/video
        </button>
        <button className="btn btn-secondary w-100">
          <img
            height="24"
            width="24"
            alt=""
            className="me-2"
            src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/_RWOIsUgWGL.png"
          />
          His/hareket
        </button>
      </div>
    </div>
  );
};

export default NewPost;
