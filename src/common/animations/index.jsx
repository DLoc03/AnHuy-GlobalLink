import MotionWrapper from "./MotionWrapper";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  slideInFromLeft,
  slideInFromRight,
  zoomIn,
} from "./motionVariants";

const createMotionComponent = (variant) => (props) => (
  <MotionWrapper {...props} variant={variant} />
);

export const FadeInUp = createMotionComponent(fadeInUp);
export const FadeInDown = createMotionComponent(fadeInDown);
export const FadeIn = createMotionComponent(fadeIn);
export const SlideLeft = createMotionComponent(slideInFromLeft);
export const SlideRight = createMotionComponent(slideInFromRight);
export const ZoomIn = createMotionComponent(zoomIn);
