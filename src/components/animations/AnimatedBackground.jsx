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
        right: 0,
        bottom: 0, // ¡🔥 Importante para evitar gaps!
        width: "100%",
        height: "100%", // ✅ NO usar 100vh ni 100dvh
        zIndex: -1,
        background: `
          radial-gradient(ellipse at 30% 40%, #5bbf6244, transparent 60%),
          radial-gradient(ellipse at 70% 60%, #5bbf6244, transparent 60%)
        `,
        backgroundColor: "var(--color-bg)",
        backgroundSize: "180% 180%",
        backgroundRepeat: "no-repeat",
        animation: "moveBackground 40s infinite alternate-reverse ease-in-out",
        pointerEvents: "none", // ✅ para evitar capturar clicks
      }}
    />
  );
};

export default AnimatedBackground;
