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
                src="https://images.unsplash.com/photo-1763480005793-501a0cbe1ac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YW4lMjB2YWxsZXklMjBsYW5kc2NhcGUlMjB0cmVra2luZ3xlbnwxfHx8fDE3ODExOTU3NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Himalayan Valley"
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
                About Himalayan Yatra
              </h2>
              <div className="w-20 h-1 bg-[var(--sky-blue)]"></div>
            </div>

            <p 
              className="text-lg text-[var(--charcoal)] mb-6 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              For over 15 years, Himalayan Yatra has been guiding pilgrims on their sacred journey 
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

            <div className="flex gap-4">
              <div className="text-center">
                <div 
                  className="text-4xl mb-2 text-[var(--sky-blue)]"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  15+
                </div>
                <div className="text-sm text-[var(--charcoal)]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Years of Service
                </div>
              </div>
              <div className="w-px bg-gray-300"></div>
              <div className="text-center">
                <div 
                  className="text-4xl mb-2 text-[var(--sky-blue)]"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  5000+
                </div>
                <div className="text-sm text-[var(--charcoal)]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Happy Pilgrims
                </div>
              </div>
              <div className="w-px bg-gray-300"></div>
              <div className="text-center">
                <div 
                  className="text-4xl mb-2 text-[var(--sky-blue)]"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  50+
                </div>
                <div className="text-sm text-[var(--charcoal)]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Yatra Packages
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
