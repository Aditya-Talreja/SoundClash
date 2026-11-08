import { useEffect, useRef, useState } from 'react';
import animatedLogo from '../../assets/logo-intro.svg';

const INTRO_BACKGROUND = '#120f17';

function DitherLogoIntro({ targetBackgroundColor = INTRO_BACKGROUND, onComplete }) {
  const timers = useRef([]);
  const [backdropColor, setBackdropColor] = useState(INTRO_BACKGROUND);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => () => timers.current.forEach(window.clearTimeout), []);

  const startOutro = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReducedMotion(true);
      setBackdropColor(targetBackgroundColor);
      timers.current.push(window.setTimeout(onComplete, 250));
      return;
    }

    timers.current.push(window.setTimeout(() => setBackdropColor(targetBackgroundColor), 1950));
    timers.current.push(window.setTimeout(onComplete, 3100));
  };

  return (
    <div
      className="logo-intro-backdrop fixed inset-0 z-[200] flex min-h-[100dvh] items-center justify-center overflow-hidden"
      style={{
        backgroundColor: backdropColor,
        transition: reducedMotion ? 'none' : 'background-color 900ms cubic-bezier(0.22, 1, 0.36, 1)',
      }}
      aria-label="Groovity logo intro"
    >
      <img
        src={animatedLogo}
        alt="Groovity"
        className={`logo-intro-mark h-auto w-[min(46vmin,340px)] max-w-[72vw]${reducedMotion ? ' logo-intro-mark-static' : ''}`}
        draggable={false}
        onLoad={startOutro}
      />
    </div>
  );
}

export default DitherLogoIntro;
