import React from "react";
import useMusicPlayer from "../hooks/usePlayerProvider";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

function TrackList() {
  const { trackList, currentTrackIndex, playTrack, isPlaying } =
    useMusicPlayer();

  return (
    <div className="track-list">
      {trackList.map((track, index) => (
        <button
          className="playButton"
          key={index}
          style={{ border: "none" }}
          onClick={() => {
            playTrack(index);
          }}
        >
          {currentTrackIndex === index ? (
            <IconContext.Provider value={{ size: "3em", color: "#7f8c8d" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          ) : (
            <IconContext.Provider value={{ size: "3em", color: "#7f8c8d" }}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          )}
          <p>{track.name}</p>
        </button>
      ))}
    </div>
  );
}

export default TrackList;
