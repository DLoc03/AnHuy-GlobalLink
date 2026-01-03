import { sectionIds } from "@/constants/sectionId";
import React, { useState } from "react";
import InfiniteWhyChooseSlider from "./InfiniteWhyChooseSlider";
import WhyChooseModal from "./WhyChooseModal";
import { list } from "@/constants/whyChoose";
import HeadingPill from "@/components/common/HeadingPill";

function WhyChooseSection() {
  const [selected, setSelected] = useState(null);
  const [paused, setPaused] = useState(false);

  return (
    <div id={sectionIds.why_choose_us}>
      <HeadingPill label={"Tại sao chọn chúng tôi"} />
      <div className="flex flex-col justify-between gap-y-1 pt-3 sm:flex-row">
        <h1 className="text-xl font-medium sm:max-w-sm sm:text-3xl lg:max-w-md">
          Tại sao chọn <span className="text-primary">An Huy Global Link</span>
        </h1>
        <p className="text-md font-light text-gray-500 sm:max-w-sm lg:max-w-md">
          An Huy Global Link không chỉ là một công ty cung cấp dịch vụ vận
          chuyển hàng hóa quốc tế, du lịch giao thương và tư vấn xuất nhập khẩu
          mà còn là đối tác chiến lược đáng tin cậy trong mọi giao dịch thương
          mại toàn cầu
        </p>
      </div>
      <div className="relative w-full overflow-hidden py-10">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-white to-transparent" />

        <InfiniteWhyChooseSlider
          list={list}
          paused={paused}
          onHover={setPaused}
          onSelect={setSelected}
        />
      </div>

      <WhyChooseModal selected={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

export default WhyChooseSection;
