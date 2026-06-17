import { motion } from "framer-motion";

const principles = [
  {
    icon: "🌍",
    title: "Train Anywhere",
    description:
      "You don't need a fancy gym membership. A floor, a pull-up bar and consistency are enough.",
  },
  {
    icon: "📈",
    title: "Progressive Overload",
    description:
      "Muscles grow when they're challenged. We increase difficulty intelligently without expensive equipment.",
  },
  {
    icon: "🔥",
    title: "Consistency Wins",
    description:
      "Motivation fades. Systems stay. Results come from showing up even on average days.",
  },
  {
    icon: "💪",
    title: "Strength Creates Aesthetics",
    description:
      "Stop chasing abs directly. Build strength first and the physique follows naturally.",
  },
  {
    icon: "✅",
    title: "Built From Experience",
    description:
      "Everything taught inside this course comes from years of experimentation and real-world results.",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy"
      style={{
        padding: "100px 0",
        backgroundColor: "#000000",
        color: "#ffffff",
        overflow: "hidden"
      }}
    >
      {/* Styles combining desktop hover sweeps with automatic mobile on-scroll triggers */}
      <style>{`
        @keyframes mobileShine {
          0% { left: -150%; }
          100% { left: 150%; }
        }

        .premium-card {
          position: relative;
          overflow: hidden;
        }

        .premium-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -150%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.05) 30%,
            rgba(255, 255, 255, 0.15) 50%,
            rgba(255, 255, 255, 0.05) 70%,
            transparent
          );
          transform: skewX(-25deg);
          pointer-events: none;
        }

        /* Desktop: Trigger shine on desktop hover */
        @media (min-width: 1024px) {
          .premium-card:hover::before {
            left: 150%;
            transition: left 0.8s cubic-bezier(0.25, 1, 0.5, 1);
          }
        }

        /* Mobile/Tablet: Fire the shine automatically using framer-motion visibility hooks */
        .mobile-shine-active::before {
          animation: mobileShine 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
      `}</style>

      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            color: "#ff6b00",
            letterSpacing: "3px",
            fontWeight: 700,
            marginBottom: "20px",
          }}
        >
          MY PHILOSOPHY
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: "clamp(3rem,7vw,5rem)",
            lineHeight: 0.95,
            fontWeight: 900,
            marginBottom: "30px",
            letterSpacing: "-0.03em"
          }}
        >
          FITNESS SHOULD
          <br />
          FIT YOUR LIFE.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            color: "#9a9a9a",
            maxWidth: "750px",
            lineHeight: 1.8,
            marginBottom: "60px",
            fontSize: "1.1rem"
          }}
        >
          Most people fail because they're given plans they cannot sustain.
          My approach is simple: train consistently, get stronger, and build
          a physique you're proud of without sacrificing your studies or career.
        </motion.p>

        {/* CARDS GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "24px",
          }}
        >
          {principles.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              // Automatically appends the tracking class when the card is scrolled into view on mobile
              whileInViewA={true} 
              className="premium-card mobile-shine-active"
              whileHover={{
                y: -6,
                borderColor: "#333333",
                boxShadow: "0 20px 40px rgba(0,0,0,0.6)"
              }}
              transition={{
                type: "spring",
                stiffness: 140,
                damping: 24,
                delay: (index % 3) * 0.15 
              }}
              style={{
                background: "linear-gradient(180deg, #0a0a0a 0%, #050505 100%)",
                border: "1px solid #1c1c1c",
                borderRadius: "24px",
                padding: "36px 28px",
              }}
            >
              <div
                style={{
                  fontSize: "2.2rem",
                  marginBottom: "20px",
                  display: "inline-block",
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  marginBottom: "12px",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  letterSpacing: "-0.01em"
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#8a8a8a",
                  lineHeight: 1.7,
                  fontSize: "0.95rem"
                }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CALLOUT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            marginTop: "80px",
            textAlign: "center",
            padding: "50px 30px",
            borderRadius: "32px",
            background:
              "linear-gradient(135deg, rgba(255,107,0,0.04), rgba(255,255,255,0.01))",
            border: "1px solid #141414",
          }}
        >
          <h3
            style={{
              fontSize: "clamp(1.6rem,4vw,2.6rem)",
              fontWeight: 900,
              lineHeight: 1.2,
              letterSpacing: "-0.02em"
            }}
          >
            You Don't Need Perfect Genetics.
            <br />
            <span style={{ color: "#ff6b00" }}>You Need A Better System.</span>
          </h3>
        </motion.div>
      </div>
    </section>
  );
}