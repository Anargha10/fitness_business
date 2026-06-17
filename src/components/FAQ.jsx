import { motion } from "framer-motion";

const faqs = [
  {
    question: "Can I build muscle without a gym?",
    answer:
      "Absolutely. I built most of my foundation using push-ups, backpacks, household objects and basic bodyweight exercises. Muscle growth comes from progressive overload, not expensive machines.",
  },
  {
    question: "What if I'm a complete beginner?",
    answer:
      "Perfect. This course starts from the fundamentals and gradually progresses toward advanced exercises. You don't need prior experience.",
  },
  {
    question: "I don't have a pull-up bar.",
    answer:
      "That's fine. You can begin immediately. Most beginners don't need a pull-up bar on day one. The course shows you how to build strength first.",
  },
  {
    question: "How much time do I need?",
    answer:
      "Most workouts can be completed in 30–45 minutes. Consistency matters more than spending hours training.",
  },
  {
    question: "Can I lose fat with this system?",
    answer:
      "Yes. Combined with proper nutrition, bodyweight training is an excellent way to lose fat while building athletic muscle.",
  },
  {
    question: "Should I buy coaching or just take the course?",
    answer:
      "The course gives you the exact system. Coaching gives you personalized guidance, accountability and direct feedback to speed up your progress.",
  },
];

export default function FAQ() {
  return (
    <section id="faq"
      style={{
        padding: "140px 0",
        position: "relative",
        overflow: "hidden",
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
          top: "20%",
          left: "-150px",
        }}
      />

      <div className="container">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            marginBottom: "80px",
          }}
        >
          <p
            style={{
              color: "#ff6b00",
              letterSpacing: "3px",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            FREQUENTLY ASKED QUESTIONS
          </p>

          <h2
            style={{
              fontSize: "clamp(2.5rem,6vw,5rem)",
              lineHeight: 1,
              fontWeight: 900,
              marginBottom: "25px",
            }}
          >
            EVERYTHING YOU
            <br />
            NEED TO KNOW
          </h2>

          <p
            style={{
              color: "#9a9a9a",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: 1.8,
              fontSize: "1.1rem",
            }}
          >
            Before you begin your transformation,
            here are the most common questions people ask.
          </p>
        </motion.div>

        {/* FAQ Cards */}

        <div
          style={{
            display: "grid",
            gap: "24px",
          }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
                borderColor: "#ff6b00",
              }}
              style={{
                background: "#0b0b0b",
                border: "1px solid #1f1f1f",
                borderRadius: "28px",
                padding: "32px",
                transition: "all .3s ease",
              }}
            >
              <h3
                style={{
                  fontSize: "1.35rem",
                  fontWeight: "700",
                  marginBottom: "16px",
                }}
              >
                {faq.question}
              </h3>

              <p
                style={{
                  color: "#9a9a9a",
                  lineHeight: 1.8,
                  fontSize: "1rem",
                }}
              >
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            marginTop: "100px",
            textAlign: "center",
            padding: "70px 40px",
            borderRadius: "40px",
            background:
              "linear-gradient(135deg,#101010,#050505)",
            border: "1px solid #1f1f1f",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(2.5rem,6vw,5rem)",
              lineHeight: 1,
              fontWeight: 900,
              marginBottom: "25px",
            }}
          >
            READY TO BUILD
            <br />
            YOUR ATHLETIC BODY?
          </h2>

          <p
            style={{
              color: "#9a9a9a",
              maxWidth: "700px",
              margin: "0 auto 40px",
              lineHeight: 1.8,
            }}
          >
            Stop waiting for the perfect moment.
            Start today, train consistently and build
            the physique you've always wanted.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {/* Coaching CTA */}

            <motion.a
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
              href="https://wa.me/91YOURNUMBER"
              target="_blank"
              rel="noreferrer"
              style={{
                background: "#ff6b00",
                color: "#fff",
                padding: "18px 34px",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: "700",
                boxShadow:
                  "0 0 35px rgba(255,107,0,0.35)",
              }}
            >
              Start Your Transformation
            </motion.a>

            {/* Free Course CTA */}

            <motion.a
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
               href="https://wa.me/919007816552?text=Hi%20Anargha,%20I%20found%20your%20website%20and%20I'm%20interested%20in%20your%20Bodyweight%20Athlete%20Coaching.%0A%0ACurrent%20Fitness%20Level:%0AGoals:%0AAge:%0AEquipment%20Available: "
              target="_blank"
              rel="noreferrer"
              style={{
                border: "1px solid #2a2a2a",
                color: "#fff",
                padding: "18px 34px",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Watch Free Course
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}