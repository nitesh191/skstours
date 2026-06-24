import { useState } from "react";
import { useParams, Link } from "react-router";
import { packages } from "./package-data";
import { Button } from "./ui/button";
import {
  ArrowLeft,
  Calendar,
  Users,
  Mountain,
  MapPin,
  Timer,
  ChevronDown,
  ChevronUp,
  Check,
  X,
  Star,
  Compass,
  Footprints,
  Phone,
  MessageCircle,
  Sun,
  Tent,
  Route,
} from "lucide-react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export function PackageDetail() {
  const { packageId } = useParams();
  const pkg = packages.find((p) => p.id === packageId);
  const [expandedDay, setExpandedDay] = useState<number | null>(0);
  const [bookingForm, setBookingForm] = useState({
    name: "",
    phone: "",
    travelers: "",
    date: "",
    message: "",
  });

  const handleBookingSubmit = () => {
    if (!bookingForm.name || !bookingForm.phone) {
      alert("Please fill in your name and phone number.");
      return;
    }
    const lines = [
      `🙏 *New Yatra Booking Enquiry*`,
      ``,
      `📦 *Package:* ${pkg?.title}`,
      `⏱ *Duration:* ${pkg?.duration}`,
      `🗺 *Route:* ${pkg?.startPoint} → ${pkg?.endPoint}`,
      ``,
      `👤 *Name:* ${bookingForm.name}`,
      `📞 *Phone:* ${bookingForm.phone}`,
      bookingForm.travelers ? `👥 *Travelers:* ${bookingForm.travelers}` : "",
      bookingForm.date ? `📅 *Preferred Date:* ${bookingForm.date}` : "",
      bookingForm.message ? `💬 *Message:* ${bookingForm.message}` : "",
      ``,
      `_Sent from SKR Tours Website_`,
    ].filter(Boolean).join("%0A");
    window.open(`https://wa.me/919873564471?text=${lines}`, "_blank");
  };

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ fontFamily: "Inter, sans-serif" }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[var(--navy)] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
            Package Not Found
          </h1>
          <p className="text-[var(--charcoal)] mb-8">The tour package you're looking for doesn't exist.</p>
          <Link to="/">
            <Button className="bg-[var(--sky-blue)] hover:bg-[var(--sky-blue-light)] text-white rounded-lg px-6 py-3">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ fontFamily: "Inter, sans-serif" }}>
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={pkg.heroImage}
            alt={pkg.title}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(10,20,40,0.3) 0%, rgba(10,20,40,0.6) 50%, rgba(10,20,40,0.92) 100%)",
            }}
          />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Packages
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase"
              style={{
                background: pkg.difficulty === "Easy"
                  ? "rgba(34,197,94,0.25)"
                  : pkg.difficulty === "Moderate to Difficult"
                  ? "rgba(245,158,11,0.25)"
                  : "rgba(239,68,68,0.25)",
                color: pkg.difficulty === "Easy"
                  ? "#4ade80"
                  : pkg.difficulty === "Moderate to Difficult"
                  ? "#fbbf24"
                  : "#f87171",
                backdropFilter: "blur(8px)",
              }}
            >
              {pkg.difficulty}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-xs font-medium border border-white/20">
              {pkg.duration}
            </span>
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl text-white mb-3 leading-tight"
            style={{ fontFamily: "Playfair Display, serif", textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
          >
            {pkg.title}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">{pkg.subtitle}</p>
        </div>
      </section>

      {/* Quick Info Strip */}
      <section className="bg-white border-b border-gray-100 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-6 py-4 overflow-x-auto">
            <div className="flex items-center gap-2 text-sm text-[var(--charcoal)] whitespace-nowrap">
              <Calendar className="w-4 h-4 text-[var(--sky-blue)]" />
              <span>{pkg.duration}</span>
            </div>
            {pkg.maxAltitude && (
              <div className="flex items-center gap-2 text-sm text-[var(--charcoal)] whitespace-nowrap">
                <Mountain className="w-4 h-4 text-[var(--sky-blue)]" />
                <span>Max: {pkg.maxAltitude}</span>
              </div>
            )}
            <div className="flex items-center gap-2 text-sm text-[var(--charcoal)] whitespace-nowrap">
              <MapPin className="w-4 h-4 text-[var(--sky-blue)]" />
              <span>{pkg.startPoint} → {pkg.endPoint}</span>
            </div>
            {pkg.distance && (
              <div className="flex items-center gap-2 text-sm text-[var(--charcoal)] whitespace-nowrap">
                <Route className="w-4 h-4 text-[var(--sky-blue)]" />
                <span>{pkg.distance}</span>
              </div>
            )}
            <div className="flex items-center gap-2 text-sm text-[var(--charcoal)] whitespace-nowrap">
              <Sun className="w-4 h-4 text-[var(--sky-blue)]" />
              <span>{pkg.bestSeason}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[var(--charcoal)] whitespace-nowrap">
              <Users className="w-4 h-4 text-[var(--sky-blue)]" />
              <span>{pkg.groupSize}</span>
            </div>
            <div className="ml-auto hidden md:block">
              <a href="#contact-form">
                <Button
                  className="bg-[var(--sky-blue)] hover:bg-[var(--sky-blue-light)] text-white rounded-lg px-6 transition-all hover:scale-105"
                  style={{ boxShadow: "0 4px 16px rgba(63,169,245,0.3)" }}
                >
                  Book Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column — Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2
                className="text-2xl sm:text-3xl text-[var(--navy)] mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Overview
              </h2>
              <div className="w-16 h-1 bg-[var(--sky-blue)] mb-6"></div>
              <p className="text-[var(--charcoal)] leading-relaxed text-base">{pkg.overview}</p>

              {/* Highlights Grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pkg.highlights.map((highlight, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-xl transition-all hover:bg-[#f0f7ff]"
                    style={{ background: "linear-gradient(135deg, rgba(63,169,245,0.04), rgba(63,169,245,0.08))" }}
                  >
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "rgba(63,169,245,0.15)" }}
                    >
                      <Star className="w-3.5 h-3.5 text-[var(--sky-blue)]" />
                    </div>
                    <span className="text-sm text-[var(--charcoal)] leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Spiritual Significance */}
            {pkg.spiritualSignificance && (
              <section>
                <h2
                  className="text-2xl sm:text-3xl text-[var(--navy)] mb-4"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  🕉 Spiritual Significance
                </h2>
                <div className="w-16 h-1 bg-[var(--sky-blue)] mb-6"></div>
                <div
                  className="p-6 rounded-2xl border border-amber-100"
                  style={{
                    background: "linear-gradient(135deg, rgba(245,158,11,0.04), rgba(245,158,11,0.08))",
                  }}
                >
                  <p className="text-[var(--charcoal)] leading-relaxed">{pkg.spiritualSignificance}</p>
                </div>
              </section>
            )}

            {/* Day-by-Day Itinerary */}
            <section>
              <h2
                className="text-2xl sm:text-3xl text-[var(--navy)] mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Day-by-Day Itinerary
              </h2>
              <div className="w-16 h-1 bg-[var(--sky-blue)] mb-6"></div>

              <div className="space-y-3">
                {pkg.itinerary.map((day, index) => {
                  const isExpanded = expandedDay === index;
                  return (
                    <div
                      key={day.day}
                      className="rounded-2xl overflow-hidden transition-all duration-300"
                      style={{
                        border: isExpanded ? "2px solid var(--sky-blue)" : "2px solid #e5e7eb",
                        boxShadow: isExpanded ? "0 8px 30px rgba(63,169,245,0.12)" : "none",
                      }}
                    >
                      <button
                        onClick={() => setExpandedDay(isExpanded ? null : index)}
                        className="w-full flex items-center gap-4 p-5 text-left hover:bg-gray-50/50 transition-colors"
                      >
                        {/* Day Number Circle */}
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm"
                          style={{
                            background: isExpanded
                              ? "linear-gradient(135deg, #66BFFF, #1a7fd4)"
                              : "linear-gradient(135deg, #f0f7ff, #e0efff)",
                            color: isExpanded ? "white" : "var(--sky-blue)",
                          }}
                        >
                          D{day.day}
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3
                            className="text-base font-semibold text-[var(--navy)] truncate"
                            style={{ fontFamily: "Playfair Display, serif" }}
                          >
                            Day {day.day}: {day.title}
                          </h3>
                          {day.meals && (
                            <p className="text-xs text-[var(--charcoal)]/60 mt-0.5">🍽 {day.meals}</p>
                          )}
                        </div>

                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-[var(--sky-blue)] flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        )}
                      </button>

                      {/* Expanded Content */}
                      <div
                        className="overflow-hidden transition-all duration-300"
                        style={{
                          maxHeight: isExpanded ? "600px" : "0px",
                          opacity: isExpanded ? 1 : 0,
                        }}
                      >
                        <div className="px-5 pb-5 pt-0">
                          <div className="ml-16 border-t border-gray-100 pt-4">
                            <p className="text-sm text-[var(--charcoal)] leading-relaxed mb-4">
                              {day.description}
                            </p>

                            <div className="flex flex-wrap gap-4 text-xs text-[var(--charcoal)]/70">
                              {day.overnight && (
                                <div className="flex items-center gap-1.5">
                                  <Tent className="w-3.5 h-3.5 text-[var(--sky-blue)]" />
                                  <span>Stay: {day.overnight}</span>
                                </div>
                              )}
                              {day.meals && (
                                <div className="flex items-center gap-1.5">
                                  <span>🍽</span>
                                  <span>{day.meals}</span>
                                </div>
                              )}
                            </div>

                            {day.highlights && day.highlights.length > 0 && (
                              <div className="mt-4 flex flex-wrap gap-2">
                                {day.highlights.map((h, i) => (
                                  <span
                                    key={i}
                                    className="px-3 py-1 rounded-full text-xs font-medium"
                                    style={{
                                      background: "linear-gradient(135deg, rgba(63,169,245,0.08), rgba(63,169,245,0.14))",
                                      color: "var(--navy)",
                                    }}
                                  >
                                    {h}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Inclusions & Exclusions */}
            <section>
              <h2
                className="text-2xl sm:text-3xl text-[var(--navy)] mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                What's Included & Excluded
              </h2>
              <div className="w-16 h-1 bg-[var(--sky-blue)] mb-6"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Inclusions */}
                <div
                  className="p-6 rounded-2xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(34,197,94,0.04), rgba(34,197,94,0.08))",
                    border: "1px solid rgba(34,197,94,0.15)",
                  }}
                >
                  <h3
                    className="text-lg font-semibold text-green-700 mb-4 flex items-center gap-2"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    Inclusions
                  </h3>
                  <div className="space-y-3">
                    {pkg.inclusions.map((inc, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <inc.icon className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[var(--charcoal)]">{inc.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Exclusions */}
                <div
                  className="p-6 rounded-2xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(239,68,68,0.04), rgba(239,68,68,0.08))",
                    border: "1px solid rgba(239,68,68,0.15)",
                  }}
                >
                  <h3
                    className="text-lg font-semibold text-red-700 mb-4 flex items-center gap-2"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center">
                      <X className="w-4 h-4 text-red-600" />
                    </div>
                    Exclusions
                  </h3>
                  <div className="space-y-3">
                    {pkg.exclusions.map((exc, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <X className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[var(--charcoal)]">{exc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Mandatory Items */}
            {pkg.mandatoryItems && pkg.mandatoryItems.length > 0 && (
              <section>
                <h2
                  className="text-2xl sm:text-3xl text-[var(--navy)] mb-4"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  📋 Mandatory Items to Carry
                </h2>
                <div className="w-16 h-1 bg-[var(--sky-blue)] mb-6"></div>
                <div
                  className="p-6 rounded-2xl grid grid-cols-2 sm:grid-cols-3 gap-3"
                  style={{
                    background: "linear-gradient(135deg, rgba(63,169,245,0.04), rgba(63,169,245,0.08))",
                    border: "1px solid rgba(63,169,245,0.15)",
                  }}
                >
                  {pkg.mandatoryItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[var(--sky-blue)] flex-shrink-0" />
                      <span className="text-xs text-[var(--charcoal)]">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-36 space-y-6">
              {/* Booking Card */}
              <div
                id="contact-form"
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "white",
                  boxShadow: "0 12px 48px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.04)",
                  border: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                {/* Header with gradient + WhatsApp badge */}
                <div
                  className="relative p-6 pb-7"
                  style={{
                    background: "linear-gradient(135deg, #1E3A5F 0%, #2a5285 60%, #3FA9F5 100%)",
                  }}
                >
                  {/* Decorative circles */}
                  <div
                    className="absolute top-0 right-0 w-24 h-24 rounded-full"
                    style={{ background: "rgba(255,255,255,0.04)", transform: "translate(30%, -30%)" }}
                  />
                  <div
                    className="absolute bottom-0 left-0 w-16 h-16 rounded-full"
                    style={{ background: "rgba(255,255,255,0.03)", transform: "translate(-20%, 40%)" }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ background: "rgba(37,211,102,0.2)" }}
                      >
                        <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-widest text-white/60">
                        Quick Booking
                      </span>
                    </div>
                    <h3
                      className="text-xl text-white mb-1"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      Book This Yatra
                    </h3>
                    <p className="text-white/60 text-sm">
                      Get instant confirmation on WhatsApp
                    </p>
                    {pkg.price && (
                      <div className="mt-4 flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-white" style={{ letterSpacing: "-0.02em" }}>
                          {pkg.price}
                        </span>
                        <span className="text-white/50 text-xs font-medium">/ person</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Form Body */}
                <div className="p-6 space-y-5">
                  {/* Name Field */}
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-semibold text-[var(--navy)] mb-2 uppercase tracking-wide">
                      <Users className="w-3.5 h-3.5 text-[var(--sky-blue)]" />
                      Full Name
                      <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200"
                      style={{
                        background: "#f8fafc",
                        border: "1.5px solid #e2e8f0",
                        outline: "none",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--sky-blue)";
                        e.target.style.boxShadow = "0 0 0 3px rgba(63,169,245,0.12)";
                        e.target.style.background = "#fff";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#e2e8f0";
                        e.target.style.boxShadow = "none";
                        e.target.style.background = "#f8fafc";
                      }}
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-semibold text-[var(--navy)] mb-2 uppercase tracking-wide">
                      <Phone className="w-3.5 h-3.5 text-[var(--sky-blue)]" />
                      Phone / WhatsApp
                      <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <span
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium text-[var(--charcoal)]/50 select-none"
                        style={{ pointerEvents: "none" }}
                      >
                        +91
                      </span>
                      <input
                        type="tel"
                        placeholder="98765 43210"
                        value={bookingForm.phone}
                        onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 rounded-xl text-sm transition-all duration-200"
                        style={{
                          background: "#f8fafc",
                          border: "1.5px solid #e2e8f0",
                          outline: "none",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "var(--sky-blue)";
                          e.target.style.boxShadow = "0 0 0 3px rgba(63,169,245,0.12)";
                          e.target.style.background = "#fff";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "#e2e8f0";
                          e.target.style.boxShadow = "none";
                          e.target.style.background = "#f8fafc";
                        }}
                      />
                    </div>
                  </div>

                  {/* Two-column row */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* Travelers */}
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-[var(--navy)] mb-2 uppercase tracking-wide">
                        <Users className="w-3.5 h-3.5 text-[var(--sky-blue)]" />
                        Travelers
                      </label>
                      <input
                        type="number"
                        min="1"
                        placeholder="e.g. 2"
                        value={bookingForm.travelers}
                        onChange={(e) => setBookingForm({ ...bookingForm, travelers: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200"
                        style={{
                          background: "#f8fafc",
                          border: "1.5px solid #e2e8f0",
                          outline: "none",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "var(--sky-blue)";
                          e.target.style.boxShadow = "0 0 0 3px rgba(63,169,245,0.12)";
                          e.target.style.background = "#fff";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "#e2e8f0";
                          e.target.style.boxShadow = "none";
                          e.target.style.background = "#f8fafc";
                        }}
                      />
                    </div>

                    {/* Date */}
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-[var(--navy)] mb-2 uppercase tracking-wide">
                        <Calendar className="w-3.5 h-3.5 text-[var(--sky-blue)]" />
                        Date
                      </label>
                      <input
                        type="date"
                        value={bookingForm.date}
                        onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200"
                        style={{
                          background: "#f8fafc",
                          border: "1.5px solid #e2e8f0",
                          outline: "none",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "var(--sky-blue)";
                          e.target.style.boxShadow = "0 0 0 3px rgba(63,169,245,0.12)";
                          e.target.style.background = "#fff";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "#e2e8f0";
                          e.target.style.boxShadow = "none";
                          e.target.style.background = "#f8fafc";
                        }}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-semibold text-[var(--navy)] mb-2 uppercase tracking-wide">
                      <MessageCircle className="w-3.5 h-3.5 text-[var(--sky-blue)]" />
                      Message
                      <span className="text-[var(--charcoal)]/40 normal-case tracking-normal font-normal">(optional)</span>
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Any special requirements or questions..."
                      value={bookingForm.message}
                      onChange={(e) => setBookingForm({ ...bookingForm, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 resize-none"
                      style={{
                        background: "#f8fafc",
                        border: "1.5px solid #e2e8f0",
                        outline: "none",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--sky-blue)";
                        e.target.style.boxShadow = "0 0 0 3px rgba(63,169,245,0.12)";
                        e.target.style.background = "#fff";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#e2e8f0";
                        e.target.style.boxShadow = "none";
                        e.target.style.background = "#f8fafc";
                      }}
                    />
                  </div>

                  {/* WhatsApp Submit Button */}
                  <button
                    onClick={handleBookingSubmit}
                    className="group w-full flex items-center justify-center gap-2.5 text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer"
                    style={{
                      background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                      boxShadow: "0 4px 16px rgba(37,211,102,0.3), 0 1px 3px rgba(0,0,0,0.08)",
                      border: "none",
                      outline: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = "0 6px 24px rgba(37,211,102,0.4), 0 2px 4px rgba(0,0,0,0.1)";
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "0 4px 16px rgba(37,211,102,0.3), 0 1px 3px rgba(0,0,0,0.08)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white transition-transform duration-300 group-hover:scale-110">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Send Enquiry via WhatsApp
                  </button>

                  {/* Trust indicators */}
                  <div
                    className="flex items-center justify-center gap-4 pt-3"
                    style={{ borderTop: "1px solid #f1f5f9" }}
                  >
                    <div className="flex items-center gap-1.5 text-[10px] text-[var(--charcoal)]/50">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Secure
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] text-[var(--charcoal)]/50">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Instant Reply
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] text-[var(--charcoal)]/50">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      No Spam
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "linear-gradient(135deg, rgba(63,169,245,0.04), rgba(63,169,245,0.1))",
                  border: "1px solid rgba(63,169,245,0.15)",
                }}
              >
                <h3
                  className="text-lg text-[var(--navy)] mb-4"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Need Help?
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:+919873564471"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 rounded-full bg-[var(--sky-blue)]/10 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-[var(--sky-blue)]" />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--charcoal)]/60">Call Us</p>
                      <p className="text-sm font-semibold text-[var(--navy)]">+91 9873564471</p>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/919873564471"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--charcoal)]/60">WhatsApp</p>
                      <p className="text-sm font-semibold text-green-700">Chat with us</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Important Notes */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "linear-gradient(135deg, rgba(245,158,11,0.04), rgba(245,158,11,0.08))",
                  border: "1px solid rgba(245,158,11,0.15)",
                }}
              >
                <h3
                  className="text-lg text-amber-800 mb-3 flex items-center gap-2"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  ⚠️ Important Notes
                </h3>
                <ul className="space-y-2 text-xs text-amber-900/80">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></span>
                    Carry valid government-issued ID at all times
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></span>
                    Carry personal medicines & prescriptions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></span>
                    Non-veg food, alcohol & smoking strictly prohibited
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></span>
                    Itinerary may be modified for safety reasons
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></span>
                    Bookings are non-transferable & non-refundable
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Packages Section */}
      <section className="py-16 bg-[var(--off-white)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl sm:text-3xl text-[var(--navy)] mb-2 text-center"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Explore Other Yatras
          </h2>
          <div className="w-16 h-1 bg-[var(--sky-blue)] mx-auto mb-8"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages
              .filter((p) => p.id !== pkg.id)
              .slice(0, 3)
              .map((otherPkg) => (
                <Link
                  key={otherPkg.id}
                  to={`/package/${otherPkg.id}`}
                  className="group block"
                >
                  <div
                    className="rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:shadow-xl"
                    style={{ border: "2px solid transparent" }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--sky-blue)")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "transparent")}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={otherPkg.image}
                        alt={otherPkg.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <span className="absolute bottom-3 left-3 text-white text-xs font-medium px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                        {otherPkg.duration}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3
                        className="text-base font-semibold text-[var(--navy)] mb-1 line-clamp-1"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        {otherPkg.title}
                      </h3>
                      <p className="text-xs text-[var(--charcoal)]/60">
                        {otherPkg.startPoint} → {otherPkg.endPoint}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden p-4"
        style={{
          background: "linear-gradient(to top, white, rgba(255,255,255,0.95))",
          borderTop: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <a href="#contact-form" className="block">
          <Button
            className="w-full text-white py-3 rounded-xl font-semibold"
            style={{
              background: "linear-gradient(135deg, #66BFFF 0%, #1a7fd4 100%)",
              boxShadow: "0 4px 16px rgba(63,169,245,0.35)",
            }}
          >
            Book This Yatra — {pkg.duration}
          </Button>
        </a>
      </div>

      <Footer />
    </div>
  );
}
