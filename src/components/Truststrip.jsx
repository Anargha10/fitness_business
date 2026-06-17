import { motion } from "framer-motion";

const items = [
  "11 LESSON COURSE",
  "BODYWEIGHT TRAINING",
  "NO GYM REQUIRED",
  "NUTRITION GUIDANCE",
  "MOBILITY TRAINING",
  "BEGINNER FRIENDLY",
  "REAL WORLD FITNESS",
  "CALISTHENICS",
];

export default function TrustStrip() {
  return (
    <section
      style={{
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "#050505",
        padding: "24px 0",
      }}
    >
      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
        style={{
          display: "flex",
          width: "max-content",
          gap: "60px",
        }}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                color: "#ff6b00",
                fontSize: "1.2rem",
              }}
            >
              ●
            </span>

            <span
              style={{
                color: "#f5f5f5",
                fontWeight: 700,
                letterSpacing: "1px",
                fontSize: "0.95rem",
              }}
            >
              {item}
            </span>
          </div>
        ))}
      </motion.div>
      <div className="container">
  <div
    style={{
      marginTop: "70px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
      gap: "24px",
    }}
  >
    {[
      {
        number: "11",
        label: "Structured Lessons",
      },
      {
        number: "100%",
        label: "Bodyweight Focused",
      },
      {
        number: "0",
        label: "Gym Membership Required",
      },
      {
        number: "∞",
        label: "Lifetime Application",
      },
    ].map((stat) => (
      <motion.div
        whileHover={{
          y: -6,
          scale: 1.02,
        }}
        key={stat.label}
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "24px",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "3rem",
            fontWeight: 900,
            color: "#ff6b00",
          }}
        >
          {stat.number}
        </div>

        <div
          style={{
            marginTop: "12px",
            color: "#b5b5b5",
          }}
        >
          {stat.label}
        </div>
      </motion.div>
    ))}
  </div>
</div>
    </section>
  );
}