import { useState, useEffect, useRef } from "react";
import { ChevronDown, Mountain } from "lucide-react";
import { Link, useLocation } from "react-router";

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

        /* ── Nav text: white on hero dark bg, adapts when scrolled ── */
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
          background: linear-gradient(135deg, #3fa9f5 0%, #0e7dd6 100%);
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
          border-radius: 11px;
          background: linear-gradient(135deg, #3fa9f5, #0b6cb8);
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
      `}</style>

      {/* Fixed outer shell — pointer-events none so page underneath is clickable */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: isScrolled ? "10px 24px" : "18px 24px",
          transition: "padding 0.35s ease",
          pointerEvents: "none",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <nav
          className={`liquid-nav${isScrolled ? " scrolled" : ""}`}
          style={{
            width: "min(1280px, calc(100% - 0px))",
            borderRadius: "999px",
            padding: "0 10px",
            transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
            pointerEvents: "all",
          }}
        >
          {/* ── 3-column grid: logo | center links | book now ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr auto",
              alignItems: "center",
              height: "70px",
              gap: "8px",
            }}
          >
            {/* LEFT — Logo */}
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
              <div className="logo-glass">
                <Mountain style={{ width: 18, height: 18, color: "#fff" }} />
              </div>
              <span
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "rgba(255,255,255,0.95)",
                  letterSpacing: "0.04em",
                  whiteSpace: "nowrap",
                }}
              >
                SKS TOURS
              </span>
            </Link>

            {/* CENTER — Nav links, truly centered */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
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

            {/* RIGHT — Book Now */}
            <div style={{ display: "flex", alignItems: "center", paddingRight: "4px" }}>
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
          </div>
        </nav>
      </div>
    </>
  );
}
