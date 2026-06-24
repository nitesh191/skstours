import { useState, useMemo } from "react";
import { Link } from "react-router";
import { packages } from "./package-data";
import {
  Search, SlidersHorizontal, LayoutGrid, LayoutList,
  Calendar, MapPin, Mountain, ArrowRight, X, ChevronDown,
  Users, Filter
} from "lucide-react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

// ── Constants ──────────────────────────────────────────────────────────────
const CATEGORIES = ["Adi Kailash", "Kainchi Dham", "Kinner Kailash", "Manimahesh", "Srikhand Kailash"];
const DIFFICULTIES = ["Easy", "Moderate to Difficult", "Difficult", "Very Difficult"];
const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "nights-asc", label: "Duration: Short First" },
  { value: "nights-desc", label: "Duration: Long First" },
  { value: "difficulty-asc", label: "Difficulty: Easy First" },
];

const DIFFICULTY_RANK: Record<string, number> = {
  Easy: 0, "Moderate to Difficult": 1, Difficult: 2, "Very Difficult": 3,
};

const DIFF_COLOR: Record<string, { bg: string; text: string }> = {
  Easy:                    { bg: "#22c55e", text: "#fff" },
  "Moderate to Difficult": { bg: "#f59e0b", text: "#fff" },
  Difficult:               { bg: "#ef4444", text: "#fff" },
  "Very Difficult":        { bg: "#dc2626", text: "#fff" },
};

// ── All activity tags from highlights ──────────────────────────────────────
const ALL_TAGS = ["Darshan", "Trek", "Camping", "Panchachuli", "Om Parvat", "Adi Kailash", "Kainchi Dham", "Srikhand", "Munsiyari", "Narayan Ashram"];

