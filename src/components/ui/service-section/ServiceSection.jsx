import { sectionIds } from "@/constants/sectionId";
import { services } from "@/constants/service";
import React, { useState } from "react";
import ServiceCard from "./ServiceCard";

import { motion, AnimatePresence } from "framer-motion";
import HeadingPill from "@/components/common/HeadingPill";

function ServiceSection() {
  const [selected, setSelected] = useState();
  return (
    <>
      <div
        id={sectionIds.service}
        className="mx-auto max-w-7xl space-y-2 sm:space-y-3"
      >
        <HeadingPill label={"Dịch vụ"} />
        <div className="flex flex-col items-end justify-between gap-y-1 sm:flex-row">
          <h1 className="text-xl font-medium sm:max-w-sm sm:text-3xl lg:max-w-md">
            Cung cấp chất lượng vượt trội và giải pháp tối ưu
          </h1>
          <p className="text-md font-light text-gray-500 sm:max-w-sm lg:max-w-md">
            Chúng tôi luôn tìm ra giải pháp tối ưu nhất cho khách hàng về giá
            cả, phương thức vận chuyển và thời gian giao hàng.
          </p>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-x-6 gap-y-3 sm:mt-8">
          {services.map((service) => (
            <div key={service.id} className="col-span-3 sm:col-span-1">
              <ServiceCard service={service} onSelected={setSelected} />
            </div>
          ))}
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
              className="flex max-h-[60vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-neutral-900 sm:max-h-[90vh]"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-56 sm:h-72">
                <motion.img
                  src={selected.image}
                  layoutId={selected.id}
                  className="h-full w-full object-cover object-center"
                />

                {/* Gradient */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              <motion.div
                className="custom-scroll bg-secondary flex-1 overflow-y-auto px-5 py-4 text-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {/* Title */}
                <motion.h2
                  className="pointer-events-none z-10 mb-4 text-2xl font-semibold text-white sm:text-3xl"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  {selected.name}
                </motion.h2>

                {/* Description */}
                <p className="mb-4 text-justify text-base text-gray-300">
                  {selected.desc}
                </p>

                {/* Detail list */}
                <div className="space-y-4">
                  {selected.content.map((item, index) => (
                    <div key={index} className="space-y-1">
                      <h4 className="text-base font-semibold text-white">
                        {item.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-gray-300">
                        {item.content}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ServiceSection;
