import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {
  Calendar,
  Mountain,
  ArrowRight,
  Filter,
} from "lucide-react";
import { Link } from "react-router";
import { packages } from "./package-data";
import { useState } from "react";

const CATEGORIES = ["All", "Adi Kailash", "Kainchi Dham", "Kinner Kailash", "Manimahesh", "Srikhand Kailash"];

const DIFFICULTY_COLORS: Record<string, { bg: string; text: string; dot: string }> = {
  Easy:                   { bg: "rgba(34,197,94,0.1)",  text: "#15803d", dot: "#22c55e" },
  "Moderate to Difficult":{ bg: "rgba(245,158,11,0.1)", text: "#b45309", dot: "#f59e0b" },
  Difficult:              { bg: "rgba(239,68,68,0.1)",  text: "#b91c1c", dot: "#ef4444" },
  "Very Difficult":       { bg: "rgba(239,68,68,0.15)", text: "#991b1b", dot: "#dc2626" },
};

export function TourPackages() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? packages
      : packages.filter((p) => p.category === activeCategory);

  /* Group Adi Kailash by nights so they render sorted */
  const sorted =
    activeCategory === "Adi Kailash"
      ? [...filtered].sort((a, b) => (a.nights ?? 0) - (b.nights ?? 0))
      : filtered;

  const dc = (difficulty: string) =>
    DIFFICULTY_COLORS[difficulty] ?? DIFFICULTY_COLORS["Difficult"];

  return (
    <section id="packages" className="py-20 bg-[var(--off-white)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl mb-4 text-[var(--navy)]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Tour Packages
          </h2>
          <div className="w-20 h-1 bg-[var(--sky-blue)] mx-auto mb-8"></div>
          <div className="mb-10 inline-block bg-white px-8 py-4 rounded-xl shadow-[0_4px_20px_rgba(102,191,255,0.15)] border border-[var(--sky-blue)]/20 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--off-white)] px-3 text-[var(--sky-blue)]">
              <svg className="w-6 h-6 opacity-60" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <div className="text-[var(--sky-blue)] font-medium text-lg md:text-xl tracking-wide">
              ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् ।
            </div>
          </div>
          <p
            className="text-lg text-[var(--charcoal)] max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Carefully curated pilgrimage packages designed for comfort, safety, and spiritual fulfillment
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-4 h-4 text-[var(--charcoal)]/50" />
            <span className="text-sm text-[var(--charcoal)]/50 font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
              Filter by Destination
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => {
              const count =
                cat === "All"
                  ? packages.length
                  : packages.filter((p) => p.category === cat).length;
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    background: isActive
                      ? "linear-gradient(135deg, #3FA9F5 0%, #1a7fd4 100%)"
                      : "white",
                    color: isActive ? "white" : "var(--charcoal)",
                    border: isActive ? "none" : "1.5px solid #e5e7eb",
                    boxShadow: isActive
                      ? "0 4px 14px rgba(63,169,245,0.35)"
                      : "0 1px 3px rgba(0,0,0,0.06)",
                  }}
                >
                  {cat}
                  <span
                    className="text-xs px-1.5 py-0.5 rounded-full"
                    style={{
                      background: isActive ? "rgba(255,255,255,0.25)" : "rgba(63,169,245,0.1)",
                      color: isActive ? "white" : "#3FA9F5",
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Adi Kailash duration guide banner */}
        {activeCategory === "Adi Kailash" && (
          <div
            className="mb-8 p-4 rounded-2xl flex flex-wrap gap-3 items-center"
            style={{
              background: "linear-gradient(135deg, rgba(63,169,245,0.06), rgba(63,169,245,0.12))",
              border: "1px solid rgba(63,169,245,0.2)",
            }}
          >
            <span className="text-sm font-semibold text-[var(--navy)]" style={{ fontFamily: "Inter, sans-serif" }}>
              🕉 Adi Kailash packages sorted by duration — choose what suits your schedule:
            </span>
            {[
              { label: "Quick (2N3D)", desc: "Dharchula base" },
              { label: "Standard (5N6D)", desc: "Delhi/Kathgodam" },
              { label: "Complete (6N7D)", desc: "With Narayan Ashram" },
              { label: "Extended (7N–9N10D)", desc: "Panchachuli & beyond" },
            ].map((item) => (
              <span
                key={item.label}
                className="text-xs px-3 py-1.5 rounded-full font-medium text-[var(--navy)]"
                style={{
                  background: "white",
                  border: "1px solid rgba(63,169,245,0.25)",
                }}
              >
                <strong>{item.label}</strong> — {item.desc}
              </span>
            ))}
          </div>
        )}

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {sorted.map((pkg) => {
            const diff = dc(pkg.difficulty);
            return (
              <Card
                key={pkg.id}
                className="group overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[var(--sky-blue)] bg-white"
                style={{ transition: "box-shadow 0.3s, border-color 0.3s, transform 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Difficulty badge */}
                  <div
                    className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1.5"
                    style={{ background: diff.bg, color: diff.text, backdropFilter: "blur(8px)" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full inline-block"
                      style={{ background: diff.dot }}
                    />
                    {pkg.difficulty}
                  </div>

                  {/* Duration badge on image bottom-left */}
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold border border-white/30">
                      {pkg.duration}
                    </span>
                  </div>
                </div>

                <CardContent className="p-5">
                  {/* Category tag */}
                  <div className="mb-2">
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full"
                      style={{
                        background: "rgba(63,169,245,0.1)",
                        color: "#1a7fd4",
                      }}
                    >
                      {pkg.category}
                    </span>
                  </div>

                  <h3
                    className="text-lg mb-1 text-[var(--navy)] leading-snug"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-[var(--charcoal)]/60 mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
                    {pkg.subtitle}
                  </p>

                  {/* Quick stats row */}
                  <div
                    className="flex flex-wrap gap-x-4 gap-y-1.5 mb-4 pb-4 text-xs text-[var(--charcoal)]"
                    style={{ borderBottom: "1px solid #f1f5f9", fontFamily: "Inter, sans-serif" }}
                  >
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[var(--sky-blue)]" />
                      <span>{pkg.duration}</span>
                    </div>
                    {pkg.maxAltitude && (
                      <div className="flex items-center gap-1">
                        <Mountain className="w-3.5 h-3.5 text-[var(--sky-blue)]" />
                        <span>{pkg.maxAltitude}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1 text-[var(--charcoal)]/50">
                      <span>📍</span>
                      <span>{pkg.startPoint}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-5" style={{ fontFamily: "Inter, sans-serif" }}>
                    {pkg.highlights.slice(0, 3).map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[var(--charcoal)]">
                        <span className="w-4 h-4 rounded-full bg-[var(--sky-blue)]/10 text-[var(--sky-blue)] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">
                          ✓
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Footer row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs text-[var(--charcoal)]/50" style={{ fontFamily: "Inter, sans-serif" }}>
                      {pkg.startPoint} → {pkg.endPoint}
                    </div>
                    {pkg.price && (
                      <div className="text-right">
                        <span className="text-base font-bold text-[var(--navy)]">{pkg.price}</span>
                        <span className="text-xs text-[var(--charcoal)]/50 ml-1">/person</span>
                      </div>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2">
                    <Link to={`/package/${pkg.id}`} className="flex-1">
                      <Button
                        variant="outline"
                        className="w-full border-[var(--sky-blue)] text-[var(--sky-blue)] hover:bg-[var(--sky-blue)] hover:text-white rounded-xl transition-all group/btn text-sm"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        View Itinerary
                        <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link to={`/package/${pkg.id}#contact-form`} className="flex-1">
                      <Button
                        className="w-full bg-[var(--sky-blue)] hover:bg-[var(--sky-blue-light)] text-white rounded-xl transition-all text-sm"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Count footer */}
        <p className="text-center text-sm text-[var(--charcoal)]/40 mt-8" style={{ fontFamily: "Inter, sans-serif" }}>
          Showing {sorted.length} of {packages.length} packages
          {activeCategory !== "All" && ` · ${activeCategory}`}
        </p>
      </div>
    </section>
  );
}
