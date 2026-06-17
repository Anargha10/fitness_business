import { motion } from "framer-motion";

const stats = [
  {
    value: "2022",
    label: "Started Training",
  },
  {
    value: "0",
    label: "Gym Memberships",
  },
  {
    value: "100%",
    label: "Bodyweight Based",
  },
  {
    value: "∞",
    label: "Growth Mindset",
  },
];

export default function Transformation() {
  return (
    <section id="story"
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
          left: "-10%",
          top: "20%",
        }}
      />

      <div className="container">
        <div
          className="transformation-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "90px",
            alignItems: "center",
          }}
        >
          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              position: "relative",
            }}
          >
            {/* Main Image */}
            <div
              style={{
                overflow: "hidden",
                borderRadius: "32px",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <img
                src="/transformation.jpeg"
                alt=""
                style={{
                  width: "100%",
                  display: "block",
                }}
              />
            </div>

            {/* Before Card */}
            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              style={{
                position: "absolute",
                bottom: "-40px",
                right: "-40px",
                width: "230px",
                background: "rgba(10,10,10,0.85)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
              }}
            >
              <img
                src="/before.jpeg"
                alt=""
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  padding: "18px",
                }}
              >
                <div
                  style={{
                    color: "#ff6b00",
                    fontWeight: 700,
                    marginBottom: "6px",
                  }}
                >
                  2022
                </div>

                <div
                  style={{
                    color: "#fff",
                    fontWeight: 600,
                  }}
                >
                  Skinny-Fat Student
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div
              style={{
                color: "#ff6b00",
                letterSpacing: "3px",
                fontWeight: 700,
                marginBottom: "18px",
              }}
            >
              MY TRANSFORMATION
            </div>

            <h2
              style={{
                fontSize: "clamp(2.5rem,5vw,5rem)",
                fontWeight: 900,
                lineHeight: 0.95,
                marginBottom: "28px",
              }}
            >
              FROM
              <br />
              SKINNY-FAT
              <br />
              STUDENT TO
              <br />
              BODYWEIGHT
              <br />
              ATHLETE
            </h2>

            <p
              style={{
                color: "#a3a3a3",
                lineHeight: 1.9,
                fontSize: "1.08rem",
                marginBottom: "24px",
              }}
            >
              In 2022, after clearing JEE Mains, I looked in the mirror
              and didn't like what I saw.
            </p>

            <p
              style={{
                color: "#a3a3a3",
                lineHeight: 1.9,
                fontSize: "1.08rem",
                marginBottom: "24px",
              }}
            >
              I wasn't obese. I wasn't athletic either.
              I looked normal in clothes, but underneath the shirt
              there was no strength, no confidence and no physique
              I could truly be proud of.
            </p>

            <p
              style={{
                color: "#a3a3a3",
                lineHeight: 1.9,
                fontSize: "1.08rem",
                marginBottom: "24px",
              }}
            >
              I had no gym membership. No coach. No equipment.
              I learned how to build strength using push-ups,
              backpacks, household objects and consistency.
            </p>

            <p
              style={{
                color: "#ffffff",
                lineHeight: 1.9,
                fontSize: "1.08rem",
                fontWeight: 500,
                marginTop: "30px",
              }}
            >
              This course isn't built from theory.
              It's built from years of experimentation,
              mistakes, learning and real-world results.
            </p>

            <div
              style={{
                marginTop: "40px",
                padding: "24px",
                borderRadius: "24px",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "#0d0d0d",
              }}
            >
              <div
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1.6,
                }}
              >
                "I wasn't trying to become famous.
                I was trying to become someone I respected
                when I looked in the mirror."
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "24px",
            marginTop: "120px",
          }}
        >
          {stats.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              style={{
                background: "#0d0d0d",
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
                  marginBottom: "12px",
                }}
              >
                {item.value}
              </div>

              <div
                style={{
                  color: "#a3a3a3",
                }}
              >
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}