import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  duration: number; // seconds
}

interface Props {
  videos: Video[];
  heading?: string;
  subheading?: string;
}

export const VideoCarousel = ({ videos, heading, subheading }: Props) => {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive(i => (i === videos.length - 1 ? 0 : i + 1));
  }, [videos.length]);

  const prev = () => setActive(i => (i === 0 ? videos.length - 1 : i - 1));

  // Auto-advance when the current video's duration elapses
  const currentDuration = videos[active].duration;
  useEffect(() => {
    const timer = setTimeout(next, currentDuration * 1000);
    return () => clearTimeout(timer);
  }, [active, currentDuration, next]);

  const current = videos[active];

  return (
    <div className="max-w-4xl mx-auto">
      {heading && (
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-black">{heading}</h2>
          {subheading && <p className="text-gray-500 mt-3 max-w-xl mx-auto">{subheading}</p>}
        </div>
      )}

      {/* Player — autoplay muted */}
      <div className="relative rounded-xl overflow-hidden shadow-xl bg-black aspect-video">
        <iframe
          key={current.id}
          src={`https://www.youtube.com/embed/${current.id}?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1`}
          title={current.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />

        <button onClick={prev} aria-label="Previous video"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors backdrop-blur-sm cursor-pointer">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button onClick={next} aria-label="Next video"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors backdrop-blur-sm cursor-pointer">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="font-bold text-black text-sm truncate pr-4">{current.title}</p>
        <span className="text-xs text-gray-400 shrink-0">{active + 1} / {videos.length}</span>
      </div>

      <div className="mt-4 flex gap-2 overflow-x-auto no-scrollbar pb-1 justify-center">
        {videos.map((v, i) => (
          <button
            key={v.id}
            onClick={() => setActive(i)}
            className={`shrink-0 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
              i === active ? 'border-vicksburg scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
            }`}
          >
            <img
              src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
              alt={v.title}
              className="w-28 h-16 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
