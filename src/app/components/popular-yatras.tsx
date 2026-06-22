import { Card } from "./ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const yatras = [
  {
    id: "adi-kailash",
    title: "Adi Kailash & Om Parvat",
    image: "/images/adi-kailash.jpg",
  },
  {
    id: "kainchi-dham",
    title: "Kainchi Dham Retreat",
    image: "/images/kainchi-dham.jpg",
  },
  {
    id: "kinner-kailash",
    title: "Kinner Kailash Trek",
    image: "/images/kinner-kailash.jpg",
  },
  {
    id: "manimahesh-kailash",
    title: "Manimahesh Kailash Yatra",
    image: "/images/manimahesh.jpg",
  },
  {
    id: "srikhand-kailash-chandigarh",
    title: "Srikhand Kailash Yatra",
    image: "/images/shrikhand-1.jpg",
  },
];

export function PopularYatras() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl mb-4 text-[var(--navy)]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Popular Yatras
          </h2>
          <div className="w-20 h-1 bg-[var(--sky-blue)] mx-auto mb-8"></div>
          <div className="mb-10 inline-block bg-[var(--sky-blue)]/5 px-8 py-3 rounded-full border border-[var(--sky-blue)]/20 shadow-sm">
            <div className="text-[var(--sky-blue)] font-medium text-lg md:text-xl tracking-wide">
              ॥ मार्गदर्शकः सर्वभूतानां शिवः ॥
            </div>
          </div>
          <p 
            className="text-lg text-[var(--charcoal)] max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Explore our most sought-after pilgrimage journeys to sacred Himalayan destinations
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-6 min-w-max md:grid md:grid-cols-3 lg:grid-cols-5 md:min-w-0">
            {yatras.map((yatra) => (
              <Link key={yatra.id} to={`/package/${yatra.id}`}>
                <Card
                  className="group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[var(--sky-blue)] w-64 md:w-auto"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={yatra.image}
                      alt={yatra.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 
                        className="text-white mb-2"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {yatra.title}
                      </h3>
                      <div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Explore</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
