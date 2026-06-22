import { Button } from "./ui/button";
import { Shield, Map, Heart, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/adi-kailash.jpg"
          alt="Kedarnath Temple with Himalayan Mountains"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark gradient overlay — bottom heavy so mountains stay visible */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(10,20,40,0.55) 0%, rgba(10,20,40,0.70) 45%, rgba(10,20,40,0.88) 100%)'
        }} />
        {/* Subtle blue tint overlay */}
        <div className="absolute inset-0" style={{ background: 'rgba(30,58,95,0.18)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center gap-4 mb-8">
          {/* Shloka Card */}
          <div className="inline-block bg-black/25 backdrop-blur-md border border-white/15 rounded-2xl px-6 py-3 shadow-2xl transition-transform hover:scale-105">
            <div className="text-[#66BFFF] text-lg sm:text-xl font-medium tracking-wider drop-shadow-md" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
              ॐ कर्पूरगौरं करुणावतारं संसारसारं भुजगेन्द्रहारम् ।
            </div>
          </div>

          {/* Tagline pill */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#66BFFF] inline-block"></span>
            Sacred Himalayan Pilgrimages Since 2008
          </div>
        </div>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 text-white leading-tight drop-shadow-lg"
          style={{ fontFamily: 'Playfair Display, serif', textShadow: '0 2px 24px rgba(0,0,0,0.5)' }}
        >
          Journey to the
          <br />
          <span style={{ color: '#66BFFF' }}>Abode of Shiva</span>
        </h1>

        <p
          className="text-lg sm:text-xl md:text-2xl mb-10 text-white/85 max-w-2xl mx-auto leading-relaxed drop-shadow"
          style={{ fontFamily: 'Inter, sans-serif', textShadow: '0 1px 8px rgba(0,0,0,0.4)' }}
        >
          Embark on a sacred pilgrimage to Kailash Mansarovar, Kedarnath &amp; Char Dham —
          guided by experts, blessed by the Himalayas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <Button
            className="text-white px-10 py-6 rounded-xl shadow-2xl transition-all hover:scale-105"
            style={{
              fontFamily: 'Inter, sans-serif',
              background: 'linear-gradient(135deg, #66BFFF 0%, #1a7fd4 100%)',
              boxShadow: '0 8px 32px rgba(63,169,245,0.45)'
            }}
          >
            Book Your Yatra Now
          </Button>
          <Button
            variant="outline"
            className="px-10 py-6 rounded-xl backdrop-blur-sm transition-all hover:scale-105"
            style={{
              fontFamily: 'Inter, sans-serif',
              background: 'transparent',
              border: '1.5px solid rgba(255,255,255,0.55)',
              color: '#ffffff',
            }}
          >
            Explore Packages
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {[
            { icon: Shield, label: 'Govt. Approved' },
            { icon: Map, label: 'Expert Local Guides' },
            { icon: Heart, label: 'Safe & Comfortable Travel' },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full backdrop-blur-md border border-white/20"
              style={{ background: 'rgba(255,255,255,0.10)' }}
            >
              <Icon className="w-4 h-4" style={{ color: '#66BFFF' }} />
              <span className="text-sm text-white font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-7 h-7 text-white/60" />
      </div>
    </section>
  );
}
