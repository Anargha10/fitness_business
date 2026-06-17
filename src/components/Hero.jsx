import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "120px",
        backgroundColor: "#000000",
        color: "#ffffff"
      }}
    >
      {/* Universal Grid Layout Styles */}
      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr; /* 1 Column on Mobile */
          gap: 60px;
          align-items: center;
          width: 100%;
        }

        .hero-image {
          position: relative;
          width: 100%;
          max-width: 540px;
          aspect-ratio: 4 / 5;
          border-radius: 36px;
          overflow: hidden;
          justify-self: center; /* Center the image container block */
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        /* Desktop Layout Override */
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.1fr 0.9fr; /* Perfect Dual Column Layout */
            gap: 40px;
          }
          .hero-image {
            justify-self: end; /* Pulls image neatly to the right margin bounds */
          }
        }
      `}</style>

      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "rgba(255,107,0,0.12)",
          filter: "blur(150px)",
          top: "-250px",
          right: "-150px",
          zIndex: 0,
          pointerEvents: "none"
        }}
      />

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          paddingTop: "40px",
          maxWidth: "1200px",
          margin: "0 auto",
          paddingLeft: "20px",
          paddingRight: "20px",
          width: "100%"
        }}
      >
        <div className="hero-grid">
          {/* LEFT CONTENT */}
          <div>
            {/* TOP BADGE */}
            <motion.div className="hero-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 22px",
                borderRadius: "999px",
                border: "1px solid #1f1f1f",
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(10px)",
                marginBottom: "28px",
                color: "#d4d4d4",
                fontSize: "0.9rem",
              }}
            >
              ⚡ Calisthenics • Coaching • Movements
            </motion.div>

            {/* LABEL */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{
                color: "#ff6b00",
                letterSpacing: "3px",
                fontWeight: "700",
                marginBottom: "18px",
              }}
            >
              BODYWEIGHT ATHLETE
            </motion.p>

            {/* HEADLINE */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                display: "block",
                width: "100%",
                fontSize: "clamp(2.8rem, 7vw, 5.5rem)", // Fluid scaling for mobile layouts
                lineHeight: 0.95,
                fontWeight: 900,
                marginBottom: "28px",
                background: "linear-gradient(135deg, #FFFFFF 0%, #E2E8F0 45%, #94A3B8 75%, #475569 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
                letterSpacing: "-0.04em",
                textTransform: "uppercase",
              }}
            >
              TRANSFORM
              <br />
              YOUR
              <br />
              PHYSIQUE
              <br />
              ANYWHERE
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                color: "#a3a3a3",
                fontSize: "1.1rem",
                lineHeight: 1.8,
                maxWidth: "580px",
              }}
            >
              Build muscle, lose fat and become athletic using bodyweight
              training, simple nutrition and relentless consistency.
              <br />
              <br />
              No expensive gym memberships. No complicated workout plans.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                display: "flex",
                gap: "16px",
                marginTop: "40px",
                flexWrap: "wrap",
              }}
            >
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="https://wa.me/919007816552?text=Hi%20Anargha,%20I%20found%20your%20website%20and%20I'm%20interested%20in%20your%20Bodyweight%20Athlete%20Coaching.%0A%0ACurrent%20Fitness%20Level:%0AGoals:%0AAge:%0AEquipment%20Available:"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#ff6b00",
                  color: "#fff",
                  padding: "18px 34px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  cursor: "pointer",
                  fontWeight: "700",
                  fontSize: "1rem",
                  boxShadow: "0 10px 30px rgba(255,107,0,0.25)",
                }}
              >
                Start Your Transformation
              </motion.a>

              <a
                href="https://share.eu.articulate.com/9WREUeKNt0EC7WT_JQHBf"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    background: "transparent",
                    color: "#fff",
                    border: "1px solid #2a2a2a",
                    padding: "18px 34px",
                    borderRadius: "999px",
                    cursor: "pointer",
                    fontWeight: "600",
                    fontSize: "1rem",
                  }}
                >
                  Watch Free Course
                </motion.button>
              </a>
            </motion.div>

            {/* TRUST INDICATORS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "18px",
                marginTop: "36px",
                color: "#737373",
                fontSize: "0.95rem",
                fontWeight: 500
              }}
            >
              <span>✓ No Gym Required</span>
              <span>✓ Beginner Friendly</span>
              <span>✓ 11 Lesson Course</span>
            </motion.div>

            {/* FOOTNOTE */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{
                marginTop: "20px",
                color: "#404040",
                fontSize: "0.9rem",
              }}
            >
              Train anywhere • Minimal equipment • Real results
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
            transition={{
              duration: 0.8,
              y: {
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              },
            }}
          >
            <motion.img
              src="/hero.jpeg"
              alt="Bodyweight Athlete"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            {/* Floating Label Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                background: "rgba(10, 10, 10, 0.65)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "16px",
                padding: "14px 20px",
              }}
            >
              <div style={{ color: "#fff", fontWeight: "700", fontSize: "0.95rem" }}>
                Coach Anargha
              </div>
              <div style={{ color: "#a3a3a3", fontSize: "0.8rem", marginTop: "2px" }}>
                Bodyweight Athlete
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}