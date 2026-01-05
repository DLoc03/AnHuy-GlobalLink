import { motion } from "framer-motion";

export default function RevealText({
  children,
  duration = 1,
  delay = 0,
  className = "",
}) {
  return (
    <span className={`relative inline-block overflow-hidden ${className}`}>
      <motion.span
        className="absolute inset-0 z-20 bg-white"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration, delay, ease: "easeInOut" }}
      />

      <motion.span
        className="absolute inset-0 z-30 overflow-hidden"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration, delay, ease: "easeInOut" }}
        style={{ transformOrigin: "left" }}
      >
        <span className="block">{children}</span>
      </motion.span>

      <span className="opacity-0">{children}</span>
    </span>
  );
}
