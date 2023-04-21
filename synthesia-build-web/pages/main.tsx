                    
import { useState } from "react";

// Define an interface for the piano key
interface PianoKey {
  note: string;
  soundUrl: string;
}

// Define an array of piano keys
const pianoKeys: PianoKey[] = [
  { note: "C", soundUrl: "https://example.com/c.mp3" },
  { note: "D", soundUrl: "https://example.com/d.mp3" },
  { note: "E", soundUrl: "https://example.com/e.mp3" },
  { note: "F", soundUrl: "https://example.com/f.mp3" },
  { note: "G", soundUrl: "https://example.com/g.mp3" },
  { note: "A", soundUrl: "https://example.com/a.mp3" },
  { note: "B", soundUrl: "https://example.com/b.mp3" },
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
          </button>
        ))}
      </div>
    </div>
  );
}
