'use client';
import { useRef, useCallback } from 'react';

interface Props {
  before: string;
  after: string;
  height?: number;
}

export default function BeforeAfterSlider({ before, after, height = 260 }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const beforeLayerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  // Direct DOM manipulation — zero React re-renders, perfectly smooth
  const move = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const pos = Math.max(4, Math.min(96, ((clientX - left) / width) * 100));

    if (beforeLayerRef.current)
      beforeLayerRef.current.style.clipPath = `inset(0 ${100 - pos}% 0 0)`;
    if (lineRef.current)
      lineRef.current.style.left = `${pos}%`;
    if (handleRef.current)
      handleRef.current.style.left = `${pos}%`;
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    move(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (dragging.current) {
      move(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    dragging.current = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-xl select-none cursor-ew-resize touch-none"
      style={{ height, touchAction: 'none' }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {/* After — base layer (full width) */}
      <img
        src={after}
        alt="After"
        className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
        draggable={false}
      />

      {/* Before — clipped layer */}
      <div
        ref={beforeLayerRef}
        className="absolute inset-0 pointer-events-none"
        style={{ clipPath: 'inset(0 50% 0 0)' }}
      >
        <img
          src={before}
          alt="Before"
          className="w-full h-full object-cover object-top"
          draggable={false}
        />
      </div>

      {/* Divider line */}
      <div
        ref={lineRef}
        className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.4)] z-10 pointer-events-none"
        style={{ left: '50%' }}
      />

      {/* Drag handle */}
      <div
        ref={handleRef}
        className="absolute top-1/2 z-20 pointer-events-none"
        style={{ left: '50%', transform: 'translate(-50%, -50%)' }}
      >
        <div className="w-11 h-11 rounded-full bg-white shadow-2xl flex items-center justify-center border border-gray-100">
          <svg className="w-5 h-5 text-[#1a5f4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 bg-black/50 text-white text-[11px] font-bold px-2.5 py-1 rounded-full z-10 pointer-events-none tracking-wide">
        BEFORE
      </span>
      <span className="absolute top-3 right-3 bg-[#1a5f4a]/80 text-white text-[11px] font-bold px-2.5 py-1 rounded-full z-10 pointer-events-none tracking-wide">
        AFTER
      </span>
    </div>
  );
}
