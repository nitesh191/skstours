import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { MapPin, User, Phone, Star, Shield, Clock } from "lucide-react";
import { useState } from "react";

const FAQ_CATEGORIES = ["Adi Kailash", "Permits & Safety", "Booking & General"];

const faqs: { category: string; question: string; answer: string }[] = [
  // ── Adi Kailash ──────────────────────────────────────────────────────────
  {
    category: "Adi Kailash",
    question: "What is the best time to visit Adi Kailash & Om Parvat?",
    answer:
      "The ideal window is mid-May to mid-October. June–September offers the most stable weather — snow has mostly melted and the high passes are fully accessible. The pre-monsoon window (May–June) gives the clearest Om Parvat views. After mid-October the roads above Dharchula can close due to snowfall.",
  },
  {
    category: "Adi Kailash",
    question: "How difficult is the Adi Kailash trek? Can beginners do it?",
    answer:
      "The Adi Kailash–Jyolingkong section involves a moderate 6–8 km trek at altitude (3,600–4,500 m). It is manageable for reasonably fit pilgrims, including first-timers, if they take adequate rest days and acclimatise at Gunji/Nabhi before proceeding. Our packages build in acclimatisation time automatically. Om Parvat viewpoint is accessible by vehicle up to a point, requiring only a short walk.",
  },
  {
    category: "Adi Kailash",
    question: "What is the Inner Line Permit (ILP) for Adi Kailash and how is it arranged?",
    answer:
      "Adi Kailash lies in the Vyas Valley — a restricted border zone near the Indo-Tibet frontier. Every Indian pilgrim needs an Inner Line Permit (ILP) issued by the District Magistrate, Pithoragarh, along with a medical fitness certificate and police verification. We handle all ILP documentation, medical check formalities, and government submissions as part of every Adi Kailash package. You just need a valid Aadhaar/Passport.",
  },
  {
    category: "Adi Kailash",
    question: "Which package is right for me — 2N3D, 5N6D, 6N7D, 7N8D, 8N9D or 9N10D?",
    answer:
      "Quick guide: 2N3D (Dharchula base) — for those who already hold a permit and want darshan only. 5N6D — the popular complete Adi Kailash + Om Parvat circuit from Delhi/Kathgodam. 6N7D — adds Narayan Ashram and Panchachuli view. 7N8D — includes a detour to Munsiyari and Patal Bhuvneshwar cave. 8N9D — full Panchachuli Valley trek via Narayan Ashram. 9N10D — the grand circuit covering all the above plus Kasar Devi, Mukteshwar, and Nainital. Call us and we'll match the right package to your schedule.",
  },
  {
    category: "Adi Kailash",
    question: "What is the spiritual significance of Adi Kailash vs Mount Kailash (Tibet)?",
    answer:
      "Adi Kailash (also called Chhota Kailash) is believed to be the original earthly abode of Lord Shiva — predating the more famous Mount Kailash in Tibet. It is one of the five sacred Kailash peaks mentioned in Hindu scriptures. The twin peak of Parvati and the Shiva Parvati temple at Jyolingkong makes it the most accessible and equally spiritually charged alternative for Indian pilgrims who cannot travel to Tibet. The natural ॐ snow formation on adjacent Om Parvat is considered a living miracle of nature.",
  },
  {
    category: "Adi Kailash",
    question: "Can the Om Parvat ॐ (Om) symbol always be seen clearly?",
    answer:
      "The ॐ formation on Om Parvat is caused by natural snow accumulating in crevices on the rock face. It is most clearly visible from May to July before the monsoon brings heavy snow that can obscure the sharp definition. Post-monsoon (September–October) also offers good sightings depending on that year's snowfall. Our guides know the best viewpoints and optimal times of day for the clearest sightings.",
  },
  {
    category: "Adi Kailash",
    question: "What accommodation is available during the Adi Kailash Yatra?",
    answer:
      "Accommodation is in clean, comfortable homestays and government/private guesthouses in Gunji, Nabhi, and Napalchu — the base villages for the yatra. These villages offer basic but adequate amenities. Pithoragarh and Dharchula en route have better hotel options where overnight stays are included in longer packages. All accommodation is on twin/triple sharing basis. We do not use tents — pilgrims sleep under a proper roof every night.",
  },
  {
    category: "Adi Kailash",
    question: "What should I pack for the Adi Kailash Yatra?",
    answer:
      "Essentials: Layered warm clothes (temperatures drop below 5°C at Gunji), a heavy jacket, gloves, woollen socks, sturdy walking shoes (high ankle recommended), a raincoat/poncho, a torch/headlamp, personal medicines, and a government-issued photo ID (Aadhaar/Passport mandatory for ILP). Carry personal sunscreen and UV-protection sunglasses for glacier glare. Leave non-essential luggage at your hotel in Dharchula.",
  },

  // ── Permits & Safety ─────────────────────────────────────────────────────
  {
    category: "Permits & Safety",
    question: "Is altitude sickness (AMS) a risk and how do you manage it?",
    answer:
      "Altitude sickness is a genuine risk above 3,000 m. Our itineraries are designed with built-in acclimatisation stops at Pithoragarh (1,645 m) and Gunji/Nabhi (~3,200 m) before proceeding higher. Our vehicles carry portable oxygen cylinders and pulse oximeters. We monitor every pilgrim's oxygen saturation daily. If needed, we descend immediately — your safety always takes priority over the itinerary.",
  },
  {
    category: "Permits & Safety",
    question: "Do you provide medical support on the yatra?",
    answer:
      "Yes. Our experienced local coordinators are trained in basic first-aid and high-altitude emergency protocols. Every vehicle carries a full first-aid kit, oxygen cans, and a pulse oximeter. For treks like Manimahesh and Srikhand Mahadev, a certified trek guide accompanies the group. In serious emergencies, we coordinate helicopter evacuation from Pithoragarh (additional cost, as required by insurance).",
  },
  {
    category: "Permits & Safety",
    question: "What happens if weather or road conditions disrupt the itinerary?",
    answer:
      "Himalayan roads can be affected by landslides, snowfall, and weather. Our coordinators on the ground have real-time route information and will reroute or modify the itinerary to keep everyone safe. As per our T&C, sightseeing or darshan missed due to force-majeure weather or road conditions is non-refundable, as these are decisions made for safety. We always maximise coverage of the itinerary within safe conditions.",
  },

  // ── Booking & General ────────────────────────────────────────────────────
  {
    category: "Booking & General",
    question: "What is included in the tour packages — and what is NOT?",
    answer:
      "Included: Accommodation (twin/triple sharing), all meals as per itinerary (pure vegetarian only), vehicle transport throughout, all permits, local coordinator, basic first-aid. NOT included: Travel/health insurance, personal expenses (laundry, snacks, heater charge), porter/pony services, single-room surcharge, and medical evacuation costs. We recommend purchasing travel insurance before departure.",
  },
  {
    category: "Booking & General",
    question: "Are vegetarian/Sattvic meals guaranteed on the yatra?",
    answer:
      "Yes, absolutely. All meals served on every SKR Tours package are 100% pure vegetarian. No non-vegetarian food, eggs, or alcohol is served or permitted on spiritual yatras. In keeping with the sacred nature of the pilgrimage, we also request all participants to follow sattvic dietary norms during the journey.",
  },
  {
    category: "Booking & General",
    question: "Can senior citizens or physically challenged pilgrims join the yatras?",
    answer:
      "Many of our packages are suitable for senior citizens. Adi Kailash 5N6D–6N7D can be completed by reasonably healthy seniors — the trek section is short and manageable. For pilgrims with mobility limitations, we recommend consulting your doctor and informing us at booking so we can make specific arrangements. Packages that include longer high-altitude treks (Srikhand Mahadev, Kinner Kailash) require good physical fitness.",
  },
];

