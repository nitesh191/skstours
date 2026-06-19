import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    travelers: "",
    month: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We will contact you soon.");
  };

  return (
    <section id="contact" className="py-20 bg-[var(--off-white)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl mb-4 text-[var(--navy)]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-[var(--sky-blue)] mx-auto mb-4"></div>
          <p 
            className="text-lg text-[var(--charcoal)] max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Have questions or ready to book your spiritual journey? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 
                className="text-2xl mb-6 text-[var(--navy)]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Contact Information
              </h3>
              <p 
                className="text-[var(--charcoal)] mb-8"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Reach out to us through any of the following channels. We're available 24/7 to assist you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(63,169,245,0.1)' }}>
                  <Phone className="w-6 h-6 text-[var(--sky-blue)]" />
                </div>
                <div>
                  <h4 
                    className="text-lg mb-1 text-[var(--navy)]"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Phone
                  </h4>
                  <p className="text-[var(--charcoal)]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    +91 9873564471
                  </p>
                  <p className="text-[var(--charcoal)]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    +91 7051870476
                  </p>
                </div>
              </div>

              <a href="https://wa.me/919873564471" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 hover:opacity-80 transition-opacity">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(63,169,245,0.1)' }}>
                  <MessageCircle className="w-6 h-6 text-[var(--sky-blue)]" />
                </div>
                <div>
                  <h4 
                    className="text-lg mb-1 text-[var(--navy)]"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    WhatsApp
                  </h4>
                  <p className="text-[var(--charcoal)]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    +91 9873564471
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(63,169,245,0.1)' }}>
                  <Mail className="w-6 h-6 text-[var(--sky-blue)]" />
                </div>
                <div>
                  <h4 
                    className="text-lg mb-1 text-[var(--navy)]"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Email
                  </h4>
                  <p className="text-[var(--charcoal)]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    info@skrtours.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(63,169,245,0.1)' }}>
                  <MapPin className="w-6 h-6 text-[var(--sky-blue)]" />
                </div>
                <div>
                  <h4 
                    className="text-lg mb-1 text-[var(--navy)]"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Address
                  </h4>
                  <p className="text-[var(--charcoal)]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    A 103, Kalka Ji,<br />
                    New Delhi 110019
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 
              className="text-2xl mb-6 text-[var(--navy)]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block mb-2 text-[var(--charcoal)]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Full Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="rounded-lg border-gray-300 focus:border-[var(--sky-blue)] focus:ring-[var(--sky-blue)]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label 
                    htmlFor="phone" 
                    className="block mb-2 text-[var(--charcoal)]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="rounded-lg border-gray-300 focus:border-[var(--sky-blue)] focus:ring-[var(--sky-blue)]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email" 
                    className="block mb-2 text-[var(--charcoal)]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="rounded-lg border-gray-300 focus:border-[var(--sky-blue)] focus:ring-[var(--sky-blue)]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label 
                    htmlFor="travelers" 
                    className="block mb-2 text-[var(--charcoal)]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Number of Travellers
                  </label>
                  <Input
                    id="travelers"
                    type="number"
                    min="1"
                    placeholder="e.g., 2"
                    value={formData.travelers}
                    onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                    className="rounded-lg border-gray-300 focus:border-[var(--sky-blue)] focus:ring-[var(--sky-blue)]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="month" 
                    className="block mb-2 text-[var(--charcoal)]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Preferred Travel Month
                  </label>
                  <Select
                    value={formData.month}
                    onValueChange={(value) => setFormData({ ...formData, month: value })}
                  >
                    <SelectTrigger className="rounded-lg border-gray-300 focus:border-[var(--sky-blue)] focus:ring-[var(--sky-blue)]">
                      <SelectValue placeholder="Select month" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="may">May</SelectItem>
                      <SelectItem value="june">June</SelectItem>
                      <SelectItem value="july">July</SelectItem>
                      <SelectItem value="august">August</SelectItem>
                      <SelectItem value="september">September</SelectItem>
                      <SelectItem value="october">October</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block mb-2 text-[var(--charcoal)]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your pilgrimage plans..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="rounded-lg border-gray-300 focus:border-[var(--sky-blue)] focus:ring-[var(--sky-blue)]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[var(--sky-blue)] hover:bg-[var(--sky-blue-light)] text-white py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
