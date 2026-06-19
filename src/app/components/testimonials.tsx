import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1543934776-32d1cc654abb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwaWxncmltJTIwZWxkZXJseSUyMHRyYXZlbGVyJTIwc3Bpcml0dWFsfGVufDF8fHx8MTc4MTE5NTc3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
    text: "The Kailash Mansarovar yatra was a life-changing experience. The team took care of every detail, allowing me to focus entirely on my spiritual journey. Highly recommended!",
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1695556746253-ab635cedac50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzcGlyaXR1YWwlMjBqb3VybmV5JTIwZWxkZXJseSUyMHdvbWFufGVufDF8fHx8MTc4MTE5NTc4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
    text: "Professional, caring, and deeply knowledgeable about the spiritual significance of each location. Our Char Dham yatra exceeded all expectations. Thank you!",
  },
  {
    id: 3,
    name: "Amit Patel",
    location: "Ahmedabad",
    image: "https://images.unsplash.com/photo-1659352790654-058e9077a4f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGluZGlhbiUyMGZhbWlseSUyMHBvcnRyYWl0JTIwc21pbGluZ3xlbnwxfHx8fDE3ODExOTU3Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
    text: "Himalayan Yatra made our family pilgrimage comfortable and memorable. From accommodations to meals, everything was perfectly arranged. A trustworthy company indeed!",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-b from-[var(--off-white)] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl mb-4 text-[var(--navy)]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            What Our Pilgrims Say
          </h2>
          <div className="w-20 h-1 bg-[var(--sky-blue)] mx-auto mb-4"></div>
          <p 
            className="text-lg text-[var(--charcoal)] max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Stories and experiences from thousands of satisfied travelers
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-[var(--sky-blue)]"
            >
              <CardContent className="p-8">
                <Quote className="w-12 h-12 text-[var(--sky-blue)] opacity-20 mb-4" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[var(--sky-blue)] text-[var(--sky-blue)]" />
                  ))}
                </div>

                <p 
                  className="text-[var(--charcoal)] mb-6 leading-relaxed italic"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[var(--sky-blue)]"
                  />
                  <div>
                    <div 
                      className="text-[var(--navy)]"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {testimonial.name}
                    </div>
                    <div 
                      className="text-sm text-[var(--charcoal)]"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden">
          <Card className="relative overflow-hidden rounded-xl shadow-lg border-t-4 border-[var(--sky-blue)]">
            <CardContent className="p-8">
              <Quote className="w-12 h-12 text-[var(--sky-blue)] opacity-20 mb-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[var(--sky-blue)] text-[var(--sky-blue)]" />
                ))}
              </div>

              <p 
                className="text-[var(--charcoal)] mb-6 leading-relaxed italic"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                "{testimonials[currentIndex].text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[var(--sky-blue)]"
                />
                <div>
                  <div 
                    className="text-[var(--navy)]"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {testimonials[currentIndex].name}
                  </div>
                  <div 
                    className="text-sm text-[var(--charcoal)]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {testimonials[currentIndex].location}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentIndex ? "bg-[var(--sky-blue)] w-8" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
