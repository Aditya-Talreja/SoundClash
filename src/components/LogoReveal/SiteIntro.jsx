import { useCallback, useEffect, useRef, useState } from 'react';
import logo from '../../assets/logo.svg';
import { GlassIconReveal } from './LogoReveal';

const EXIT_DURATION_MS = 550;
const FAILSAFE_DURATION_MS = 6000;

function SiteIntro({ mode = 'wait', onComplete }) {
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

    const timeout = window.setTimeout(beginExit, FAILSAFE_DURATION_MS);
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
      className="fixed inset-0 z-[200] flex items-center justify-center transition-opacity duration-[550ms] ease-out"
      style={{
        backgroundColor: mode === 'wait' ? '#000000' : 'transparent',
        opacity: isLeaving ? 0 : 1,
        pointerEvents: mode === 'wait' ? 'auto' : 'none',
      }}
      onTransitionEnd={(event) => {
        if (event.target === event.currentTarget && event.propertyName === 'opacity') completeOnce();
      }}
      aria-hidden="true"
    >
      <GlassIconReveal
        logo={logo}
        label="Groovity logo reveal"
        look="dark"
        background="#000000"
        originalColors
        iconPlate={false}
        transparent={mode === 'inline'}
        loop={false}
        speed={1.25}
        logoScale={0.82}
        finalScale={0.5}
        className="h-[min(24rem,70vw)] w-[min(24rem,70vw)]"
        onComplete={beginExit}
      />
    </div>
  );
}

export default SiteIntro;
