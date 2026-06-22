import { useState, useRef } from "react";
import { Play, Pause, ChevronLeft, ChevronRight, Video } from "lucide-react";

const videoTestimonials = [
  { id: 1, src: "/videos/testimonials/testimonial-1.mp4", title: "Pilgrim Experience", location: "Himalayan Yatra" },
  { id: 2, src: "/videos/testimonials/testimonial-2.mp4", title: "Spiritual Journey", location: "Sacred Trek" },
  { id: 3, src: "/videos/testimonials/testimonial-3.mp4", title: "Memorable Trek", location: "Mountain Pilgrimage" },
  { id: 4, src: "/videos/testimonials/testimonial-4.mp4", title: "Divine Experience", location: "Kailash Region" },
  { id: 5, src: "/videos/testimonials/testimonial-5.mp4", title: "Blessed Journey", location: "Holy Darshan" },
  { id: 6, src: "/videos/testimonials/testimonial-6.mp4", title: "Soulful Yatra", location: "Sacred Path" },
  { id: 7, src: "/videos/testimonials/testimonial-7.mp4", title: "Heartfelt Review", location: "Pilgrim Trail" },
  { id: 8, src: "/videos/testimonials/testimonial-8.mp4", title: "Journey of Faith", location: "Devbhoomi" },
  { id: 9, src: "/videos/testimonials/testimonial-9.mp4", title: "Sacred Memories", location: "Holy Himalayas" },
];

function VideoCard({ video }: { video: typeof videoTestimonials[0] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div
      className="group relative flex-shrink-0 w-[280px] sm:w-[300px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
      style={{
        background: 'linear-gradient(145deg, #0f1c2e 0%, #1a3050 100%)',
        border: '1px solid rgba(102, 191, 255, 0.15)',
      }}
    >
      {/* Video Container */}
      <div className="relative aspect-[9/14] overflow-hidden cursor-pointer" onClick={togglePlay}>
        <video
          ref={videoRef}
          src={video.src}
          className="w-full h-full object-cover"
          playsInline
          preload="metadata"
          onEnded={() => setIsPlaying(false)}
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: isPlaying
              ? 'transparent'
              : 'linear-gradient(to top, rgba(10,20,40,0.85) 0%, rgba(10,20,40,0.2) 40%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Play / Pause button */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
          }`}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md transition-transform duration-300 hover:scale-110"
            style={{
              background: isPlaying
                ? 'rgba(255,255,255,0.15)'
                : 'linear-gradient(135deg, #66BFFF 0%, #1a7fd4 100%)',
              boxShadow: isPlaying ? 'none' : '0 4px 24px rgba(102,191,255,0.4)',
            }}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-white" />
            ) : (
              <Play className="w-7 h-7 text-white ml-1" />
            )}
          </div>
        </div>

        {/* Video badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1">
          <Video className="w-3.5 h-3.5 text-[#66BFFF]" />
          <span className="text-white/90 text-xs font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
            Video
          </span>
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-4">
        <h4
          className="text-white font-semibold text-base mb-1"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {video.title}
        </h4>
        <p
          className="text-white/50 text-sm"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {video.location}
        </p>
      </div>
    </div>
  );
}

export function VideoTestimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 320;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="py-20 overflow-hidden" style={{ background: 'linear-gradient(180deg, #0a1428 0%, #0f1c2e 50%, #0a1428 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl mb-4 text-white"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Pilgrim{' '}
            <span style={{ color: '#66BFFF' }}>Video Diaries</span>
          </h2>
          <div className="w-20 h-1 bg-[#66BFFF] mx-auto mb-4"></div>
          <p
            className="text-lg text-white/70 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Real stories from real pilgrims — watch their journeys come alive
          </p>
        </div>

        {/* Scroll Controls */}
        <div className="flex justify-end gap-3 mb-6">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: 'rgba(102,191,255,0.1)',
              border: '1px solid rgba(102,191,255,0.3)',
            }}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-[#66BFFF]" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: 'rgba(102,191,255,0.1)',
              border: '1px solid rgba(102,191,255,0.3)',
            }}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-[#66BFFF]" />
          </button>
        </div>

        {/* Horizontal scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {videoTestimonials.map((video) => (
            <div key={video.id} className="snap-start">
              <VideoCard video={video} />
            </div>
          ))}
        </div>

        {/* Scroll indicator dots */}
        <div className="flex justify-center gap-1.5 mt-8">
          {videoTestimonials.map((_, idx) => (
            <div
              key={idx}
              className="w-2 h-2 rounded-full transition-all"
              style={{
                background: idx < 3 ? '#66BFFF' : 'rgba(102,191,255,0.25)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
