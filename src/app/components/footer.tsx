import { Facebook, Instagram, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router";
import logoUrl from "../../../assets/skr logo.png";

export function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <div className="mb-4">
              <img 
                src={logoUrl} 
                alt="SKR Tours Logo" 
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-white/80 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Your trusted partner for sacred Himalayan pilgrimages. Where every trip starts with a smile and ends with a story.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/skr_tour_travels?igsh=b2ZkdTEwZWZuYXZq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--sky-blue)] flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/919873554471"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--sky-blue)] flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/17oggbVzJ1/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--sky-blue)] flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Quick Links
            </h4>
            <ul className="space-y-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li>
                <a href="/#home" className="text-white/80 hover:text-[var(--sky-blue)] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/#packages" className="text-white/80 hover:text-[var(--sky-blue)] transition-colors">
                  Tour Packages
                </a>
              </li>
              <li>
                <a href="/#about" className="text-white/80 hover:text-[var(--sky-blue)] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-white/80 hover:text-[var(--sky-blue)] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Yatras */}
          <div>
            <h4 className="text-lg mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Yatras
            </h4>
            <ul className="space-y-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li>
                <Link to="/package/adi-kailash" className="text-white/80 hover:text-[var(--sky-blue)] transition-colors">
                  Adi Kailash & Om Parvat
                </Link>
              </li>
              <li>
                <Link to="/package/kainchi-dham" className="text-white/80 hover:text-[var(--sky-blue)] transition-colors">
                  Kainchi Dham Retreat
                </Link>
              </li>
              <li>
                <Link to="/package/kinner-kailash" className="text-white/80 hover:text-[var(--sky-blue)] transition-colors">
                  Kinner Kailash Trek
                </Link>
              </li>
              <li>
                <Link to="/package/manimahesh-kailash" className="text-white/80 hover:text-[var(--sky-blue)] transition-colors">
                  Manimahesh Kailash
                </Link>
              </li>
              <li>
                <Link to="/package/srikhand-kailash-chandigarh" className="text-white/80 hover:text-[var(--sky-blue)] transition-colors">
                  Srikhand Kailash
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Contact Info
            </h4>
            <ul className="space-y-3" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[var(--sky-blue)] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white/80">+91 9873564471</div>
                  <div className="text-white/80">+91 7051870476</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[var(--sky-blue)] flex-shrink-0 mt-0.5" />
                <div className="text-white/80">info@skrtours.com</div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--sky-blue)] flex-shrink-0 mt-0.5" />
                <div className="text-white/80">
                  A 103, Kalka Ji,<br />
                  New Delhi 110019
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <div className="bg-white/5 border border-white/10 px-5 py-2.5 rounded-lg inline-block self-center md:self-start shadow-inner">
                <span className="text-[var(--sky-blue)] font-medium tracking-wide text-sm md:text-base">
                  सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ।
                </span>
              </div>
              <p className="text-white/60 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                © 2026 SKR Tours & Travels. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              <a href="#" className="text-white/60 hover:text-[var(--sky-blue)] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-[var(--sky-blue)] transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
