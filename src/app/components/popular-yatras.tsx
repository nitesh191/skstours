import { Card } from "./ui/card";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router";

const yatras = [
  {
    id: "adi-kailash-2n3d-dharchula",
    title: "Adi Kailash Express",
    subtitle: "2N / 3D • Dharchula",
    image: "/images/adi-kailash-express.jpg",
    badge: "Quick Yatra",
    badgeColor: "#22c55e",
  },
  {
    id: "adi-kailash",
    title: "Adi Kailash & Om Parvat",
    subtitle: "5N / 6D • Delhi",
    image: "/images/adi-kailash-main.jpg",
    badge: "Popular",
    badgeColor: "#3FA9F5",
  },
  {
    id: "adi-kailash-5n6d-kathgodam",
    title: "Adi Kailash Yatra",
    subtitle: "5N / 6D • Kathgodam",
    image: "/images/adi-kailash-kathgodam.jpg",
    badge: "Kumaon",
    badgeColor: "#f59e0b",
  },
  {
    id: "adi-kailash-6n7d-delhi",
    title: "Adi Kailash Complete",
    subtitle: "6N / 7D • Delhi",
    image: "/images/adi-kailash-6n7d.jpg",
    badge: "Best Value",
    badgeColor: "#8b5cf6",
  },
  {
    id: "adi-kailash-7n8d-delhi-munsiyari",
    title: "Adi Kailash & Munsiyari",
    subtitle: "7N / 8D • Delhi",
    image: "/images/adi-kailash-munsiyari.jpg",
    badge: "With Munsiyari",
    badgeColor: "#06b6d4",
  },
  {
    id: "adi-kailash-8n9d-delhi-panchachuli",
    title: "Adi Kailash & Panchachuli",
    subtitle: "8N / 9D • Delhi",
    image: "/images/adi-kailash-panchachuli.jpg",
    badge: "Extended",
    badgeColor: "#ef4444",
  },
  {
    id: "adi-kailash-9n10d-delhi-extended",
    title: "Grand Adi Kailash Yatra",
    subtitle: "9N / 10D • Delhi",
    image: "/images/adi-kailash-grand.jpg",
    badge: "Grand Tour",
    badgeColor: "#1E3A5F",
  },
  {
    id: "kainchi-dham",
    title: "Kainchi Dham Retreat",
    subtitle: "2N / 3D • Delhi",
    image: "/images/kainchi-dham.jpg",
    badge: "Easy Trip",
    badgeColor: "#22c55e",
  },
  {
    id: "kinner-kailash",
    title: "Kinner Kailash Trek",
    subtitle: "4 Days • Shimla",
    image: "/images/kinner-kailash.jpg",
    badge: "Trek",
    badgeColor: "#f97316",
  },
  {
    id: "manimahesh-kailash",
    title: "Manimahesh Kailash",
    subtitle: "6N / 7D • Pathankot",
    image: "/images/manimahesh.jpg",
    badge: "Spiritual",
    badgeColor: "#ec4899",
  },
  {
    id: "srikhand-kailash-chandigarh",
    title: "Srikhand Mahadev",
    subtitle: "6N / 7D • Chandigarh",
    image: "/images/shrikhand-1.jpg",
    badge: "Extreme Trek",
    badgeColor: "#dc2626",
  },
];

export function PopularYatras() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl mb-4 text-[var(--navy)]"
            style={{ fontFamily: "Playfair Display, serif" }}
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
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Explore our most sought-after pilgrimage journeys to sacred Himalayan destinations
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-6 min-w-max">
            {yatras.map((yatra) => (
              <Link key={yatra.id} to={`/package/${yatra.id}`}>
                <Card className="group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[var(--sky-blue)] w-60">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={yatra.image}
                      alt={yatra.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                    {/* Badge */}
                    <div
                      className="absolute top-3 left-3 px-2 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-wide"
                      style={{ background: yatra.badgeColor }}
                    >
                      {yatra.badge}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3
                        className="text-white text-base font-semibold leading-tight mb-1"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        {yatra.title}
                      </h3>
                      <div className="flex items-center gap-1 text-white/70 text-xs mb-2">
                        <Clock className="w-3 h-3" />
                        <span>{yatra.subtitle}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-sm font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
                          View Details
                        </span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* See All Packages Link */}
        <div className="text-center mt-8">
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 text-[var(--sky-blue)] font-semibold hover:gap-3 transition-all duration-200"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            View All Packages
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
