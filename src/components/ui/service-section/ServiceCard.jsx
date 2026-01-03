import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function ServiceCard({ service, onSelected }) {
  return (
    <motion.div
      className="relative h-full w-full cursor-pointer rounded-3xl"
      onClick={() => onSelected?.(service)}
      whileHover={{ scale: 1.02 }}
    >
      <motion.img
        src={service.image}
        layoutId={service.id}
        className="h-60 w-full rounded-3xl object-cover"
      />
      <div className="absolute top-3 left-2 max-w-[80%] space-y-1">
        {service.content.map((heading, index) => (
          <div
            key={index}
            className="w-fit rounded-full border-2 border-white bg-black/40 px-3 py-1 text-xs text-white shadow"
          >
            {heading.title}
          </div>
        ))}
      </div>
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
