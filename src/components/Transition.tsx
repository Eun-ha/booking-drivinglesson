"use client";

import { motion } from "framer-motion";

export type Props = {
  children: React.ReactNode;
  type: "base" | "bounce";
};

export default function Transition(props: Props) {
  const { children, type } = props;

  const animateValue = type === "base" ? baseAnimate : bounceAnimate;

  const transitionValue = type === "base" ? baseTransition : bounceTransition;

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={animateValue}
      transition={transitionValue}
    >
      {children}
    </motion.div>
  );
}
const baseAnimate = {
  y: 0,
  opacity: 1,
};
const baseTransition = {
  ease: "easeInOut",
  duration: 0.3,
};
const bounceAnimate = {
  y: ["10%", "-10%"],
  opacity: 1,
};
const bounceTransition = {
  y: {
    repeatType: "mirror",
    repeat: 5,
    ease: "easeOut",
    duration: 0.3,
  },
};
