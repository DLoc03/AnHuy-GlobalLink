import { sectionIds } from "@/constants/sectionId";
import background from "@assets/background/partner.jpg";

import MotionWrapper from "@/common/animations/MotionWrapper";
import { fadeInUp } from "@/common/animations/motionVariants";
import ContactLayout from "./ContactLayout";

function ContactSection() {
  return (
    <MotionWrapper
      id={sectionIds.contact}
      variant={fadeInUp}
      className="relative overflow-hidden rounded-3xl"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="from-secondary via-primary/50 absolute right-0 z-10 h-full w-full bg-linear-to-l to-transparent" />
      <ContactLayout />
    </MotionWrapper>
  );
}

export default ContactSection;
