import { CheckCircle2 } from "lucide-react";

export function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/about-sks-tours.png"
                alt="SKR Tours Guide with Pilgrims"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[var(--sky-blue)] opacity-10 rounded-full blur-3xl"></div>
          </div>

          {/* Content Side */}
          <div>
            <div className="mb-6">
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl mb-3 text-[var(--navy)]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                About SKR Tours
              </h2>
              <div className="w-20 h-1 bg-[var(--sky-blue)]"></div>
              <div className="mt-6 mb-4 bg-gradient-to-r from-[var(--sky-blue)]/10 to-transparent border-l-4 border-[var(--sky-blue)] p-4 rounded-r-lg shadow-sm">
                <p className="text-[var(--sky-blue)] font-medium text-lg leading-relaxed">
                  "अस्त्युत्तरस्यां दिशि देवतात्मा हिमालयो नाम नगाधिराजः ।"
                </p>
              </div>
            </div>

            <p 
              className="text-lg text-[var(--charcoal)] mb-6 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              With deep expertise in Himalayan routes, SKR Tours has been guiding pilgrims on their sacred journey 
              to the most revered sites in the Himalayas. We believe that every pilgrimage is not 
              just a trip, but a transformative spiritual experience.
            </p>

            <p 
              className="text-lg text-[var(--charcoal)] mb-8 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Our team of experienced guides, comfortable accommodations, and unwavering commitment 
              to safety ensure that your focus remains on the divine connection you seek, while we 
              handle every detail of your journey.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Government-approved and certified tour operator",
                "Experienced guides with deep spiritual knowledge",
                "Comfortable and safe travel arrangements",
                "24/7 support throughout your pilgrimage",
                "Transparent pricing with no hidden charges",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--sky-blue)] flex-shrink-0 mt-1" />
                  <span className="text-[var(--charcoal)]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
