import { sectionIds } from "@/constants/sectionId";
import React, { useState } from "react";
import InfiniteWhyChooseSlider from "./InfiniteWhyChooseSlider";
import WhyChooseModal from "./WhyChooseModal";
import { list } from "@/constants/whyChoose";
import HeadingPill from "@/components/common/HeadingPill";
import MotionWrapper from "@/common/animations/MotionWrapper";
import { fadeInUp } from "@/common/animations/motionVariants";

function WhyChooseSection() {
  const [selected, setSelected] = useState(null);
  const [paused, setPaused] = useState(false);

  return (
    <div id={sectionIds.why_choose_us}>
      <MotionWrapper variant={fadeInUp}>
        <HeadingPill label={"Tại sao chọn chúng tôi"} />
      </MotionWrapper>
      <div className="flex flex-col justify-between gap-y-1 pt-3 sm:flex-row">
        <MotionWrapper
          variant={fadeInUp}
          delay={0.2}
          className="flex flex-col gap-x-1 gap-y-0 lg:flex-row"
        >
          <h1 className="text-xl font-medium sm:max-w-100 sm:text-3xl lg:max-w-md">
            Tại sao chọn
          </h1>
          <span className="text-primary text-xl font-medium sm:max-w-100 sm:text-3xl lg:max-w-md">
            An Huy Global Link
          </span>
        </MotionWrapper>
        <MotionWrapper variant={fadeInUp} delay={0.4}>
          <p className="text-md font-light text-gray-500 sm:max-w-sm lg:max-w-md">
            An Huy Global Link không chỉ là một công ty cung cấp dịch vụ vận
            chuyển hàng hóa quốc tế, du lịch giao thương và tư vấn xuất nhập
            khẩu mà còn là đối tác chiến lược đáng tin cậy trong mọi giao dịch
            thương mại toàn cầu
          </p>
        </MotionWrapper>
      </div>
      <MotionWrapper
        variant={fadeInUp}
        delay={0.6}
        className="relative w-full overflow-hidden py-10"
      >
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-white to-transparent" />

        <InfiniteWhyChooseSlider
          list={list}
          paused={paused}
          onHover={setPaused}
          onSelect={setSelected}
        />
      </MotionWrapper>

      <WhyChooseModal selected={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

export default WhyChooseSection;
