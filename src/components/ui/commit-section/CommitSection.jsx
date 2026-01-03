import HeadingPill from "@/components/common/HeadingPill";
import { sectionIds } from "@/constants/sectionId";
import React, { useState } from "react";
import CommitCard from "./CommitCard";
import { commits } from "@/constants/commit";
import { motion, AnimatePresence } from "framer-motion";

function CommitSection() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div id={sectionIds.commit} className="grid grid-cols-5 gap-x-6 gap-y-3">
        <div className="col-span-5">
          <HeadingPill label={"Cam kết"} />
        </div>

        <div className="col-span-5 sm:col-span-3">
          <h1 className="text-3xl font-medium">Cam kết của chúng tôi</h1>
        </div>

        <div className="col-span-5 sm:col-span-2">
          <p className="font-light text-gray-500">
            Chúng tôi mang đến các giải pháp vận chuyển nhanh chóng, an toàn,
            tối ưu chi phí và cam kết dịch vụ uy tín, chất lượng cao
          </p>
        </div>

        <div className="col-span-5 sm:col-span-3">
          <CommitCard commit={commits[0]} onSelected={setSelected} />
        </div>
        <div className="col-span-5 sm:col-span-1">
          <CommitCard commit={commits[1]} onSelected={setSelected} />
        </div>
        <div className="col-span-5 sm:col-span-1">
          <CommitCard commit={commits[2]} onSelected={setSelected} />
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed top-0 left-0 z-50 flex min-h-dvh w-screen items-center justify-center bg-black/80 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="flex max-h-[70vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-neutral-900"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative h-56 sm:h-72">
                <motion.img
                  src={selected.image}
                  layoutId={selected.id}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto px-6 py-4 text-gray-200">
                <h2 className="mb-3 text-2xl font-semibold text-white">
                  {selected.title}
                </h2>
                <p className="text-base leading-relaxed text-gray-300">
                  {selected.content}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default CommitSection;
