import { Card } from "./ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const yatras = [
  {
    id: "adi-kailash",
    title: "Adi Kailash & Om Parvat",
    image: "https://images.unsplash.com/photo-1600476020549-7291c53b0f0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGklMjBrYWlsYXNoJTIwbW91bnRhaW4lMjBzbm93JTIwcGVha3xlbnwxfHx8fDE3ODExOTU3NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "kainchi-dham",
    title: "Kainchi Dham Retreat",
    image: "https://images.unsplash.com/photo-1706790574525-d218c4c52b5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyJTIwZGhhbSUyMHlhdHJhJTIwaW5kaWElMjB0ZW1wbGV8ZW58MXx8fHwxNzgxMTk1Nzc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "kinner-kailash",
    title: "Kinner Kailash Trek",
    image: "https://images.unsplash.com/photo-1767714727834-a7ec5373355a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbSUyMHBhcnZhdCUyMGhpbWFsYXlhJTIwc2FjcmVkJTIwbW91bnRhaW58ZW58MXx8fHwxNzgxMTk1Nzc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "manimahesh-kailash",
    title: "Manimahesh Kailash Yatra",
    image: "https://images.unsplash.com/photo-1712733900711-d0b929d0d7cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZWRhcm5hdGglMjB0ZW1wbGUlMjB1dHRhcmFraGFuZCUyMHBpbGdyaW1hZ2V8ZW58MXx8fHwxNzgxMTk1Nzc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "srikhand-kailash-chandigarh",
    title: "Srikhand Kailash Yatra",
    image: "https://images.unsplash.com/photo-1601821139314-66a4d14cfc00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWRyaW5hdGglMjB0ZW1wbGUlMjBpbmRpYSUyMHBpbGdyaW1hZ2V8ZW58MXx8fHwxNzgxMTk1NzgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
          <div className="w-20 h-1 bg-[var(--sky-blue)] mx-auto mb-4"></div>
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
