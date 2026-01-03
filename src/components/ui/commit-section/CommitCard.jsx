import IconButton from "@/components/common/IconButton";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

function CommitCard({ commit, onSelected }) {
  return (
    <motion.div
      className="relative flex h-80 w-full cursor-pointer items-end rounded-3xl bg-cover bg-center"
      style={{ backgroundImage: `url(${commit.image})` }}
      layoutId={commit.id}
      whileHover={{ scale: 1.02 }}
      onClick={() => onSelected?.(commit)}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 rounded-3xl bg-linear-to-b from-black/50 via-transparent to-transparent" />

      {/* Icon */}
      <IconButton
        onClick={() => onSelected?.(commit)}
        className="absolute top-3 right-3 rounded-full border-2 border-white p-1 text-white hover:bg-white/20"
      >
        <ArrowUpRight />
      </IconButton>

      {/* Content */}
      <div className="relative w-full p-3">
        <div className="space-y-1 rounded-3xl bg-white/50 px-6 py-3 backdrop-blur-md">
          <h1 className="text-xl font-medium">{commit.title}</h1>
          <p className="text-md line-clamp-1">{commit.content}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default CommitCard;
