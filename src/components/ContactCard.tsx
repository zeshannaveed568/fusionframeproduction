import Link from "next/link";
import React, { ReactNode } from "react";

type ContactCardProps = {
  icon: ReactNode;
  title: string;
  desc: string;
  ctaText: string;
  ctaUrl: string;
};

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, desc, ctaText, ctaUrl }) => {
  return (
    <div className='flex flex-col justify-center items-center gap-y-2 bg-[#f4eded] p-8 mx-4 sm:mx-0 shadow-xl'>
      <div className='bg-[#F9DB6D] p-4 rounded-xl'>{icon}</div>
      <span className='text-2xl font-extrabold tracking-wider'>{title}:</span>
      <p className='text-center mx-4 xl:mx-14'>{desc}</p>
      <Link className="font-semibold" href={ctaUrl}>{ctaText}</Link>
    </div>
  );
};

export default React.memo(ContactCard);
