import { useState, useEffect, useRef } from "react";
import { ChevronDown, Mountain, Menu, X, Phone, Mail } from "lucide-react";
import { Link, useLocation } from "react-router";
import logoUrl from "../../../assets/skr logo.png";

const packageLinks = [
  { id: "adi-kailash", label: "Adi Kailash & Om Parvat", icon: "🏔️" },
  { id: "kainchi-dham", label: "Kainchi Dham Retreat", icon: "🛕" },
  { id: "kinner-kailash", label: "Kinner Kailash Trek", icon: "⛰️" },
  { id: "manimahesh-kailash", label: "Manimahesh Kailash", icon: "🌊" },
  { id: "srikhand-kailash-chandigarh", label: "Srikhand Kailash (Chandigarh)", icon: "🗺️" },
  { id: "srikhand-kailash-jaon", label: "Srikhand Kailash (Jaon)", icon: "🧗" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobilePackagesOpen, setIsMobilePackagesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobilePackagesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobilePackagesOpen(false);
  };

  return (
    <>
      <style>{`
        /* ── Capsule shell ── */
        .liquid-nav {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(28px) saturate(160%);
          -webkit-backdrop-filter: blur(28px) saturate(160%);
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow:
            0 4px 24px rgba(0, 0, 0, 0.12),
            0 1px 4px rgba(0, 0, 0, 0.06),
            inset 0 1.5px 0 rgba(255, 255, 255, 0.30),
            inset 0 -1px 0 rgba(255, 255, 255, 0.06);
        }
        .liquid-nav.scrolled {
          background: rgba(10, 25, 60, 0.38);
          border-color: rgba(255, 255, 255, 0.14);
          box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.20),
            0 2px 8px rgba(0, 0, 0, 0.10),
            inset 0 1px 0 rgba(255, 255, 255, 0.18);
        }

        /* ── Nav text ── */
        .nav-link {
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.88);
          padding: 6px 16px;
          border-radius: 999px;
          transition: background 0.18s ease, color 0.18s ease;
          white-space: nowrap;
          text-decoration: none;
          background: transparent;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .nav-link:hover {
          background: rgba(255, 255, 255, 0.15);
          color: #fff;
        }

        /* ── Dropdown ── */
        .dropdown-glass {
          background: rgba(8, 20, 50, 0.82);
          backdrop-filter: blur(40px) saturate(180%);
          -webkit-backdrop-filter: blur(40px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow:
            0 24px 64px rgba(0, 0, 0, 0.35),
            0 8px 20px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
          border-radius: 20px;
          overflow: hidden;
          animation: dropIn 0.22s cubic-bezier(0.34, 1.5, 0.64, 1);
          transform-origin: top center;
        }
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-10px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 18px;
          font-size: 0.845rem;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          color: rgba(220, 235, 255, 0.85);
          border-radius: 12px;
          margin: 3px 6px;
          transition: background 0.15s ease, color 0.15s ease;
          text-decoration: none;
        }
        .dropdown-item:hover {
          background: rgba(63, 169, 245, 0.18);
          color: #7dd3fc;
        }

        /* ── Book Now button ── */
        .book-btn {
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          color: #fff;
          padding: 9px 24px;
          border-radius: 999px;
          border: none;
          background: linear-gradient(135deg, #66BFFF 0%, #0e7dd6 100%);
          box-shadow:
            0 4px 16px rgba(14, 125, 214, 0.45),
            inset 0 1px 0 rgba(255, 255, 255, 0.35);
          transition: all 0.2s ease;
          cursor: pointer;
          white-space: nowrap;
        }
        .book-btn:hover {
          transform: translateY(-1px);
          box-shadow:
            0 8px 24px rgba(14, 125, 214, 0.55),
            inset 0 1px 0 rgba(255, 255, 255, 0.35);
          background: linear-gradient(135deg, #5ab8ff 0%, #1a8de8 100%);
        }
        .book-btn:active {
          transform: translateY(0);
          box-shadow: 0 2px 8px rgba(14, 125, 214, 0.4);
        }

        /* ── Logo icon ── */
        .logo-glass {
          width: 36px;
          height: 36px;
          border-radius: 30px;
          background: linear-gradient(135deg, #66BFFF, #0b6cb8);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 14px rgba(14, 125, 214, 0.4), inset 0 1px 0 rgba(255,255,255,0.35);
        }

        /* ── Divider (hidden) ── */
        .nav-divider {
          display: none;
        }

        /* ── Mobile fullscreen overlay ── */
        .mobile-menu-overlay {
          position: fixed;
          inset: 0;
          z-index: 60;
          background: rgba(6, 14, 30, 0.97);
          backdrop-filter: blur(24px) saturate(150%);
          -webkit-backdrop-filter: blur(24px) saturate(150%);
          display: flex;
          flex-direction: column;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .mobile-menu-overlay.open {
          opacity: 1;
          pointer-events: all;
        }

        .mobile-menu-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 18px 28px;
          font-family: 'Playfair Display', serif;
          font-size: 1.35rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          transition: color 0.2s ease, background 0.2s ease;
          background: transparent;
          border-left: none;
          border-right: none;
          border-top: none;
          cursor: pointer;
        }
        .mobile-menu-link:hover, .mobile-menu-link:active {
          color: #66BFFF;
          background: rgba(102, 191, 255, 0.06);
        }

        .mobile-sub-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 28px 14px 44px;
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          font-weight: 500;
          color: rgba(200, 220, 255, 0.75);
          text-decoration: none;
          transition: color 0.15s ease, background 0.15s ease;
        }
        .mobile-sub-link:hover, .mobile-sub-link:active {
          color: #66BFFF;
          background: rgba(102, 191, 255, 0.08);
        }

        /* ── Hamburger button ── */
        .hamburger-btn {
          display: none;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.08);
          cursor: pointer;
          transition: background 0.2s ease;
          flex-shrink: 0;
        }
        .hamburger-btn:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        @media (max-width: 768px) {
          .hamburger-btn {
            display: flex;
          }
          .desktop-center-links {
            display: none !important;
          }
          .desktop-book-btn {
            display: none !important;
          }
        }
      `}</style>

      {/* Fixed outer shell */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: isScrolled ? "10px 16px" : "18px 16px",
          transition: "padding 0.35s ease",
          pointerEvents: "none",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <nav
          className={`liquid-nav${isScrolled ? " scrolled" : ""}`}
          style={{
            width: "min(1280px, 100%)",
            borderRadius: "999px",
            padding: "0 10px",
            transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
            pointerEvents: "all",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "64px",
            }}
          >
            {/* LEFT — Logo + Name */}
            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "0 8px 0 4px",
                textDecoration: "none",
                flexShrink: 0,
              }}
            >
              <img
                src={logoUrl}
                alt="SKR Tours Logo"
                style={{ height: "42px", width: "auto", objectFit: "contain", borderRadius: "30%" }}
              />
              <span
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "rgba(255,255,255,0.95)",
                  letterSpacing: "0.04em",
                  whiteSpace: "nowrap",
                }}
              >
                SKR TOURS
              </span>
            </Link>

            {/* CENTER — Desktop Nav links */}
            <div
              className="desktop-center-links"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                flex: 1,
              }}
            >
              <div className="nav-divider" />

              {isHome ? (
                <a href="#home" className="nav-link">Home</a>
              ) : (
                <Link to="/" className="nav-link">Home</Link>
              )}

              {/* Tour Packages dropdown */}
              <div ref={dropdownRef} style={{ position: "relative" }}>
                <button
                  className="nav-link"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                >
                  Tour Packages
                  <ChevronDown
                    style={{
                      width: 14,
                      height: 14,
                      transition: "transform 0.22s",
                      transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>

                {isDropdownOpen && (
                  <div
                    className="dropdown-glass"
                    onMouseLeave={() => setIsDropdownOpen(false)}
                    style={{
                      position: "absolute",
                      top: "calc(100% + 12px)",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 288,
                      zIndex: 100,
                      padding: "8px 0",
                    }}
                  >
                    {packageLinks.map((pkg) => (
                      <Link
                        key={pkg.id}
                        to={`/package/${pkg.id}`}
                        className="dropdown-item"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <span style={{ fontSize: "1.1rem" }}>{pkg.icon}</span>
                        {pkg.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {isHome ? (
                <>
                  <a href="#about" className="nav-link">About Us</a>
                  <a href="#contact" className="nav-link">Contact</a>
                </>
              ) : (
                <>
                  <Link to="/#about" className="nav-link">About Us</Link>
                  <Link to="/#contact" className="nav-link">Contact</Link>
                </>
              )}

              <div className="nav-divider" />
            </div>

            {/* RIGHT — Book Now (desktop) */}
            <div className="desktop-book-btn" style={{ display: "flex", alignItems: "center", paddingRight: "4px" }}>
              {isHome ? (
                <a href="#packages">
                  <button className="book-btn">Book Now</button>
                </a>
              ) : (
                <a href="#contact-form">
                  <button className="book-btn">Book Now</button>
                </a>
              )}
            </div>

            {/* RIGHT — Hamburger (mobile) */}
            <button
              className="hamburger-btn"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu style={{ width: 22, height: 22, color: "#fff" }} />
            </button>
          </div>
        </nav>
      </div>

      {/* ── Mobile Fullscreen Menu Overlay ── */}
      <div className={`mobile-menu-overlay${isMobileMenuOpen ? " open" : ""}`}>
        {/* Top bar with logo + close */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 20px 16px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <Link
            to="/"
            onClick={closeMobileMenu}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
            }}
          >
            <img
              src={logoUrl}
              alt="SKR Tours Logo"
              style={{ height: "40px", width: "auto", objectFit: "contain", borderRadius: "30%" }}
            />
            <span
              style={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 700,
                fontSize: "1.1rem",
                color: "rgba(255,255,255,0.95)",
                letterSpacing: "0.04em",
              }}
            >
              SKR TOURS
            </span>
          </Link>
          <button
            onClick={closeMobileMenu}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 42,
              height: 42,
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.08)",
              cursor: "pointer",
            }}
            aria-label="Close menu"
          >
            <X style={{ width: 22, height: 22, color: "#fff" }} />
          </button>
        </div>

        {/* Menu links */}
        <div style={{ flex: 1, overflowY: "auto", paddingTop: "8px" }}>
          {/* Home */}
          {isHome ? (
            <a href="#home" className="mobile-menu-link" onClick={closeMobileMenu}>
              Home
            </a>
          ) : (
            <Link to="/" className="mobile-menu-link" onClick={closeMobileMenu}>
              Home
            </Link>
          )}

          {/* Tour Packages (expandable) */}
          <button
            className="mobile-menu-link"
            onClick={() => setIsMobilePackagesOpen(!isMobilePackagesOpen)}
          >
            Tour Packages
            <ChevronDown
              style={{
                width: 20,
                height: 20,
                color: "#66BFFF",
                transition: "transform 0.25s ease",
                transform: isMobilePackagesOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </button>

          {/* Sub-links for packages */}
          <div
            style={{
              maxHeight: isMobilePackagesOpen ? "500px" : "0px",
              overflow: "hidden",
              transition: "max-height 0.35s ease",
              background: "rgba(0,0,0,0.15)",
            }}
          >
            {packageLinks.map((pkg) => (
              <Link
                key={pkg.id}
                to={`/package/${pkg.id}`}
                className="mobile-sub-link"
                onClick={closeMobileMenu}
              >
                <span style={{ fontSize: "1.15rem" }}>{pkg.icon}</span>
                {pkg.label}
              </Link>
            ))}
          </div>

          {/* About Us */}
          {isHome ? (
            <a href="#about" className="mobile-menu-link" onClick={closeMobileMenu}>
              About Us
            </a>
          ) : (
            <Link to="/#about" className="mobile-menu-link" onClick={closeMobileMenu}>
              About Us
            </Link>
          )}

          {/* Contact */}
          {isHome ? (
            <a href="#contact" className="mobile-menu-link" onClick={closeMobileMenu}>
              Contact
            </a>
          ) : (
            <Link to="/#contact" className="mobile-menu-link" onClick={closeMobileMenu}>
              Contact
            </Link>
          )}
        </div>

        {/* Bottom CTA */}
        <div style={{ padding: "20px 28px 32px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          {isHome ? (
            <a href="#packages" onClick={closeMobileMenu} style={{ textDecoration: "none" }}>
              <button
                className="book-btn"
                style={{ width: "100%", padding: "16px", fontSize: "1rem", borderRadius: "16px" }}
              >
                Book Your Yatra Now
              </button>
            </a>
          ) : (
            <a href="#contact-form" onClick={closeMobileMenu} style={{ textDecoration: "none" }}>
              <button
                className="book-btn"
                style={{ width: "100%", padding: "16px", fontSize: "1rem", borderRadius: "16px" }}
              >
                Book Your Yatra Now
              </button>
            </a>
          )}
        </div>
      </div>
    </>
  );
}
