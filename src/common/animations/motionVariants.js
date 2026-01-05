const transition = (delay = 0, duration = 0.8, ease = "easeOut") => ({
  duration,
  ease,
  delay,
});

export const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transition(delay),
  },
});

export const fadeInDown = (delay = 0) => ({
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transition(delay),
  },
});

export const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transition(delay),
  },
});

export const slideInFromLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transition(delay),
  },
});

export const slideInFromRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transition(delay),
  },
});

export const zoomIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transition(delay),
  },
});
