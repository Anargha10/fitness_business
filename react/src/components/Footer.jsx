import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "120px 0 50px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "rgba(255,107,0,0.08)",
          filter: "blur(140px)",
          top: "-200px",
          right: "-200px",
        }}
      />

      <div className="container">
        {/* Top CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            marginBottom: "100px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(2.5rem,6vw,5rem)",
              lineHeight: 0.95,
              fontWeight: 900,
              marginBottom: "24px",
            }}
          >
            BUILD STRENGTH.
            <br />
            ANYWHERE.
          </h2>

          <p
            style={{
              color: "#9a9a9a",
              maxWidth: "650px",
              margin: "0 auto",
              lineHeight: 1.8,
              fontSize: "1.1rem",
            }}
          >
            No fancy gym memberships.
            No complicated plans.
            Just a proven system built through years of
            experimentation and real-world training.
          </p>
        </motion.div>

        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div
              style={{
                fontSize: "2rem",
                fontWeight: 900,
                marginBottom: "18px",
              }}
            >
              ANARGHA
            </div>

            <p
              style={{
                color: "#8a8a8a",
                lineHeight: 1.8,
                maxWidth: "350px",
              }}
            >
              Bodyweight Athlete.
              Calisthenics Practitioner.
              Engineer.
              Helping people build athletic physiques
              without depending on expensive gyms.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                marginBottom: "20px",
                fontWeight: 700,
              }}
            >
              Navigation
            </h4>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <a href="#" className="footer-link">
                Home
              </a>

              <a href="#course-preview" className="footer-link">
                Course
              </a>

              <a href="#coaching" className="footer-link">
                Coaching
              </a>

              <a href="#faq" className="footer-link">
                FAQ
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4
              style={{
                marginBottom: "20px",
                fontWeight: 700,
              }}
            >
              Resources
            </h4>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <a
                href="https://share.eu.articulate.com/9WREUeKNt0EC7WT_JQHBf"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                Free Course
              </a>

              <a
                href="https://wa.me/919007816552"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                Coaching
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4
              style={{
                marginBottom: "20px",
                fontWeight: 700,
              }}
            >
              Connect
            </h4>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <a
                href="https://instagram.com/anargha_trains"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                Instagram
              </a>

              <a
               href="mailto:anarghabhatta369@gmail.com?subject=Bodyweight%20Athlete%20-%20Coaching%20Inquiry"
                    target="_blank"
                    rel="noopener noreferrer"
                className="footer-link"
              >
                Email
              </a>

              <a
                href="https://wa.me/919007816552"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            marginTop: "80px",
            marginBottom: "30px",
            height: "1px",
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.15), transparent)",
          }}
        />

        {/* Bottom */}
        <div className="footer-bottom">
          <p
            style={{
              color: "#666",
            }}
          >
             © {new Date().getFullYear()} Anargha Bhattacharjee. All Rights Reserved.
          </p>

          <p
            style={{
              color: "#ff6b00",
              fontWeight: 600,
            }}
          >
            Train Anywhere • Build Strength • Stay Consistent
          </p>
        </div>
      </div>
    </footer>
  );
}