/*
 * Owner: Rishabh Anand
 * Desc: Utils - Hooks - Audio Player
 */

import { useState, useEffect } from "react";

type useAudioPlayerType = string;

export function useAudioPlayer(url: useAudioPlayerType) {
  const audio = new Audio(url);
  const [isPlaying, setIsPlaying] = useState(false);

  audio.loop = true;

  const toggleAudioPlay = () => setIsPlaying(!isPlaying);

  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
  }, [isPlaying]);

  useEffect(() => {
    audio.addEventListener("ended", () => setIsPlaying(false));

    return () => {
      audio.removeEventListener("ended", () => setIsPlaying(false));
    };
  }, []);

  return { isPlaying, toggleAudioPlay };
}
