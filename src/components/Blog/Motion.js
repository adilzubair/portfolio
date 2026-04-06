export const fadeUpSpring = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 60,
    },
  },
  hidden: {
    opacity: 0,
    y: 200,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 60,
    },
  },
};

export const fadeTop = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
    },
  },
  hidden: {
    opacity: 0,
    y: 200,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
    },
  },
};

export const motionStep = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
};