const guides = [
  {
    name: "Rajendra Singh",
    role: "Senior Trek & Yatra Guide",
    experience: "15+ Years",
    speciality: "Adi Kailash, Om Parvat, Panchachuli Region",
    trips: "400+ successful trips",
    rating: 5,
    location: "Pithoragarh, Uttarakhand",
    desc: "Born and raised in the Kumaon Himalayas, Rajendra has deep knowledge of every trail, village, and temple from Dharchula to Jyolingkong. Fluent in Hindi, Kumaoni, and English.",
  },
  {
    name: "Deepak Rawat",
    role: "High Altitude Trek Leader",
    experience: "12 Years",
    speciality: "Srikhand Mahadev, Manimahesh, Kinner Kailash",
    trips: "250+ successful treks",
    rating: 5,
    location: "Chamba / Kinnaur, Himachal Pradesh",
    desc: "Certified mountaineer with advanced wilderness first-aid training. Deepak has led hundreds of pilgrims safely to some of the most extreme sacred peaks in India.",
  },
  {
    name: "Mohan Bhandari",
    role: "Local Coordinator & Permit Expert",
    experience: "10 Years",
    speciality: "ILP Management, Gunji–Nabhi region logistics",
    trips: "300+ yatra groups coordinated",
    rating: 5,
    location: "Gunji, Pithoragarh District",
    desc: "Mohan is our boots-on-the-ground expert in the border region. He manages all Inner Line Permit formalities, handles ground logistics, and ensures smooth day-to-day operations at Gunji and Nabhi.",
  },
];

