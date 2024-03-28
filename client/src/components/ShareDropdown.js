import React from "react";
import IconShareNow from "./Icons/IconShareNow";
import IconShareOnStream from "./Icons/IconShareOnStream";
import IconSendOnMessenger from "./Icons/IconSendOnMessenger";
import IconShareInGroup from "./Icons/IconShareInGroup";
import IconShareOnFriend from "./Icons/IconShareOnFriend";

const ShareDropdown = () => {
  return (
    <ul className="dropdown-menu shadow">
      <li>
        <a className="dropdown-item" href="#">
          <IconShareNow />
          Şimdi paylaş(Arkadaşlar)
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          <IconShareOnStream />
          Akışta Paylaş
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          <IconSendOnMessenger />
          Messenger'da Gönder
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          <IconShareInGroup />
          Bir grupta paylaş
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          <IconShareOnFriend />
          Bir arkadaşının profilinde paylaş
        </a>
      </li>
    </ul>
  );
};

export default ShareDropdown;
