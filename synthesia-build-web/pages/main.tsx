                    
import { useState } from "react";

// Define an interface for the piano key
interface PianoKey {
  note: string;
  soundUrl: string;
}

// Define an array of piano keys
const pianoKeys: PianoKey[] = [
  { note: "C", soundUrl: "./resources/notes/key01.mp3" },
  { note: "D", soundUrl: "./resources/notes/key02.mp3" },
  { note: "E", soundUrl: "./resources/notes/key03.mp3" },
  { note: "F", soundUrl: "./resources/notes/key04.mp3" },
  { note: "G", soundUrl: "./resources/notes/key05.mp3" },
  { note: "A", soundUrl: "./resources/notes/key06.mp3" },
  { note: "B", soundUrl: "./resources/notes/key07.mp3" },

];

export default function Piano() {
  const [currentKey, setCurrentKey] = useState<PianoKey | null>(null);

  // Define a function to play the sound of a piano key
  function playSound(soundUrl: string) {
    const audio = new Audio(soundUrl);
    audio.play();
  }

  // Define a function to handle a piano key button click
  function handleButtonClick(pianoKey: PianoKey) {
    setCurrentKey(pianoKey);
    playSound(pianoKey.soundUrl);
  }

  return (
    <div className="piano">
      <div className="left-border">
        {pianoKeys.map((pianoKey) => (
          <button
            key={pianoKey.note}
            className={`piano-key ${pianoKey === currentKey ? "active" : ""}`}
            onClick={() => handleButtonClick(pianoKey)}
          >
            {pianoKey.note} 
            {/* how to use \n here? */}
          </button>
        ))}
      </div>
    </div>
  );
}
