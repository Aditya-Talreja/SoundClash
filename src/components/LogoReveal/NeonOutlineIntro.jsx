import { useCallback, useEffect, useRef, useState } from 'react';

const EXIT_DELAY_MS = 1400;
const EXIT_DURATION_MS = 450;

function NeonOutlineIntro({ onComplete }) {
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
      className="neon-intro fixed inset-0 z-[200] flex items-center justify-center bg-black transition-opacity duration-[450ms] ease-out"
      style={{ opacity: isLeaving ? 0 : 1 }}
      onTransitionEnd={(event) => {
        if (event.target === event.currentTarget && event.propertyName === 'opacity') completeOnce();
      }}
      aria-hidden="true"
    >
      <svg
        className="neon-intro-mark"
        viewBox="0 0 512 512"
        role="presentation"
        focusable="false"
      >
        <path
          className="neon-outline-path neon-outline-path--white"
          d="M222 444.5C218.55 442.47 189.04 426.67 173.39 418.48C166.3 414.77 159.15 410.95 157.5 409.99C155.85 409.03 134.93 397.78 111 385C87.08 372.22 58.05 356.7 46.5 350.52C34.95 344.35 22.69 337.81 19.25 336.01C14.54 333.53 13.01 332.2 13.05 330.61C13.07 329.45 15.92 324.06 19.38 318.62C80.24 222.97 164.97 164.78 268.5 147.55C283.48 145.06 299.55 143.88 318.5 143.87C339.02 143.87 349.58 144.85 369.64 148.63C377.41 150.1 384.49 151.03 385.36 150.69C387.95 149.7 388.56 145.11 386.38 142.99C382.6 139.31 347.56 132.47 320 130.03C295.5 127.85 253 129.17 225.5 132.96C212.18 134.79 209 134.48 209 131.33C209 129.98 226.52 96.49 249.07 54.75C251.96 49.39 254.95 45 255.72 45C257.62 45 255.88 44.06 328 83.78C436.23 143.38 446.46 149.07 447.72 150.31C448.67 151.24 447.13 154.64 440.63 165.95C436.07 173.89 431.77 180.58 431.08 180.81C430.39 181.04 425.48 179.18 420.17 176.68C408.61 171.24 395.6 166.79 384 164.32C370.98 161.54 338.17 161.82 324.5 164.82C287.11 173.05 259.34 190.38 238 218.8C213.25 251.77 201.5 295.08 204.92 340.74C206.78 365.59 211.55 386.64 224.68 427.93C228 438.38 228.99 442.79 228.27 443.93C226.92 446.07 224.97 446.25 222 444.5Z"
          fill="#ffffff"
          pathLength="1"
        />
        <path
          className="neon-outline-path neon-outline-path--yellow"
          d="M346.5 467.34C315.93 462.42 288.56 448.87 267.67 428.31C245.02 406.02 232.53 379.28 228.94 345.39C224.85 306.75 239.73 266.08 268.44 237.47C286.48 219.49 307.2 208.1 335 200.86C343.1 198.75 345.82 198.63 393.25 198.26L443 197.87L443 246.41L443 294.96L350.75 295.23L258.5 295.5L253.74 297.72C247.52 300.62 239.39 308.3 236.52 313.98C233.41 320.13 231.66 329.23 232.5 334.83C234.34 347.14 241.67 357.73 251.77 362.69L257.5 365.5L363.5 365.5L469.5 365.5L475.05 362.9C478.1 361.47 482.25 358.84 484.28 357.06C488.5 353.35 493.85 343.14 494.24 338.02L494.5 334.55L443 334.37C414.68 334.28 384.19 334.15 375.25 334.1L359 334L359 331.5L359 329L429.5 329L500 329L500 337.83C500 362.9 489.74 392.51 474 412.85C453.42 439.45 425.06 457.67 392.61 465.16C385.68 466.76 379.43 467.33 366.5 467.54C357.15 467.69 348.15 467.6 346.5 467.34Z"
          fill="#ffff00"
          pathLength="1"
        />
      </svg>
    </div>
  );
}

export default NeonOutlineIntro;
