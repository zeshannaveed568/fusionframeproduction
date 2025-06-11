import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className="flex justify-center items-center text-5xl md:text-6xl font-extrabold tracking-[4px]">
      {title}
    </div>
  );
};

export default Title;
