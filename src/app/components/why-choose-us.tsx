import { Shield, Award, DollarSign, Heart, Users2 } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Safe Hands",
    description: "Your safety is our priority with experienced guides and medical support throughout the journey.",
  },
  {
    icon: Award,
    title: "Trusted Experience",
    description: "Over 15 years of expertise in organizing seamless pilgrimages to Himalayan destinations.",
  },
  {
    icon: DollarSign,
    title: "No Hidden Charges",
    description: "Complete transparency in pricing with all inclusions clearly mentioned upfront.",
  },
  {
    icon: Heart,
    title: "Comfort First",
    description: "Premium accommodations, quality meals, and modern amenities for a comfortable pilgrimage.",
  },
  {
    icon: Users2,
    title: "Trusted by Thousands",
    description: "Join 5000+ satisfied pilgrims who have completed their spiritual journey with us.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl mb-4 text-[var(--navy)]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Why Choose Us
          </h2>
          <div className="w-20 h-1 bg-[var(--sky-blue)] mx-auto mb-4"></div>
          <p 
            className="text-lg text-[var(--charcoal)] max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Your peace of mind and spiritual fulfillment are at the heart of everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-all duration-300"
                style={{ background: 'rgba(63,169,245,0.1)' }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#3FA9F5'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(63,169,245,0.1)'}
              >
                <feature.icon className="w-10 h-10 text-[var(--sky-blue)] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 
                className="text-xl mb-3 text-[var(--navy)]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {feature.title}
              </h3>
              <p 
                className="text-[var(--charcoal)] leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
