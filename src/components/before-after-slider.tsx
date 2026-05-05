import { useState, useRef, useCallback, useEffect } from 'react';

interface Props {
  key?: number;
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
  label?: string;
  category?: string;
}

export const BeforeAfterSlider = ({
  before, after,
  beforeAlt = 'Before', afterAlt = 'After',
  label, category,
}: Props) => {
  const [sliderPos, setSliderPos] = useState(50); // 0 = all before, 100 = all after
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const getPos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.max(0, Math.min(((clientX - rect.left) / rect.width) * 100, 100));
    setSliderPos(pct);
  }, []);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => { if (isDragging) getPos(e.clientX); };
    const onMouseUp = () => setIsDragging(false);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [isDragging, getPos]);

  return (
    <div className="rounded-xl overflow-hidden shadow-lg select-none bg-black">

      {/* Image container */}
      <div
        ref={containerRef}
        className="relative aspect-[4/3] cursor-ew-resize overflow-hidden"
        onMouseDown={(e) => { e.preventDefault(); setIsDragging(true); getPos(e.clientX); }}
        onTouchStart={(e) => getPos(e.touches[0].clientX)}
        onTouchMove={(e) => { e.preventDefault(); getPos(e.touches[0].clientX); }}
      >

        {/* BEFORE — always full size, stationary */}
        <img
          src={before}
          alt={beforeAlt}
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* AFTER — same full size, stationary — clip reveals it from the left */}
        <img
          src={after}
          alt={afterAlt}
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
            WebkitClipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
          }}
        />

        {/* Divider line — sharp, no blur */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white z-20 shadow-[0_0_12px_rgba(0,0,0,0.6)] pointer-events-none"
          style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
        />

        {/* Drag handle circle */}
        <div
          className="absolute top-1/2 z-30 -translate-y-1/2 -translate-x-1/2 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="w-11 h-11 rounded-full bg-white shadow-2xl border border-gray-100 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M8 6L2 12L8 18" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 6L22 12L16 18" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* BEFORE label — right side */}
        <div className="absolute top-3 right-3 z-10 pointer-events-none">
          <span className="text-[10px] font-black uppercase tracking-widest bg-black/70 text-white px-2.5 py-1 rounded backdrop-blur-sm">
            BEFORE
          </span>
        </div>

        {/* AFTER label — left side, orange = Vicksburg brand */}
        <div className="absolute top-3 left-3 z-10 pointer-events-none">
          <span className="text-[10px] font-black uppercase tracking-widest bg-vicksburg text-white px-2.5 py-1 rounded">
            AFTER
          </span>
        </div>

        {/* Category badge */}
        {category && (
          <div className="absolute bottom-3 right-3 z-10 pointer-events-none">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-white/90 text-gray-700 px-2.5 py-1 rounded">
              {category}
            </span>
          </div>
        )}
      </div>

      {/* Card footer */}
      {label && (
        <div className="bg-white px-4 py-3 border-t border-gray-100">
          <p className="font-bold text-black text-sm">{label}</p>
          <p className="text-xs text-gray-400 mt-0.5">← Drag to reveal →</p>
        </div>
      )}
    </div>
  );
};
