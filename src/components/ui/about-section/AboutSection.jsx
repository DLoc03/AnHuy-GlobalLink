import { sectionIds } from "@/constants/sectionId";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { abouts } from "@/constants/about";
import HeadingPill from "@/components/common/HeadingPill";

function AboutSection() {
  const [selected, setSelected] = useState();
  return (
    <>
      <div
        id={sectionIds.about}
        className="mx-auto grid h-70 max-w-7xl grid-cols-5 gap-x-3 gap-y-3 sm:h-120 sm:gap-x-6"
      >
        <div className="col-span-5">
          <HeadingPill label={"Về chúng tôi"} />
        </div>
        <motion.div
          className="relative col-span-3 h-60 w-full cursor-pointer overflow-hidden rounded-3xl sm:h-100"
          onClick={() => setSelected(abouts[0])}
          whileHover={{ scale: 1.02 }}
        >
          {/* IMAGE */}
          <motion.img
            src={abouts[0].image}
            layoutId={abouts[0].id}
            className="h-full w-full rounded-3xl object-cover object-top"
          />

          {/* TEXT */}
          <div className="absolute top-0 right-0 left-0 flex h-full flex-col justify-between bg-linear-to-b from-black/80 via-transparent to-black p-4">
            <h3 className="mb-2 text-xl font-semibold text-white text-shadow-2xs sm:text-2xl">
              {abouts[0].title}
            </h3>

            <p className="line-clamp-2 text-sm text-gray-200">
              {abouts[0].content[0]}
            </p>
          </div>
        </motion.div>
        <div className="col-span-2 space-y-3 sm:space-y-6">
          <motion.div
            className="relative col-span-3 h-28 w-full cursor-pointer overflow-hidden rounded-xl sm:h-47"
            onClick={() => setSelected(abouts[1])}
            whileHover={{ scale: 1.02 }}
          >
            {/* IMAGE */}
            <motion.img
              src={abouts[1].image}
              layoutId={abouts[1].id}
              className="h-full w-full object-cover object-top"
            />

            {/* TEXT */}
            <div className="absolute top-0 right-0 left-0 flex h-full flex-col justify-between bg-linear-to-b from-black/80 via-transparent to-black p-4">
              <h3 className="mb-2 text-xl font-semibold text-white text-shadow-2xs sm:text-2xl">
                {abouts[1].title}
              </h3>

              <p className="line-clamp-2 text-sm text-gray-200">
                {abouts[1].content[0]}
              </p>
            </div>
          </motion.div>
          <motion.div
            className="relative col-span-3 h-28 w-full cursor-pointer overflow-hidden rounded-xl sm:h-47"
            onClick={() => setSelected(abouts[2])}
            whileHover={{ scale: 1.02 }}
          >
            {/* IMAGE */}
            <motion.img
              src={abouts[2].image}
              layoutId={abouts[2].id}
              className="h-full w-full object-cover object-top"
            />

            {/* TEXT */}
            <div className="absolute top-0 right-0 left-0 flex h-full flex-col justify-between bg-linear-to-b from-black/80 via-transparent to-black p-4">
              <h3 className="mb-2 text-xl font-semibold text-white text-shadow-2xs sm:text-2xl">
                {abouts[2].title}
              </h3>

              <p className="line-clamp-2 text-sm text-gray-200">
                {abouts[2].content[0]}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="w-full max-w-4xl overflow-hidden rounded-2xl bg-neutral-900"
              onClick={(e) => e.stopPropagation()}
            >
              {/* IMAGE + TITLE OVERLAY */}
              <div className="relative">
                <motion.img
                  src={selected.image}
                  layoutId={selected.id}
                  className="h-65 w-full object-cover object-top sm:h-100"
                />

                {/* Gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                {/* Title */}
                <motion.h2
                  className="absolute right-4 bottom-4 left-4 text-3xl font-bold text-white text-shadow-2xs"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {selected.title}
                </motion.h2>
              </div>

              {/* CONTENT */}
              <motion.div
                className="text-md space-y-3 overflow-y-auto bg-black/80 p-4 text-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {selected.content.map((content, index) => (
                  <p key={index}>{content}</p>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default AboutSection;
