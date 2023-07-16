/*
 * Owner: Rishabh Anand
 * Desc: Section - Landing Page - NavBar Component - AudioPlayer Component
 */

/* Styling Utils */
import classnames from "classnames";

/* Material UI */
import MusicOffIcon from "@mui/icons-material/MusicOff";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

/* Utils */
import { useAudioPlayer } from "utils/hooks/audioPlayer";

/* Assets */
import BaseMusic from "assets/audio/base_audio.mp3";

function AudioPlayer() {
  const { isPlaying, toggleAudioPlay } = useAudioPlayer(BaseMusic);

  const AudioIcon = isPlaying ? MusicOffIcon : MusicNoteIcon;

  return (
    <span className="mx-1">
      <AudioIcon
        className={classnames(
          "hover:text-[var(--layout-color-highlight)] hover:scale-110",
          {
            "text-[var(--layout-color-highlight)]": isPlaying,
          }
        )}
        {...(isPlaying && { fontSize: "large" })}
        onClick={toggleAudioPlay}
      />
    </span>
  );
}

export default AudioPlayer;
