import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Phone, Mail, MapPin, MessageCircle, User, Users, Calendar, Send, ShieldCheck, Zap, CheckCircle } from "lucide-react";
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
    
    if (!formData.name || !formData.phone) {
      alert("Please fill in your name and phone number.");
      return;
    }

    const lines = [
      `🙏 *New Yatra Enquiry*`,
      ``,
      `👤 *Name:* ${formData.name}`,
      `📞 *Phone:* ${formData.phone}`,
      formData.email ? `📧 *Email:* ${formData.email}` : "",
      formData.travelers ? `👥 *Travelers:* ${formData.travelers}` : "",
      formData.month ? `📅 *Preferred Month:* ${formData.month}` : "",
      formData.message ? `💬 *Message:* ${formData.message}` : "",
      ``,
      `_Sent from SKR Tours Website_`,
    ].filter(Boolean).join("%0A");

    window.open(`https://wa.me/919873564471?text=${lines}`, "_blank");
  };

  const inputFocusStyle = {
    onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      e.target.style.borderColor = "var(--sky-blue)";
      e.target.style.boxShadow = "0 0 0 3px rgba(63,169,245,0.1)";
      e.target.style.background = "#fff";
    },
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      e.target.style.borderColor = "#e2e8f0";
      e.target.style.boxShadow = "none";
      e.target.style.background = "#f8fafc";
    },
  };

  return (
    <section id="contact" className="py-20 bg-[var(--off-white)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "rgba(37,211,102,0.12)" }}
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
            </div>
            <span
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sky-blue)]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Get In Touch
            </span>
          </div>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl mb-4 text-[var(--navy)]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Book Your Sacred Journey
          </h2>
          <div className="w-20 h-1 bg-[var(--sky-blue)] mx-auto mb-4"></div>
          <p 
            className="text-lg text-[var(--charcoal)]/70 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Fill in your details and get instant confirmation via WhatsApp. We respond within minutes.
          </p>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden"
          style={{
            boxShadow: "0 16px 64px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.04)",
          }}
        >
          {/* Left Panel — Contact Information (dark) */}
          <div
            className="lg:col-span-2 relative p-8 lg:p-10"
            style={{
              background: "linear-gradient(160deg, #1E3A5F 0%, #162d4a 50%, #0f2035 100%)",
            }}
          >
            {/* Decorative elements */}
            <div
              className="absolute top-0 right-0 w-40 h-40 rounded-full"
              style={{ background: "rgba(63,169,245,0.06)", transform: "translate(30%, -30%)" }}
            />
            <div
              className="absolute bottom-0 left-0 w-28 h-28 rounded-full"
              style={{ background: "rgba(63,169,245,0.04)", transform: "translate(-20%, 30%)" }}
            />
            <div
              className="absolute top-1/2 right-0 w-20 h-20 rounded-full"
              style={{ background: "rgba(37,211,102,0.05)", transform: "translate(40%, -50%)" }}
            />

            <div className="relative z-10 h-full flex flex-col">
              <div>
                <h3 
                  className="text-2xl text-white mb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Contact Information
                </h3>
                <p 
                  className="text-white/50 text-sm mb-10 leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Reach out to us through any channel. Available 24/7 for your convenience.
                </p>
              </div>

              <div className="space-y-7 flex-1">
                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
                    style={{ background: "rgba(63,169,245,0.15)", border: "1px solid rgba(63,169,245,0.1)" }}
                  >
                    <Phone className="w-5 h-5 text-[var(--sky-blue)]" />
                  </div>
                  <div>
                    <h4 
                      className="text-sm font-semibold text-white/90 mb-1 uppercase tracking-wider"
                      style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px' }}
                    >
                      Phone
                    </h4>
                    <a href="tel:+919873564471" className="block text-white/60 text-sm hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                      +91 9873564471
                    </a>
                    <a href="tel:+917051870476" className="block text-white/60 text-sm hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                      +91 7051870476
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <a href="https://wa.me/919873564471" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
                    style={{ background: "rgba(37,211,102,0.15)", border: "1px solid rgba(37,211,102,0.1)" }}
                  >
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <h4 
                      className="text-sm font-semibold text-white/90 mb-1 uppercase tracking-wider"
                      style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px' }}
                    >
                      WhatsApp
                    </h4>
                    <p className="text-white/60 text-sm group-hover:text-[#25D366] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                      +91 9873564471
                    </p>
                    <p className="text-[#25D366]/60 text-xs mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Tap to chat instantly
                    </p>
                  </div>
                </a>

                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
                    style={{ background: "rgba(63,169,245,0.15)", border: "1px solid rgba(63,169,245,0.1)" }}
                  >
                    <Mail className="w-5 h-5 text-[var(--sky-blue)]" />
                  </div>
                  <div>
                    <h4 
                      className="text-sm font-semibold text-white/90 mb-1 uppercase tracking-wider"
                      style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px' }}
                    >
                      Email
                    </h4>
                    <a href="mailto:info@skrtours.com" className="text-white/60 text-sm hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                      info@skrtours.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 group">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
                    style={{ background: "rgba(63,169,245,0.15)", border: "1px solid rgba(63,169,245,0.1)" }}
                  >
                    <MapPin className="w-5 h-5 text-[var(--sky-blue)]" />
                  </div>
                  <div>
                    <h4 
                      className="text-sm font-semibold text-white/90 mb-1 uppercase tracking-wider"
                      style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px' }}
                    >
                      Office
                    </h4>
                    <p className="text-white/60 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      103, Kalka Ji,<br />
                      New Delhi 110019
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom trust strip */}
              <div
                className="mt-10 pt-6 flex items-center gap-4"
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="flex items-center gap-1.5 text-[10px] text-white/35">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Govt. Verified
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-white/35">
                  <Users className="w-3.5 h-3.5" />
                  10,000+ Pilgrims
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel — Booking Form */}
          <div className="lg:col-span-3 bg-white p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-2">
              <h3 
                className="text-2xl text-[var(--navy)]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Send Your Enquiry
              </h3>
            </div>
            <p className="text-sm text-[var(--charcoal)]/50 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              We'll respond on WhatsApp within minutes
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-[var(--navy)] mb-2 uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <User className="w-3.5 h-3.5 text-[var(--sky-blue)]" />
                  Full Name
                  <span className="text-red-400">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200"
                  style={{ fontFamily: 'Inter, sans-serif', background: "#f8fafc", border: "1.5px solid #e2e8f0", outline: "none" }}
                  {...inputFocusStyle}
                />
              </div>

              {/* Phone + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-[var(--navy)] mb-2 uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <Phone className="w-3.5 h-3.5 text-[var(--sky-blue)]" />
                    Phone / WhatsApp
                    <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <span
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium select-none"
                      style={{ color: "rgba(45,45,45,0.35)", pointerEvents: "none", fontFamily: 'Inter, sans-serif' }}
                    >
                      +91
                    </span>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 rounded-xl text-sm transition-all duration-200"
                      style={{ fontFamily: 'Inter, sans-serif', background: "#f8fafc", border: "1.5px solid #e2e8f0", outline: "none" }}
                      {...inputFocusStyle}
                    />
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-[var(--navy)] mb-2 uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <Mail className="w-3.5 h-3.5 text-[var(--sky-blue)]" />
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200"
                    style={{ fontFamily: 'Inter, sans-serif', background: "#f8fafc", border: "1.5px solid #e2e8f0", outline: "none" }}
                    {...inputFocusStyle}
                  />
                </div>
              </div>

              {/* Travelers + Month row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-[var(--navy)] mb-2 uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <Users className="w-3.5 h-3.5 text-[var(--sky-blue)]" />
                    Travelers
                  </label>
                  <input
                    id="travelers"
                    type="number"
                    min="1"
                    placeholder="e.g. 2"
                    value={formData.travelers}
                    onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200"
                    style={{ fontFamily: 'Inter, sans-serif', background: "#f8fafc", border: "1.5px solid #e2e8f0", outline: "none" }}
                    {...inputFocusStyle}
                  />
                </div>

                <div>
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-[var(--navy)] mb-2 uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <Calendar className="w-3.5 h-3.5 text-[var(--sky-blue)]" />
                    Travel Month
                  </label>
                  <Select
                    value={formData.month}
                    onValueChange={(value) => setFormData({ ...formData, month: value })}
                  >
                    <SelectTrigger
                      className="rounded-xl h-[46px] text-sm transition-all duration-200"
                      style={{ fontFamily: 'Inter, sans-serif', background: "#f8fafc", border: "1.5px solid #e2e8f0" }}
                    >
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

              {/* Message */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-[var(--navy)] mb-2 uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <MessageCircle className="w-3.5 h-3.5 text-[var(--sky-blue)]" />
                  Message
                  <span className="text-[var(--charcoal)]/40 normal-case tracking-normal font-normal">(optional)</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your pilgrimage plans, preferred dates, group details..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 resize-none"
                  style={{ fontFamily: 'Inter, sans-serif', background: "#f8fafc", border: "1.5px solid #e2e8f0", outline: "none" }}
                  {...inputFocusStyle}
                />
              </div>

              {/* WhatsApp Submit Button */}
              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-3 text-white py-4 rounded-xl font-semibold text-base transition-all duration-300 cursor-pointer"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                  boxShadow: "0 4px 20px rgba(37,211,102,0.3), 0 1px 4px rgba(0,0,0,0.08)",
                  border: "none",
                  outline: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(37,211,102,0.4), 0 2px 6px rgba(0,0,0,0.1)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,211,102,0.3), 0 1px 4px rgba(0,0,0,0.08)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white transition-transform duration-300 group-hover:scale-110">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Send Enquiry via WhatsApp
              </button>

              {/* Trust indicators */}
              <div className="flex items-center justify-center gap-6 pt-2">
                <div className="flex items-center gap-1.5 text-[11px] text-[var(--charcoal)]/40">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Secure
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[var(--charcoal)]/40">
                  <Zap className="w-3.5 h-3.5" />
                  Instant Reply
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[var(--charcoal)]/40">
                  <CheckCircle className="w-3.5 h-3.5" />
                  No Spam
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

