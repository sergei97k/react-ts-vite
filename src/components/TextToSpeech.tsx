import { memo } from "react";
import { useSpeech } from "../hooks/useSpeech";

const TEXT = "Hello World! My name is John.";

export const TextToSpeech = memo(() => {
  const { onPlay, onStop } = useSpeech({ text: TEXT });

  return (
    <div>
      <button onClick={onPlay}>Play</button>
      <button onClick={onStop}>Pause</button>
    </div>
  );
});
