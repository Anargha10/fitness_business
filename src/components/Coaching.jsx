import { motion } from "framer-motion";

const coachingBenefits = [
  {
    title: "Personalized Training Plan",
    desc: "Get a program tailored to your current level, goals, equipment and schedule.",
  },
  {
    title: "Form & Technique Feedback",
    desc: "Avoid years of mistakes by receiving direct feedback on your exercises.",
  },
  {
    title: "Progress Tracking",
    desc: "Know exactly what to improve next instead of guessing your way forward.",
  },
  {
    title: "Direct Access To Me",
    desc: "Ask questions, solve plateaus and get guidance from someone who's walked the path.",
  },
];

export default function Coaching() {
  return (
    <section id="coaching"
      style={{
        padding: "clamp(60px, 10vw, 140px) 0",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#000000",
        color: "#ffffff"
      }}
    >
      {/* Responsive adjustments injection */}
      <style>{`
        .coaching-grid {
          display: grid;
          grid-template-columns: 1fr; /* Stacks vertically on mobile by default */
          gap: 40px;
        }
        
        @media (min-width: 992px) {
          .coaching-grid {
            grid-template-columns: 1.1fr 0.9fr; /* Restores high-end dual column layout for desktop */
            gap: 60px;
          }
        }

        .main-card {
          padding: 30px 20px; /* Comfortable padding on smartphones */
        }

        @media (min-width: 768px) {
          .main-card {
            padding: 60px; /* Deep luxury padding on desktop structures */
          }
        }
      `}</style>

      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-200px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "rgba(255,107,0,0.06)",
          filter: "blur(140px)",
          pointerEvents: "none"
        }}
      />

      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            color: "#ff6b00",
            fontWeight: 700,
            letterSpacing: "3px",
            marginBottom: "18px",
          }}
        >
          PERSONAL COACHING
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontSize: "clamp(2.5rem, 6.5vw, 5rem)",
            lineHeight: 1.0,
            fontWeight: 900,
            marginBottom: "30px",
            letterSpacing: "-0.03em"
          }}
        >
          DON'T WASTE
          <br />
          YEARS FIGURING
          <br />
          IT OUT ALONE
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            maxWidth: "750px",
            color: "#9a9a9a",
            lineHeight: 1.8,
            fontSize: "1.05rem",
            marginBottom: "60px",
          }}
        >
          Everything inside the course is based on my own journey. But coaching is different.
          Instead of spending years making the same mistakes I made, you'll get direct guidance,
          faster progress and a clear roadmap.
        </motion.p>

        {/* Main Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="main-card"
          style={{
            background: "linear-gradient(135deg, #101010 0%, #070707 100%)",
            border: "1px solid #1f1f1f",
            borderRadius: "32px",
            marginBottom: "60px",
          }}
        >
          <div className="coaching-grid">
            {/* Left Column */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div
                style={{
                  display: "inline-block",
                  alignSelf: "flex-start",
                  padding: "8px 16px",
                  borderRadius: "999px",
                  background: "rgba(255,107,0,0.12)",
                  color: "#ff6b00",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  letterSpacing: "1px",
                  marginBottom: "20px",
                }}
              >
                LIMITED SPOTS
              </div>

              <h3
                style={{
                  fontSize: "clamp(2rem, 4vw, 2.6rem)",
                  fontWeight: 900,
                  marginBottom: "16px",
                  letterSpacing: "-0.02em"
                }}
              >
                1-On-1 Coaching
              </h3>

              <p
                style={{
                  color: "#a3a3a3",
                  lineHeight: 1.8,
                  fontSize: "1rem",
                  marginBottom: "28px",
                }}
              >
                This isn't generic fitness advice. You'll receive individual guidance,
                accountability and a system built around your specific goals.
              </p>

              {/* Checklist Features */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "14px",
                  marginBottom: "10px"
                }}
              >
                {[
                  "Custom Workout Programming",
                  "Technique Analysis",
                  "Weekly Check-ins",
                  "Progress Tracking",
                  "Nutrition Guidance",
                  "Direct Support",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      color: "#e5e5e5",
                      fontSize: "0.95rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px"
                    }}
                  >
                    <span style={{ color: "#ff6b00", fontWeight: "bold" }}>✓</span> {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column / Application Box */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div
                style={{
                  background: "#050505",
                  border: "1px solid #1a1a1a",
                  borderRadius: "24px",
                  padding: "clamp(24px, 5vw, 36px)",
                }}
              >
                <h4
                  style={{
                    fontSize: "1.45rem",
                    marginBottom: "12px",
                    fontWeight: 800,
                    letterSpacing: "-0.01em"
                  }}
                >
                  Coaching Application
                </h4>

                <p
                  style={{
                    color: "#8f8f8f",
                    marginBottom: "28px",
                    lineHeight: 1.6,
                    fontSize: "0.95rem"
                  }}
                >
                  Tell me about your goals and current level. I'll personally review your application.
                </p>

                <motion.a
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 35px rgba(255,107,0,0.35)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/919007816552?text=Hi%20Anargha,%20I%20found%20your%20website%20and%20I'm%20interested%20in%20your%20Bodyweight%20Athlete%20Coaching.%0A%0ACurrent%20Fitness%20Level:%0AGoals:%0AAge:%0AEquipment%20Available: "
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "18px 24px",
                    borderRadius: "999px",
                    textDecoration: "none",
                    background: "linear-gradient(135deg, #ff6b00, #ff8a33)",
                    color: "white",
                    fontWeight: 800,
                    fontSize: "1rem",
                    marginBottom: "16px",
                  }}
                >
                  Start Your Transformation
                </motion.a>

                <div
                  style={{
                    textAlign: "center",
                    color: "#666666",
                    fontSize: "0.85rem",
                  }}
                >
                  Response usually within 24 hours
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Lower Benefits Block */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {coachingBenefits.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{
                y: -6,
                borderColor: "#333333",
              }}
              style={{
                background: "#080808",
                border: "1px solid #1a1a1a",
                borderRadius: "24px",
                padding: "28px",
              }}
            >
              <h4
                style={{
                  fontSize: "1.25rem",
                  marginBottom: "12px",
                  fontWeight: 700,
                  letterSpacing: "-0.01em"
                }}
              >
                {item.title}
              </h4>

              <p
                style={{
                  color: "#8a8a8a",
                  lineHeight: 1.7,
                  fontSize: "0.95rem"
                }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}