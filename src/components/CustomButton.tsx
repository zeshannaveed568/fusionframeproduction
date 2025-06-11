import Link from "next/link";
import React from "react";

interface CustomButtonProps {
  ctaText: string;
  ctaUrl: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ ctaText, ctaUrl }) => {
  return (
    <Link href={ctaUrl} passHref>
      <button className='border-white border-4 py-4 px-6 md:py-4 md:px-8 justify-center items-center text-white transition-all duration-300 ease-in-out tracking-wider hover:bg-white hover:text-black'>
        <span className='text-base md:text-[1.2rem] font-extrabold uppercase'>
          {ctaText}
        </span>
      </button>
    </Link>
  );
};

export default CustomButton;
