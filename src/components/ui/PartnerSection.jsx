import { sectionIds } from "@/constants/sectionId";
import React from "react";
import HeadingPill from "../common/HeadingPill";

import partner from "@assets/background/partner.jpg";
import MotionWrapper from "@/common/animations/MotionWrapper";
import { fadeInUp } from "@/common/animations/motionVariants";

function PartnerSection() {
  return (
    <div
      id={sectionIds.partner}
      className="grid h-full grid-cols-2 gap-x-12 gap-y-3 pb-12 sm:pb-0"
    >
      <MotionWrapper variant={fadeInUp} delay={0.2} className="col-span-2">
        <HeadingPill label={"Đối tác chiến lược"} />
      </MotionWrapper>
      <div className="col-span-2 space-y-3 sm:col-span-1">
        <MotionWrapper variant={fadeInUp} delay={0.4}>
          <h1 className="text-primary text-3xl font-bold">
            Đối tác chiến lược
          </h1>
        </MotionWrapper>
        <MotionWrapper
          variant={fadeInUp}
          delay={0.6}
          className="from-primary/40 h-1 w-full bg-linear-to-r to-transparent"
        />

        <MotionWrapper variant={fadeInUp} delay={0.8}>
          <p className="text-md font-light">
            <span className="text-primary te text-justify font-medium">
              An Huy Global Link
            </span>{" "}
            là đối tác chiến lược của các hãng bay lớn tại Việt Nam và quốc tế,
            đặc biệt là các tuyến Bắc Âu và Châu Á, giúp kết nối các doanh
            nghiệp Việt Nam với các thị trường quốc tế. Với mối quan hệ vững
            mạnh với các đối tác vận chuyển hàng không, chúng tôi luôn đảm bảo
            dịch vụ vận chuyển nhanh chóng và đảm bảo an toàn.
          </p>
        </MotionWrapper>
      </div>
      <MotionWrapper
        variant={fadeInUp}
        delay={1}
        className="relative col-span-2 mt-3 h-full sm:col-span-1 sm:mt-0"
      >
        <div className="relative z-10 h-60 w-[95%]">
          <img
            src={partner}
            alt="Đối tác chiến lược"
            className="h-full w-full rounded-3xl object-cover shadow-lg"
          />
        </div>
        <div className="border-primary absolute top-8 right-0 h-60 w-[90%] rounded-3xl border-4" />
      </MotionWrapper>
    </div>
  );
}

export default PartnerSection;
