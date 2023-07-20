import React from "react";

import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";

import useMusicPlayer from "../hooks/usePlayerProvider";

import { IconContext } from "react-icons";

function Controller() {
  const {
    currentTrackIndex,
    playTrack,
    isPlaying,
    playPreviousTrack,
    playNextTrack,
  } = useMusicPlayer();

  const handleTogglePlay = () => {
    if (currentTrackIndex) {
      playTrack(currentTrackIndex);
    } else {
      playTrack(0);
    }
  };

  const handlePreviousPlay = () => {
    playPreviousTrack();
  };

  const handleNextPlay = () => {
    playNextTrack();
  };

  return (
    <div className="controller">
      <button onClick={handlePreviousPlay}>
        <IconContext.Provider value={{ size: "3em", color: "#7f8c8d" }}>
          <BiSkipPrevious />
        </IconContext.Provider>
      </button>

      <button className="playButton" onClick={handleTogglePlay}>
        {!isPlaying ? (
          <IconContext.Provider value={{ size: "3em", color: "#7f8c8d" }}>
            <AiFillPlayCircle border="none" />
          </IconContext.Provider>
        ) : (
          <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
            <AiFillPauseCircle />
          </IconContext.Provider>
        )}
      </button>
      <button onClick={handleNextPlay}>
        <IconContext.Provider value={{ size: "3em", color: "#7f8c8d" }}>
          <BiSkipNext />
        </IconContext.Provider>
      </button>
    </div>
  );
}

export default Controller;