export function FAQ() {
  const [activeTab, setActiveTab] = useState("Adi Kailash");

  const filtered = faqs.filter((f) => f.category === activeTab);

  return (
    <section className="pt-20 pb-24 bg-[var(--off-white)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Himalaya Shloka Banner ── */}
        <div
          className="mb-14 rounded-2xl overflow-hidden relative"
          style={{
            background: "linear-gradient(135deg, #0d2137 0%, #1E3A5F 60%, #0d2137 100%)",
          }}
        >
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, #66BFFF 0%, transparent 60%), radial-gradient(circle at 80% 50%, #3FA9F5 0%, transparent 60%)"
          }} />
          <div className="relative z-10 text-center py-8 px-6">
            <div className="text-[#66BFFF] text-2xl md:text-3xl mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
              हिमालयस्य मार्गे शिवस्य आह्वानम्,
            </div>
            <div className="text-[#66BFFF]/80 text-xl md:text-2xl mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
              तत्र यात्रा भवति आत्मयात्रा॥
            </div>
            <p className="text-white/60 text-sm italic" style={{ fontFamily: "Inter, sans-serif" }}>
              "On Himalaya's path, Shiva calls — and the journey becomes a journey within."
            </p>
          </div>
        </div>

        {/* ── Section Header ── */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl mb-4 text-[var(--navy)]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-[var(--sky-blue)] mx-auto mb-4"></div>
          <p className="text-lg text-[var(--charcoal)] max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Everything you need to know before embarking on your sacred Himalayan Yatra
          </p>
        </div>

        {/* ── Category Tabs ── */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {FAQ_CATEGORIES.map((cat) => {
            const count = faqs.filter((f) => f.category === cat).length;
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
                style={{
                  fontFamily: "Inter, sans-serif",
                  background: isActive
                    ? "linear-gradient(135deg, #3FA9F5 0%, #1a7fd4 100%)"
                    : "white",
                  color: isActive ? "white" : "var(--charcoal)",
                  border: isActive ? "none" : "1.5px solid #e5e7eb",
                  boxShadow: isActive
                    ? "0 4px 14px rgba(63,169,245,0.4)"
                    : "0 1px 3px rgba(0,0,0,0.06)",
                }}
              >
                {cat}
                <span
                  className="ml-2 text-xs px-1.5 py-0.5 rounded-full"
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

        {/* ── FAQ Accordion ── */}
        <Accordion type="single" collapsible className="space-y-3 pb-2 mb-16">
          {filtered.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="border border-gray-200 bg-white rounded-xl px-6 hover:border-[var(--sky-blue)] hover:shadow-md transition-all duration-200 last:border-b"
            >
              <AccordionTrigger
                className="text-left hover:text-[var(--sky-blue)] transition-colors py-5"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <span className="text-[var(--navy)] font-medium pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent
                className="text-[var(--charcoal)] leading-relaxed pb-5"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* ── Shloka divider ── */}
        <div className="text-center mb-14">
          <div className="inline-block bg-white border border-[var(--sky-blue)]/25 rounded-2xl px-8 py-5 shadow-sm">
            <p className="text-[var(--sky-blue)] text-xl md:text-2xl font-medium mb-1" style={{ fontFamily: "Playfair Display, serif" }}>
              यत्र हिमालयः तत्र शिवस्य प्रेम,
            </p>
            <p className="text-[var(--sky-blue)] text-xl md:text-2xl font-medium mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
              यत्र शिवः तत्र अनन्तं सौन्दर्यम्॥
            </p>
            <p className="text-[var(--charcoal)]/60 text-sm italic" style={{ fontFamily: "Inter, sans-serif" }}>
              "Where the Himalayas stand, there is Shiva's love — where Shiva is, there is eternal beauty."
            </p>
          </div>
        </div>

        {/* ── Meet Your Guides ── */}
        <div className="mb-4">
          <div className="text-center mb-10">
            <h3
              className="text-2xl sm:text-3xl mb-3 text-[var(--navy)]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Meet Your Spiritual Guides
            </h3>
            <div className="w-14 h-1 bg-[var(--sky-blue)] mx-auto mb-4" />
            <p className="text-[var(--charcoal)] max-w-xl mx-auto text-base" style={{ fontFamily: "Inter, sans-serif" }}>
              Meet the experienced and trained guides who will accompany you on your journey. These professionals know every trail, temple, and sacred spot in the Himalayas. Your safety and spiritual experience are their top priority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guides.map((guide, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-[var(--sky-blue)]/40 transition-all duration-300"
              >
                {/* Avatar */}
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4"
                  style={{
                    background: "linear-gradient(135deg, #3FA9F5 0%, #1E3A5F 100%)",
                  }}
                >
                  <User className="w-8 h-8" />
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: guide.rating }).map((_, si) => (
                    <Star key={si} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <h4 className="text-[var(--navy)] font-bold text-lg mb-0.5" style={{ fontFamily: "Playfair Display, serif" }}>
                  {guide.name}
                </h4>
                <p className="text-[var(--sky-blue)] text-xs font-semibold uppercase tracking-wider mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
                  {guide.role}
                </p>

                <p className="text-[var(--charcoal)]/70 text-sm leading-relaxed mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
                  {guide.desc}
                </p>

                <div className="space-y-1.5 text-xs text-[var(--charcoal)]" style={{ fontFamily: "Inter, sans-serif" }}>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[var(--sky-blue)] flex-shrink-0" />
                    <span><strong>{guide.experience}</strong> experience · {guide.trips}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-3.5 h-3.5 text-[var(--sky-blue)] flex-shrink-0" />
                    <span>{guide.speciality}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[var(--sky-blue)] flex-shrink-0" />
                    <span>{guide.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA below guides */}
          <div className="mt-10 text-center">
            <div
              className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl px-8 py-5 shadow-md border border-[var(--sky-blue)]/20"
            >
              <div className="text-left">
                <p className="font-bold text-[var(--navy)] text-base" style={{ fontFamily: "Playfair Display, serif" }}>
                  Speak directly with your guide before booking
                </p>
                <p className="text-[var(--charcoal)]/60 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                  Our guides are available for a free 15-minute call to answer your specific questions.
                </p>
              </div>
              <a
                href="tel:+919873554471"
                className="flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-semibold transition-all hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                  boxShadow: "0 4px 14px rgba(37,211,102,0.35)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                <Phone className="w-4 h-4" />
                Call Us: +91 98735 54471
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
