import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";
import WhyChooseCard from "./WhyChooseCard";

const SPEED = 40;

function InfiniteWhyChooseSlider({ list, paused, onHover, onSelect }) {
  const baseX = useRef(0);
  const containerRef = useRef(null);
  const [hoveredId, setHoveredId] = useState(null);

  const items = [...list, ...list];

  useAnimationFrame((t, delta) => {
    if (paused || hoveredId) return;

    baseX.current -= (delta / 1000) * SPEED;

    const width = containerRef.current?.scrollWidth / 2;
    if (Math.abs(baseX.current) >= width) {
      baseX.current = 0;
    }

    containerRef.current.style.transform = `translateX(${baseX.current}px)`;
  });

  return (
    <div className="overflow-hidden">
      <div ref={containerRef} className="flex w-max gap-6 px-10 py-2 sm:py-6">
        {items.map((card, index) => (
          <WhyChooseCard
            key={`${card.id}-${index}`}
            card={card}
            hoveredId={hoveredId}
            setHoveredId={setHoveredId}
            onClick={() => {
              setHoveredId(card.id);
              onSelect(card);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default InfiniteWhyChooseSlider;
