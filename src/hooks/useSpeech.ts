import { useState, useEffect, useCallback, useRef } from "react";

interface UseSpeechText {
  text: string;
}

interface UseSpeechResult {
  isPaused: boolean;
  onPlay: () => void;
  onStop: () => void;
}

export const useSpeech = ({ text }: UseSpeechText): UseSpeechResult => {
  const [isPaused, setIsPaused] = useState(true);
  const speechRef = useRef<SpeechSynthesis | null>(null);

  useEffect(() => {
    speechRef.current = window.speechSynthesis;
  }, []);

  const handlePlay = useCallback(() => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";

    speechRef.current?.speak(utterance);

    setIsPaused(false);
  }, [text]);

  const handleStop = useCallback(() => {
    speechRef.current?.pause();
    setIsPaused(true);
  }, []);

  return {
    isPaused,
    onPlay: handlePlay,
    onStop: handleStop,
  };
};
