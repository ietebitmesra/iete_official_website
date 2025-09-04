import { motion } from "framer-motion";
import team from "../data/profile";

function Alumni() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      style={{
        width: "100vw",
        minHeight: "100vh",
        background:
          'radial-gradient(circle at top left, rgba(33,150,243,0.15), transparent 70%), radial-gradient(circle at bottom right, rgba(255,255,255,0.05), transparent 70%), #0a0a0a',
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
        overflow: "hidden",
        padding: "100px 0 50px",
      }}
    >
      {/* Floating Particles */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.span
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              repeatType: "mirror",
            }}
            style={{
              position: "absolute",
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "rgba(33,150,243,0.7)",
              boxShadow: "0 0 12px rgba(33,150,243,0.8)",
            }}
          />
        ))}
      </div>

      {/* Heading */}
      <motion.h1
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
            fontFamily: "'Poppins', sans-serif",
          fontSize: "3rem",
          fontWeight: "900",
          marginBottom: "2.5rem",
          zIndex: 2,
          background: "linear-gradient(90deg, #42a5f5, #90caf9, #ffffff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow:
            "0 0 20px rgba(33,150,243,0.6), 0 0 40px rgba(33,150,243,0.4)",
          letterSpacing: "2px",
        }}
      >
         Our Alumni 
      </motion.h1>

      {/* Cards Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 60 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delayChildren: 0.3, staggerChildren: 0.2 },
          },
        }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          zIndex: 2,
          width: "90vw",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {team.map((alumnus, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, scale: 0.9, y: 30 },
              visible: { opacity: 1, scale: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{
              scale: 1.08,
              boxShadow:
                "0 0 30px rgba(33,150,243,0.7), 0 0 60px rgba(33,150,243,0.4)",
            }}
            style={{
              background: "rgba(20,20,20,0.75)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "24px",
              boxShadow:
                "0 8px 32px 0 rgba(0,0,0,0.6), inset 0 0 20px rgba(33,150,243,0.2)",
              color: "#fff",
              padding: "1.6rem 1.2rem 1.2rem 1.2rem",
              minHeight: "360px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            {/* Avatar */}
            <motion.div
              transition={{ duration: 1.2 }}
              style={{
                background:
                  "radial-gradient(circle, #232526 0%, #2196f3 80%)",
                borderRadius: "50%",
                padding: "5px",
                marginBottom: "1.2rem",
                boxShadow: "0 0 20px 6px #2196f388",
                alignSelf: "center",
              }}
            >
              <img
                src={
                  alumnus.profile_photo !== "NA"
                    ? alumnus.profile_photo
                    : "https://via.placeholder.com/72"
                }
                alt={alumnus.name}
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2.5px solid #18191C",
                  boxShadow: "0 0 12px 2px #2196f3cc",
                }}
              />
            </motion.div>

            {/* Name + Role */}
            <h2
              style={{
                margin: 0,
                fontWeight: 800,
                fontSize: "1.3rem",
                letterSpacing: "1px",
                textShadow: "0 2px 10px rgba(33,150,243,0.4)",
              }}
            >
              {alumnus.name}
            </h2>
            <p
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                color: "#90caf9",
                marginBottom: "0.8rem",
              }}
            >
              {alumnus.role || "Alumni"}
            </p>

            {/* Experience */}
            <div style={{ marginBottom: "1rem", width: "100%" }}>
              <h3
                style={{
                  fontSize: "1rem",
                  marginBottom: "0.4rem",
                  color: "#42a5f5",
                }}
              >
                Experience:
              </h3>
              {alumnus.experience &&
                alumnus.experience.map((exp, i) => (
                  <p
                    key={i}
                    style={{
                      margin: "0.2rem 0",
                      fontSize: "0.9rem",
                      opacity: 0.9,
                    }}
                  >
                    <strong>{exp.role}</strong> @ {exp.company}
                  </p>
                ))}
            </div>

            {/* LinkedIn */}
            {alumnus.linkedin && alumnus.linkedin !== "NA" && (
              <motion.a
                href={alumnus.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  backgroundColor: "#42a5f5",
                  boxShadow: "0 0 20px #42a5f5",
                }}
                style={{
                  marginTop: "auto",
                  alignSelf: "center",
                  padding: "10px 18px",
                  background: "#2196f3",
                  borderRadius: "10px",
                  color: "#fff",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "0.3s",
                }}
              >
                LinkedIn
              </motion.a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Alumni;
