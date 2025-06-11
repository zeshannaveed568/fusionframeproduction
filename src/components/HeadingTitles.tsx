"use client";
import { motion } from "framer-motion";

type HeadingTitlesProps = {
  initialpart: string;
  finalpart: string;
};

export default function HeadingTitles({ initialpart, finalpart }: HeadingTitlesProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{
        once: true,
      }}
      className="text-5xl text-center font-extrabold"
    >
     {initialpart} <span className="text-[#F9DB6D] drop-shadow-2xl">{finalpart}</span>
    </motion.h2>
  );
}
