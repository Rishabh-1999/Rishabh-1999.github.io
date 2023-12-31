/*
 * @Owner: Rishabh Anand
 * @Desc: Utils - Hooks - Audio Player
 */

import { useState, useEffect } from "react";

let audio: HTMLAudioElement | undefined;

export function useAudioPlayer(url: string) {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudioPlay = () => setIsPlaying(!isPlaying);

  useEffect(() => {
    if (isPlaying) {
      audio = new Audio(url);
      audio.loop = true;
      audio.play();
    } else {
      audio?.pause();
      audio = undefined;
    }
  }, [isPlaying]);

  useEffect(() => {
    audio && audio.addEventListener("ended", () => setIsPlaying(false));

    return () => {
      audio && audio.removeEventListener("ended", () => setIsPlaying(false));
    };
  }, [isPlaying]);

  return { isPlaying, toggleAudioPlay };
}
