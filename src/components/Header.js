import React from "react";
import useMusicPlayer from "../hooks/usePlayerProvider";

function Header() {
  const { currentTrackName } = useMusicPlayer();
  return (
    <div className="header">
      <div className="marquee">{currentTrackName}</div>
    </div>
  );
}

export default Header;
