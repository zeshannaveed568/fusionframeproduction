"use client"
import { useState } from "react";

type PortfolioCardProps = {
  thumbnailUrl: string;
  category: string;
  title: string;
  videoUrl: string;
  showCatagory?: string;
};

export default function PortfolioCard({
  thumbnailUrl,
  category,
  title,
  videoUrl,
  showCatagory,
}: PortfolioCardProps) {
  const [videoBanner, setVideoBanner] = useState(false);

  const handleVideoBanner = () => {
    setVideoBanner(true);
  };

  const closeVideoBanner = (event: React.MouseEvent) => {
    event.stopPropagation();
    setVideoBanner(false);
    console.log("close");
  };

  return (
    <div
      onClick={handleVideoBanner}
      className="bg-[#F4EDED] shadow-lg  overflow-hidden cursor-pointer"
    >
      <div className="relative">
        <img
          className="w-full h-56 object-cover object-center"
          src={thumbnailUrl}
          alt="portfolio"
        />
        <div
          className={`absolute top-0 right-0 bg-[#F9DB6D] text-black px-2 py-1 text-xs font-georama rounded-bl ${showCatagory}`}
        >
          {category}
        </div>
      </div>
      <div className="py-5 text-center  text-black">
        <h3 className="text-lg font-semibold">
          {title.length > 20 ? `${title.substring(0, 30)}...` : title}
        </h3>
        {/* <p className='text-sm text-gray-600'>{description}</p> */}
      </div>
      {videoBanner && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-90 z-50 flex justify-center items-center">
          {/* <VideoPlayer url={videoUrl} closeVideoBanner={closeVideoBanner} /> */}
        </div>
      )}
    </div>
  );
}
