import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar, Users, MapPin, Utensils, Hotel, ShieldCheck, Mountain, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { packages } from "./package-data";

export function TourPackages() {
  return (
    <section id="packages" className="py-20 bg-[var(--off-white)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl mb-4 text-[var(--navy)]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Tour Packages
          </h2>
          <div className="w-20 h-1 bg-[var(--sky-blue)] mx-auto mb-8"></div>
          <div className="mb-10 inline-block bg-white px-8 py-4 rounded-xl shadow-[0_4px_20px_rgba(102,191,255,0.15)] border border-[var(--sky-blue)]/20 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--off-white)] px-3 text-[var(--sky-blue)]">
              <svg className="w-6 h-6 opacity-60" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
            </div>
            <div className="text-[var(--sky-blue)] font-medium text-lg md:text-xl tracking-wide">
              ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् ।
            </div>
          </div>
          <p 
            className="text-lg text-[var(--charcoal)] max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Carefully curated pilgrimage packages designed for comfort, safety, and spiritual fulfillment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className="group overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[var(--sky-blue)]"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 
                  className="text-xl mb-3 text-[var(--navy)]"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {pkg.title}
                </h3>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-[var(--charcoal)]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-[var(--sky-blue)]" />
                    <span>{pkg.duration}</span>
                  </div>
                  {pkg.maxAltitude && (
                    <div className="flex items-center gap-1">
                      <Mountain className="w-4 h-4 text-[var(--sky-blue)]" />
                      <span>{pkg.maxAltitude}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2 mb-6">
                  {pkg.inclusions.slice(0, 4).map((inclusion, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-[var(--charcoal)]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <inclusion.icon className="w-4 h-4 text-[var(--sky-blue)] flex-shrink-0" />
                      <span>{inclusion.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="text-xs text-[var(--charcoal)]/60">
                    {pkg.startPoint} → {pkg.endPoint}
                  </div>
                  {pkg.price && (
                    <div className="text-right">
                      <span className="text-lg font-bold text-[var(--navy)]">{pkg.price}</span>
                      <span className="text-xs text-[var(--charcoal)]/60 ml-1">/person</span>
                    </div>
                  )}
                </div>

                <div className="flex gap-3 mt-4">
                  <Link to={`/package/${pkg.id}`} className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full border-[var(--sky-blue)] text-[var(--sky-blue)] hover:bg-[var(--sky-blue)] hover:text-white rounded-lg transition-all group/btn"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      View Itinerary
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to={`/package/${pkg.id}#contact-form`} className="flex-1">
                    <Button
                      className="w-full bg-[var(--sky-blue)] hover:bg-[var(--sky-blue-light)] text-white rounded-lg transition-all"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Book Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
