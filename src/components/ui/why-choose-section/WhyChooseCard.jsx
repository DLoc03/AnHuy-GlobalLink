import { motion } from "framer-motion";

const variants = {
  idle: {
    scale: 1,
    opacity: 1,
  },
  active: {
    scale: 1.08,
    opacity: 1,
  },
  inactive: {
    scale: 0.92,
    opacity: 0.6,
  },
};

function WhyChooseCard({ card, hoveredId, setHoveredId, onClick }) {
  const isActive = hoveredId === card.id;
  const isInactive = hoveredId && hoveredId !== card.id;

  return (
    <motion.div
      className="w-72 shrink-0 cursor-pointer rounded-3xl bg-white shadow-lg"
      variants={variants}
      animate={isActive ? "active" : isInactive ? "inactive" : "idle"}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 22,
      }}
      onMouseEnter={() => setHoveredId(card.id)}
      onMouseLeave={() => setHoveredId(null)}
      onClick={onClick}
      style={{ zIndex: isActive ? 20 : 1 }}
    >
      <img
        src={card.image}
        alt={card.title}
        className="h-56 w-full rounded-t-3xl object-cover"
      />
      <div className="space-y-3 p-6">
        <h1 className="text-primary text-xl font-semibold">{card.title}</h1>
        <p className="line-clamp-2 font-light text-gray-600">{card.content}</p>
      </div>
    </motion.div>
  );
}

export default WhyChooseCard;
