import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function ServiceCard({ service, onSelected }) {
  return (
    <motion.div
      className="relative h-full w-full cursor-pointer rounded-xl"
      onClick={() => onSelected?.(service)}
      whileHover={{ scale: 1.02 }}
    >
      <motion.img
        src={service.image}
        layoutId={service.id}
        className="h-60 w-full rounded-xl object-cover"
      />
      <div className="space-y-3 pt-4">
        <h3 className="text-xl">{service.name}</h3>
        <p className="text-md line-clamp-2 text-justify font-light text-gray-500">
          {service.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
