import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh", // 👈 SOLO cubrir pantalla visible
        zIndex: -1,
        background: `
          radial-gradient(ellipse at 30% 40%, #5bbf6244, transparent 60%),
          radial-gradient(ellipse at 70% 60%, #5bbf6244, transparent 60%)
        `,
        backgroundColor: "var(--color-bg)",
        backgroundSize: "180% 180%",
        backgroundRepeat: "no-repeat",
        animation: "moveBackground 60s infinite alternate-reverse ease-in-out",
        pointerEvents: "none", // 👈 previene que interfiera tocando accidentalmente
      }}
    />
  );
};

export default AnimatedBackground;
