import React, { useState } from "react";
import Track1 from "../mp3/track1.mp3";
import Track2 from "../mp3/track2.mp3";
import Track3 from "../mp3/track3.mp3";
import Track4 from "../mp3/track4.mp3";
import Track5 from "../mp3/track5.mp3";
import Track6 from "../mp3/track6.mp3";

const MusicPlayerContext = React.createContext();

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "Relaxing - Jazz",
      file: Track1,
    },
    {
      name: "Easy Lifestyle - Jazz",
      file: Track2,
    },
    {
      name: "Slow Trap - Jazz",
      file: Track3,
    },
    {
      name: "Autumn Sky Meditaion - Jazz",
      file: Track4,
    },
    {
      name: "WatR-Fluid - Piano",
      file: Track5,
    },
    {
      name: "Relaxed Vlog - Jazz",
      file: Track6,
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
