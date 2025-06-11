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

interface SubTitlesProps {
  index: number;
  title: string;
}

export default function SubTitles({ index, title }: SubTitlesProps) {
  return (
    <motion.h3
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
      className="text-white md:w-1/2 flex justify-center items-center text-4xl font-extrabold text-center my-4"
    >
      {title}
    </motion.h3>
  );
}
