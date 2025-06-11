"use client";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
    },
  },
};

interface AnimatedParagraphProps {
  paragraph: string;
}

export default function AnimatedParagraph({ paragraph }: AnimatedParagraphProps) {
  return (
    <motion.p
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      className="mt-4 text-black text-xl text-center"
    >
      {paragraph}
    </motion.p>
  );
}
