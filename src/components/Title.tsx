import React from "react";

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
