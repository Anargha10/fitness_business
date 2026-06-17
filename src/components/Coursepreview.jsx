import { motion } from "framer-motion";

const lessons = [
  {
    number: "01",
    title: "The Bodyweight Athlete Mindset",
    result: "Build discipline, consistency and the identity of an athlete.",
  },
  {
    number: "02",
    title: "Progressive Overload",
    result: "Learn how to keep getting stronger without needing a gym.",
  },
  {
    number: "03",
    title: "Push-Up Mastery",
    result: "Develop chest, shoulders and triceps using bodyweight training.",
  },
  {
    number: "04",
    title: "Lower Body Foundations",
    result: "Build powerful legs with squats, lunges and bodyweight progressions.",
  },
  {
    number: "05",
    title: "Core Strength Essentials",
    result: "Create stability, balance and athletic movement.",
  },
  {
    number: "06",
    title: "Pull-Up Progressions",
    result: "Unlock real upper-body strength and pulling power.",
  },
  {
    number: "07",
    title: "Advanced Calisthenics",
    result: "Explosive movements, dips and athletic performance training.",
  },
  {
    number: "08",
    title: "Nutrition Simplified",
    result: "Lose fat and build muscle without restrictive dieting.",
  },
  {
    number: "09",
    title: "Recovery & Mobility",
    result: "Stay mobile, healthy and injury resistant.",
  },
  {
    number: "10",
    title: "Sustainable Habits",
    result: "Build routines that last for years, not weeks.",
  },
  {
    number: "11",
    title: "Long-Term Progress",
    result: "Track improvements and continue progressing independently.",
  },
];

export default function CoursePreview() {
  return (
    <section id="course-preview"
      style={{
        padding: "140px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-200px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "rgba(255,107,0,0.08)",
          filter: "blur(140px)",
        }}
      />

      <div className="container">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            color: "#ff6b00",
            fontWeight: 700,
            letterSpacing: "3px",
            marginBottom: "20px",
          }}
        >
          COURSE BREAKDOWN
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontSize: "clamp(3rem,7vw,5.5rem)",
            lineHeight: 0.95,
            fontWeight: 900,
            marginBottom: "30px",
          }}
        >
          THE COMPLETE
          <br />
          BODYWEIGHT ATHLETE
          <br />
          ROADMAP
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            color: "#9a9a9a",
            maxWidth: "750px",
            lineHeight: 1.8,
            fontSize: "1.1rem",
            marginBottom: "90px",
          }}
        >
          11 structured lessons designed to take you from beginner
          to a stronger, leaner and more athletic version of yourself.
        </motion.p>

        {/* Timeline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {lessons.map((lesson, index) => (
            <motion.div
              key={lesson.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.05,
              }}
              whileHover={{
                x: 8,
                scale: 1.01,
              }}
              style={{
                background:
                  "linear-gradient(180deg,#0d0d0d 0%, #080808 100%)",
                border: "1px solid #1f1f1f",
                borderRadius: "28px",
                padding: "32px",
                display: "flex",
                gap: "30px",
                alignItems: "flex-start",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  fontSize: "3rem",
                  fontWeight: 900,
                  color: "#ff6b00",
                  minWidth: "90px",
                }}
              >
                {lesson.number}
              </div>

              <div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "12px",
                    fontWeight: 700,
                  }}
                >
                  {lesson.title}
                </h3>

                <p
                  style={{
                    color: "#a3a3a3",
                    lineHeight: 1.8,
                  }}
                >
                  {lesson.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Outcomes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            marginTop: "100px",
            padding: "50px",
            borderRadius: "30px",
            border: "1px solid #1f1f1f",
            background:
              "linear-gradient(135deg, rgba(255,107,0,0.08), rgba(255,255,255,0.01))",
          }}
        >
          <h3
            style={{
              fontSize: "2rem",
              marginBottom: "30px",
              fontWeight: 800,
            }}
          >
            What You'll Walk Away With
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",
              gap: "20px",
            }}
          >
            {[
              "Stronger Upper Body",
              "Better Physique",
              "Sustainable Habits",
              "Practical Nutrition",
              "Injury Prevention",
              "A Complete Training System",
            ].map((item) => (
              <div
                key={item}
                style={{
                  color: "#d4d4d4",
                  fontSize: "1.05rem",
                }}
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            marginTop: "80px",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: "clamp(2rem,4vw,3rem)",
              marginBottom: "20px",
              fontWeight: 900,
            }}
          >
            Ready To Start?
          </h3>

          <p
            style={{
              color: "#9a9a9a",
              marginBottom: "35px",
            }}
          >
            Access the complete course and begin your transformation.
          </p>

          <motion.a
            href="https://share.eu.articulate.com/9WREUeKNt0EC7WT_JQHBf"
            target="_blank"
            rel="noreferrer"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.98,
            }}
            style={{
              display: "inline-block",
              padding: "20px 40px",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: 700,
              color: "#fff",
              background:
                "linear-gradient(135deg,#ff6b00,#ff8f3f)",
              boxShadow:
                "0 0 40px rgba(255,107,0,0.35)",
            }}
          >
            Watch The Free Course →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}