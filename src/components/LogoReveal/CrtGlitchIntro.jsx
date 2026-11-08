import { useCallback, useEffect, useRef, useState } from 'react';
import logo from '../../assets/logo.svg';

const EXIT_DELAY_MS = 1450;
const EXIT_DURATION_MS = 400;

function CrtGlitchIntro({ onComplete }) {
  const [shouldPlay] = useState(() =>
    typeof window !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const [isLeaving, setIsLeaving] = useState(false);
  const completedRef = useRef(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const completeOnce = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    onCompleteRef.current?.();
  }, []);

  const beginExit = useCallback(() => setIsLeaving(true), []);

  useEffect(() => {
    if (!shouldPlay) {
      completeOnce();
      return undefined;
    }

    const timeout = window.setTimeout(beginExit, EXIT_DELAY_MS);
    return () => window.clearTimeout(timeout);
  }, [shouldPlay, beginExit, completeOnce]);

  useEffect(() => {
    if (!isLeaving) return undefined;
    const timeout = window.setTimeout(completeOnce, EXIT_DURATION_MS);
    return () => window.clearTimeout(timeout);
  }, [isLeaving, completeOnce]);

  if (!shouldPlay) return null;

  return (
    <div
      className="crt-glitch-intro fixed inset-0 z-[200] flex items-center justify-center bg-black transition-opacity duration-[400ms] ease-out"
      style={{ opacity: isLeaving ? 0 : 1 }}
      onTransitionEnd={(event) => {
        if (event.target === event.currentTarget && event.propertyName === 'opacity') completeOnce();
      }}
      aria-hidden="true"
    >
      <div className="crt-glitch-mark" aria-hidden="true">
        <img className="crt-glitch-layer crt-glitch-layer--cyan" src={logo} alt="" draggable={false} />
        <img className="crt-glitch-layer crt-glitch-layer--magenta" src={logo} alt="" draggable={false} />
        <img className="crt-glitch-layer crt-glitch-layer--base" src={logo} alt="" draggable={false} />
      </div>
    </div>
  );
}

export default CrtGlitchIntro;
