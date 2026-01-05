import { motion } from "framer-motion";

export default function MotionWrapper({
  children,
  variant,
  className = "",
  delay = 0,
  once = true,
  amount = 0.2,
  animateOnMount = false,
  as: Component = "div",
  ...props
}) {
  const motionVariant =
    typeof variant === "function" ? variant(delay) : variant;

  const MotionComponent = motion(Component);

  return (
    <MotionComponent
      variants={motionVariant}
      initial="hidden"
      {...(animateOnMount
        ? { animate: "visible" }
        : { whileInView: "visible", viewport: { once, amount } })}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
