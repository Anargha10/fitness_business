import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Story", href: "#story" },
    { label: "Philosophy", href: "#philosophy" },
    // Added openInNewTab flag to explicitly isolate external resources
    { label: "Course", href: "https://share.eu.articulate.com/9WREUeKNt0EC7WT_JQHBf", openInNewTab: true },
    { label: "Coaching", href: "#coaching" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        style={{
          position: "fixed",
          top: 20,
          left: 0,
          width: "100%", 
          zIndex: 9999,
          boxSizing: "border-box",
          pointerEvents: "none" 
        }}
      >
        <div 
          className="container" 
          style={{
            pointerEvents: "auto", 
            padding: "16px 28px",
            borderRadius: "20px",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            background: scrolled ? "rgba(10,10,10,0.92)" : "rgba(10,10,10,0.5)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxSizing: "border-box"
          }}
        >
          <div className="nav-inner">
            {/* Logo */}
            <a
              href="#home"
              style={{
                fontWeight: 900,
                fontSize: "1.2rem",
                letterSpacing: "1px",
                color: "white",
              }}
            >
              ANARGHA
            </a>

            {/* Desktop Links Group */}
            <div className="nav-links">
              {links.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className="nav-link"
                  // Conditionally applies attributes only if the item configuration demands it
                  target={link.openInNewTab ? "_blank" : undefined}
                  rel={link.openInNewTab ? "noopener noreferrer" : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop Action Call to Action */}
            <a
              href="https://wa.me/919007816552"
              target="_blank"
              rel="noreferrer"
              className="nav-cta"
            >
              Start Transformation
            </a>

            {/* Mobile Toggle Trigger */}
            <button
              className="menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ fontSize: "1.8rem", color: "white", padding: 0 }}
            >
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Dropdown sheet */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -15, x: "-50%" }}
            transition={{ duration: 0.2 }}
            className="mobile-menu"
            style={{
              position: "fixed",
              zIndex: 9998,
              boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
              display: "flex" 
            }}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                target={link.openInNewTab ? "_blank" : undefined}
                rel={link.openInNewTab ? "noopener noreferrer" : undefined}
                style={{
                  paddingBottom: "10px",
                  borderBottom: "1px solid rgba(255,255,255,0.04)"
                }}
              >
                {link.label}
              </a>
            ))}

            <a
               href="https://wa.me/919007816552?text=Hi%20Anargha,%20I%20found%20your%20website%20and%20I'm%20interested%20in%20your%20Bodyweight%20Athlete%20Coaching.%0A%0ACurrent%20Fitness%20Level:%0AGoals:%0AAge:%0AEquipment%20Available: "
              target="_blank"
              rel="noreferrer"
              className="mobile-cta"
              onClick={() => setMobileOpen(false)}
              style={{ fontWeight: 700, marginTop: "10px" }}
            >
              Start Transformation
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}