import { motion } from 'framer-motion';

const animationVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeScale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
};

const FadeInSection = ({ children, delay = 0.15, type = "fadeUp" }) => {
  const variants = animationVariants[type] || animationVariants.fadeUp;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      style={{
        height: "100%",          // ⬅️ Esto asegura que respete el 100% de altura
        display: "flex",          // ⬅️ Opcionalmente para que siga el layout de Box y Paper
        flexDirection: "column",  // ⬅️ Especialmente para estructuras tipo columna (como tu imagen + footer de contacto)
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
