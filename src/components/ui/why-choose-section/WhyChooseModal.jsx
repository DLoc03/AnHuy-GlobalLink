import { AnimatePresence, motion } from "framer-motion";
import ModalPortal from "@/components/common/ModalPortal";

function WhyChooseModal({ selected, onClose }) {
  return (
    <AnimatePresence>
      {selected && (
        <ModalPortal>
          <motion.div
            className="fixed top-0 left-0 z-[9999] flex min-h-[100dvh] w-screen items-center justify-center bg-black/80 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <motion.div
              className="max-w-3xl overflow-hidden rounded-3xl bg-white"
              layoutId={selected.id}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selected.image} className="h-72 w-full object-cover" />
              <div className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold">{selected.title}</h2>
                <p className="leading-relaxed text-gray-700">
                  {selected.content}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </ModalPortal>
      )}
    </AnimatePresence>
  );
}

export default WhyChooseModal;