export function AllPackagesPage() {
  // Filter state
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const [maxNights, setMaxNights] = useState(10);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sort, setSort] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toggle helpers
  const toggle = <T,>(arr: T[], val: T) =>
    arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val];

  // Filter + sort
  const results = useMemo(() => {
    let out = packages.filter((p) => {
      if (search && !p.title.toLowerCase().includes(search.toLowerCase()) &&
          !p.category.toLowerCase().includes(search.toLowerCase()) &&
          !p.startPoint.toLowerCase().includes(search.toLowerCase())) return false;
      if (selectedCategories.length && !selectedCategories.includes(p.category)) return false;
      if (selectedDifficulties.length && !selectedDifficulties.includes(p.difficulty)) return false;
      if ((p.nights ?? 0) > maxNights) return false;
      if (selectedTags.length && !selectedTags.some((t) =>
        p.highlights.some((h) => h.toLowerCase().includes(t.toLowerCase())) ||
        p.title.toLowerCase().includes(t.toLowerCase())
      )) return false;
      return true;
    });

    if (sort === "nights-asc") out = [...out].sort((a, b) => (a.nights ?? 0) - (b.nights ?? 0));
    if (sort === "nights-desc") out = [...out].sort((a, b) => (b.nights ?? 0) - (a.nights ?? 0));
    if (sort === "difficulty-asc") out = [...out].sort((a, b) =>
      (DIFFICULTY_RANK[a.difficulty] ?? 0) - (DIFFICULTY_RANK[b.difficulty] ?? 0));
    return out;
  }, [search, selectedCategories, selectedDifficulties, maxNights, selectedTags, sort]);

  const clearAll = () => {
    setSearch(""); setSelectedCategories([]); setSelectedDifficulties([]);
    setMaxNights(10); setSelectedTags([]);
  };

  const activeFilterCount =
    selectedCategories.length + selectedDifficulties.length + selectedTags.length +
    (maxNights < 10 ? 1 : 0) + (search ? 1 : 0);

  // ── Sidebar ──────────────────────────────────────────────────────────────
  const Sidebar = () => (
    <aside className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-7" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-[var(--navy)]" />
          <h3 className="font-bold text-[var(--navy)] text-base tracking-wide uppercase text-xs">Filters</h3>
        </div>
        {activeFilterCount > 0 && (
          <button onClick={clearAll} className="text-xs text-[var(--sky-blue)] hover:underline flex items-center gap-1">
            <X className="w-3 h-3" /> Clear all
          </button>
        )}
      </div>

      <div className="h-px bg-gray-100" />

      {/* Search */}
      <div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--charcoal)]/50 mb-3">Search</p>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search tours..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[var(--sky-blue)] focus:ring-2 focus:ring-[var(--sky-blue)]/20 transition-all"
          />
        </div>
      </div>

      {/* Destination / Category */}
      <div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--charcoal)]/50 mb-3">Destination</p>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const active = selectedCategories.includes(cat);
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategories(toggle(selectedCategories, cat))}
                className="px-3 py-1.5 rounded-full text-xs font-medium transition-all border"
                style={{
                  background: active ? "var(--navy)" : "transparent",
                  color: active ? "#fff" : "var(--charcoal)",
                  borderColor: active ? "var(--navy)" : "#e5e7eb",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Difficulty */}
      <div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--charcoal)]/50 mb-3">Difficulty</p>
        <div className="flex flex-wrap gap-2">
          {DIFFICULTIES.map((d) => {
            const active = selectedDifficulties.includes(d);
            const dc = DIFF_COLOR[d];
            return (
              <button
                key={d}
                onClick={() => setSelectedDifficulties(toggle(selectedDifficulties, d))}
                className="px-3 py-1.5 rounded-full text-xs font-medium transition-all border"
                style={{
                  background: active ? dc.bg : "transparent",
                  color: active ? dc.text : "var(--charcoal)",
                  borderColor: active ? dc.bg : "#e5e7eb",
                }}
              >
                {d}
              </button>
            );
          })}
        </div>
      </div>

      {/* Duration slider */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--charcoal)]/50">Duration</p>
          <span className="text-xs font-semibold text-[var(--navy)]">1 — {maxNights} nights</span>
        </div>
        <input
          type="range"
          min={1}
          max={10}
          value={maxNights}
          onChange={(e) => setMaxNights(Number(e.target.value))}
          className="w-full accent-[#1E3A5F] cursor-pointer"
        />
        <div className="flex justify-between text-[10px] text-gray-400 mt-1">
          <span>1 night</span>
          <span>10 nights</span>
        </div>
      </div>

      {/* Tags / Activities */}
      <div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--charcoal)]/50 mb-3">Highlights</p>
        <div className="flex flex-wrap gap-2">
          {ALL_TAGS.map((tag) => {
            const active = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => setSelectedTags(toggle(selectedTags, tag))}
                className="px-3 py-1.5 rounded-full text-xs font-medium transition-all border"
                style={{
                  background: active ? "rgba(63,169,245,0.12)" : "transparent",
                  color: active ? "#1a7fd4" : "var(--charcoal)",
                  borderColor: active ? "#3FA9F5" : "#e5e7eb",
                }}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );

  // ── Card: Grid ────────────────────────────────────────────────────────────
  const GridCard = ({ pkg }: { pkg: typeof packages[0] }) => {
    const dc = DIFF_COLOR[pkg.difficulty] ?? DIFF_COLOR["Difficult"];
    return (
      <div
        className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
        onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
        style={{ transition: "box-shadow 0.3s, transform 0.3s" }}
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Difficulty badge */}
          <div
            className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold"
            style={{ background: dc.bg, color: dc.text }}
          >
            {pkg.difficulty.replace(" to Difficult", "").replace("Moderate", "Moderate")}
          </div>

          {/* Category badge */}
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-sm text-white border border-white/30">
            {pkg.category}
          </div>

          {/* Duration on image */}
          <div className="absolute bottom-3 left-3">
            <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-semibold">
              {pkg.duration}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-5">
          {/* Tags from highlights */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {pkg.highlights.slice(0, 2).map((h, i) => (
              <span key={i} className="text-[10px] text-[var(--sky-blue)] font-medium">
                {h.split("—")[0].trim().toLowerCase()}
                {i < 1 && pkg.highlights.length > 1 && <span className="text-gray-300 mx-1">·</span>}
              </span>
            ))}
          </div>

          <h3
            className="text-lg font-semibold text-[var(--navy)] mb-2 leading-snug"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {pkg.title}
          </h3>

          <p className="text-sm text-[var(--charcoal)]/60 mb-4 line-clamp-2 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
            {pkg.overview.substring(0, 120)}...
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap gap-3 text-xs text-[var(--charcoal)]/60 mb-4 pb-4 border-b border-gray-100" style={{ fontFamily: "Inter, sans-serif" }}>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[var(--sky-blue)]" />
              <span>{pkg.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[var(--sky-blue)]" />
              <span>{pkg.groupSize.split("/")[0].trim()}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[var(--sky-blue)]" />
              <span>{pkg.startPoint}</span>
            </div>
          </div>

          {/* Price + CTA */}
          <div className="flex items-center justify-between">
            {pkg.price ? (
              <div>
                <div className="text-xs text-gray-400 line-through" style={{ fontFamily: "Inter, sans-serif" }}>
                  {pkg.price.replace("₹", "₹") + " "}
                </div>
                <div className="text-xl font-bold text-[var(--navy)]" style={{ fontFamily: "Inter, sans-serif" }}>
                  {pkg.price}
                  <span className="text-xs font-normal text-gray-400 ml-1">/person</span>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-xs text-gray-400 mb-0.5" style={{ fontFamily: "Inter, sans-serif" }}>Starts from</p>
                <p className="text-sm font-bold text-[var(--sky-blue)]" style={{ fontFamily: "Inter, sans-serif" }}>Contact for price</p>
              </div>
            )}
            <Link to={`/package/${pkg.id}`}>
              <button
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #1E3A5F 0%, #3FA9F5 100%)",
                  boxShadow: "0 4px 14px rgba(63,169,245,0.3)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Book Now
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  // ── Card: List ────────────────────────────────────────────────────────────
  const ListCard = ({ pkg }: { pkg: typeof packages[0] }) => {
    const dc = DIFF_COLOR[pkg.difficulty] ?? DIFF_COLOR["Difficult"];
    return (
      <div
        className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex"
        onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
        style={{ transition: "box-shadow 0.3s, transform 0.3s" }}
      >
        {/* Image */}
        <div className="relative w-64 flex-shrink-0 overflow-hidden">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
          <div
            className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold"
            style={{ background: dc.bg, color: dc.text }}
          >
            {pkg.difficulty}
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full"
                style={{ background: "rgba(63,169,245,0.1)", color: "#1a7fd4" }}>
                {pkg.category}
              </span>
              <span className="text-xs text-gray-400">{pkg.duration}</span>
            </div>
            <h3
              className="text-xl font-semibold text-[var(--navy)] mb-2"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {pkg.title}
            </h3>
            <p className="text-sm text-[var(--charcoal)]/60 mb-4 line-clamp-2 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              {pkg.overview.substring(0, 180)}...
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-[var(--charcoal)]/60" style={{ fontFamily: "Inter, sans-serif" }}>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[var(--sky-blue)]" />
                {pkg.duration}
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[var(--sky-blue)]" />
                {pkg.startPoint} → {pkg.endPoint}
              </div>
              {pkg.maxAltitude && (
                <div className="flex items-center gap-1.5">
                  <Mountain className="w-3.5 h-3.5 text-[var(--sky-blue)]" />
                  {pkg.maxAltitude}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
            {pkg.price ? (
              <div className="text-xl font-bold text-[var(--navy)]" style={{ fontFamily: "Inter, sans-serif" }}>
                {pkg.price}
                <span className="text-xs font-normal text-gray-400 ml-1">/person</span>
              </div>
            ) : (
              <span className="text-sm font-bold text-[var(--sky-blue)]" style={{ fontFamily: "Inter, sans-serif" }}>
                Contact for price
              </span>
            )}
            <div className="flex gap-3">
              <Link to={`/package/${pkg.id}`}>
                <button
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold border border-[var(--sky-blue)] text-[var(--sky-blue)] hover:bg-[var(--sky-blue)] hover:text-white transition-all"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  View Itinerary
                </button>
              </Link>
              <Link to={`/package/${pkg.id}#contact-form`}>
                <button
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #1E3A5F 0%, #3FA9F5 100%)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // ── Main render ───────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[var(--off-white)]" style={{ fontFamily: "Inter, sans-serif" }}>
      <Navbar />

      {/* Hero Banner */}
      <div
        className="relative pt-32 pb-16 text-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0d1f35 0%, #1E3A5F 60%, #0d2a4a 100%)",
        }}
      >
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)", backgroundSize: "24px 24px" }} />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-[#66BFFF] text-sm font-medium mb-4">
            🕉 हिमालयस्य यात्रायां प्रेम्णः आरम्भः
          </div>
          <h1
            className="text-4xl md:text-5xl text-white mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            All Tour Packages
          </h1>
          <p className="text-white/60 text-base max-w-xl mx-auto">
            {packages.length} sacred Himalayan yatras — from a quick 2-night Adi Kailash darshan to a grand 10-day pilgrimage. Find yours.
          </p>
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Mobile filter button */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-xl border border-gray-200 shadow-sm text-sm font-semibold text-[var(--navy)]"
          >
            <Filter className="w-4 h-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-[var(--sky-blue)] text-white text-xs flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
            <ChevronDown className={`w-4 h-4 transition-transform ${sidebarOpen ? "rotate-180" : ""}`} />
          </button>
        </div>

        <div className="flex gap-8 items-start">
          {/* Sidebar — desktop always visible, mobile toggled */}
          <div className={`lg:block w-72 flex-shrink-0 ${sidebarOpen ? "block" : "hidden"} lg:sticky lg:top-24`}>
            <Sidebar />
          </div>

          {/* Results */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <p className="text-sm text-[var(--charcoal)]/60">
                <span className="font-bold text-[var(--navy)] text-base">{results.length}</span> packages found
                {activeFilterCount > 0 && (
                  <button onClick={clearAll} className="ml-3 text-[var(--sky-blue)] text-xs hover:underline">
                    clear filters
                  </button>
                )}
              </p>

              <div className="flex items-center gap-3">
                {/* Sort */}
                <div className="relative">
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="appearance-none pl-4 pr-10 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-[var(--navy)] focus:outline-none focus:border-[var(--sky-blue)] cursor-pointer shadow-sm"
                  >
                    {SORT_OPTIONS.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>

                {/* View toggle */}
                <div className="flex bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <button
                    onClick={() => setViewMode("grid")}
                    className="p-2.5 transition-colors"
                    style={{ background: viewMode === "grid" ? "var(--navy)" : "white", color: viewMode === "grid" ? "white" : "#666" }}
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className="p-2.5 transition-colors"
                    style={{ background: viewMode === "list" ? "var(--navy)" : "white", color: viewMode === "list" ? "white" : "#666" }}
                  >
                    <LayoutList className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Active filter chips */}
            {activeFilterCount > 0 && (
              <div className="flex flex-wrap gap-2 mb-5">
                {selectedCategories.map((c) => (
                  <span key={c} className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--navy)] text-white text-xs font-medium">
                    {c}
                    <button onClick={() => setSelectedCategories(selectedCategories.filter((x) => x !== c))}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
                {selectedDifficulties.map((d) => (
                  <span key={d} className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-medium">
                    {d}
                    <button onClick={() => setSelectedDifficulties(selectedDifficulties.filter((x) => x !== d))}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
                {selectedTags.map((t) => (
                  <span key={t} className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--sky-blue)]/10 text-[var(--sky-blue)] text-xs font-medium">
                    {t}
                    <button onClick={() => setSelectedTags(selectedTags.filter((x) => x !== t))}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}

            {/* Package grid / list */}
            {results.length === 0 ? (
              <div className="text-center py-24 bg-white rounded-2xl border border-gray-100">
                <div className="text-5xl mb-4">🏔️</div>
                <h3 className="text-xl font-bold text-[var(--navy)] mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
                  No packages found
                </h3>
                <p className="text-[var(--charcoal)]/50 mb-6">Try adjusting your filters or search term</p>
                <button
                  onClick={clearAll}
                  className="px-6 py-2.5 bg-[var(--sky-blue)] text-white rounded-xl text-sm font-semibold hover:scale-105 transition-all"
                >
                  Clear Filters
                </button>
              </div>
            ) : viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
                {results.map((pkg) => (
                  <GridCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                {results.map((pkg) => (
                  <ListCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            )}

            {/* Shloka footer */}
            {results.length > 0 && (
              <div className="mt-12 text-center">
                <div className="inline-block">
                  <p className="text-[var(--navy)]/40 text-sm italic" style={{ fontFamily: "Playfair Display, serif" }}>
                    हिमालयस्य मार्गे शिवस्य आह्वानम् — तत्र यात्रा भवति आत्मयात्रा॥
                  </p>
                  <p className="text-[var(--charcoal)]/30 text-xs mt-1">
                    "On the path of the Himalaya, Shiva calls — the journey becomes a journey of the soul."
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
