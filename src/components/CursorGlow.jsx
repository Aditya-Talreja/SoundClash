import { useEffect, useRef } from 'react';
import cursorPointer from '../assets/cursor-pointer.svg';

/** A lightweight desktop cursor that keeps the familiar arrow and adds a soft blue halo. */
export default function CursorGlow() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    let frame = 0;
    let targetX = -100;
    let targetY = -100;
    let currentX = targetX;
    let currentY = targetY;

    const animate = () => {
      currentX += (targetX - currentX) * 0.55;
      currentY += (targetY - currentY) * 0.55;
      if (Math.abs(targetX - currentX) < 0.1) currentX = targetX;
      if (Math.abs(targetY - currentY) < 0.1) currentY = targetY;
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      if (currentX !== targetX || currentY !== targetY) {
        frame = window.requestAnimationFrame(animate);
      } else {
        frame = 0;
      }
    };

    const move = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      cursor.classList.add('is-visible');
      if (!frame) frame = window.requestAnimationFrame(animate);
    };
    const leave = () => cursor.classList.remove('is-visible');

    window.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('pointerleave', leave);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('pointerleave', leave);
    };
  }, []);

  return (
    <div ref={cursorRef} className="cursor-glow" aria-hidden="true">
      <img className="cursor-glow-arrow" src={cursorPointer} alt="" draggable={false} />
    </div>
  );
}
