import { memo, useCallback, useEffect, useState } from "react";
import { useSpeech } from "../hooks/useSpeech";

// ssml
const text =
  '<speak>Step 1, take a deep breath. <break time="1s"/>Step 2, exhale.</speak>';

export const TextToSpeech = memo(() => {
  // const [text, setText] = useState("");
  const { onPlay, onStop } = useSpeech({ text });

  // const fetchTitle = useCallback(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts/1")
  //     .then((response) => response.json())
  //     .then(({ title }) => {
  //       setText(title);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetchTitle();
  // }, [fetchTitle]);

  // const handleLoadMore = useCallback(() => {
  //   fetchTitle();
  // }, [fetchTitle]);

  return (
    <div>
      <button onClick={onPlay}>Play</button>
      <button onClick={onStop}>Pause</button>
      {/* <button onClick={handleLoadMore}>Load more</button> */}
    </div>
  );
});
