import AnimatedParagraph from "@/components/AnimatedParagraph";
import CustomButton from "@/components/CustomButton";
import HeadingTitles from "@/components/HeadingTitles";
import Title from "@/components/Title";
import { whatWedo, ourExpertise, InNumbers, howItWorksData } from "../../data";
import Image from "next/image";
import Link from "next/link";
import SubTitles from "@/components/SubTitle";
import HowITWorksCard from "@/components/HowITWorksCard";
// import Founder from "../../public/assets/founder.png";
// If you need to use the image, use the path as a string with next/image:
// Example: <Image src="/assets/founder.png" alt="Founder" width={500} height={500} />

export default async function Home() {
  return (
    <section className="text-white">
      {/* Hero Section TODO: Dynamically Fetch Hero Video from Cloudinary */}
      <div className="h-screen md:flex">
        <div className="h-1/2 w-screen md:h-screen md:w-1/2">
          {/* <Video url={featured[0].videoUrl} loop={featured[0].loop} /> */}
          <div className="w-full h-full bg-black">
            <video className="w-full h-full object-cover" muted autoPlay loop>
              <source
                src="https://res.cloudinary.com/dyh8wkiqp/video/upload/v1749595011/webpages/videos/hero_ld9amv.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>

        <div className="h-1/2 w-screen md:h-screen md:w-1/2 p-10 flex flex-col justify-center items-start gap-4 md:p-16 xl:p-32">
          <Title title={"THE Video Editing Agency"} />

          <p className="font-bold tracking-widest text-2xl">
            Turning ideas into
            <span className="text-[#F9DB6D] "> stunning videos. </span>
          </p>

          <CustomButton ctaText="Get Started" ctaUrl="/contact" />
        </div>
      </div>
      {/* Who are we? */}
      <div className=" py-16 md:py-8 px-8 md:px-24 2xl:px-80  text-black flex flex-col justify-center items-center gap-y-8 bg-white">
        <HeadingTitles initialpart={"What"} finalpart={"are we?"} />

        <div className="flex items-center flex-col-reverse md:flex-col md:gap-x-8">
          <div className="w-full">
            <AnimatedParagraph
              paragraph={
                "Fusion Frame Productions is a video editing agency dedicated to empowering clients to share their stories and connect with a broader audience through captivating videos."
              }
            />
          </div>

          <div className="container mx-auto px-4 pt-16 text-white flex flex-col justify-center items-center text-center gap-y-4">
            <Image
              className="object-cover w-44 h-44 rounded-full"
              src="/assets/founder.png"
              alt="Founder"
              placeholder="blur"
              width={176} // 44 * 4 for responsive scaling
              height={176} // 44 * 4 for responsive scaling
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVR42mP8//8/AwAI/wM+z4AAAAASUVORK5CYII="
            />
            <h1 className="text-sm tracking-wider font-semibold italic text-gray-700">
              Zeshan Naveed, Founder of Fusion Frame Productions
            </h1>

            <AnimatedParagraph
              paragraph={
                "My name is Zeshan, and I founded Fusion Frame Productions in 2023 after recognizing that entrepreneurs, businesses, and influencers often lack the expertise or resources to edit videos effectively."
              }
            />

            <button className="border-[#F9DB6D] border-4  text-black px-8 py-4 mt-8 font-georama text-xl hover:bg-[#f9DB6D] duration-300 transition-all">
              <Link href="/about">About Us</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Porfolio */}
      <div className=" py-16 md:py-8 px-8 md:px-24 2xl:px-80  text-black flex flex-col justify-center items-center gap-y-8 bg-white">
        <HeadingTitles initialpart={"Our"} finalpart={"Portfolio"} />

        <div className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  ">
            {/* {portfolio.slice(0, Math.min(itemsToShow, 8)).map((item, index) => (
              <PortfolioCard
                key={index}
                thumbnailUrl={item.thumbnailUrl}
                category={item.category}
                title={item.title}
                description={item.description}
                videoUrl={item.videoUrl}
              />
            ))} */}
          </div>
          {/* {itemsToShow >= 8 && (
            <button className="border-[#F9DB6D] border-4 text-black px-8 py-4 mt-8 font-georama text-xl hover:bg-[#f9DB6D] duration-300 transition-all">
              <Link href="/portfolio">View More</Link>
            </button>
          )} */}
          {/* {itemsToShow < portfolio.length && itemsToShow < 8 && (
            <div className="flex justify-center mt-4">
              <button
                onClick={handleShowMore}
                className="text-black font-groramasemibold"
                disabled={showMoreLoading}
              >
                {showMoreLoading ? "Loading..." : "Show More"}
              </button>
            </div>
          )} */}
        </div>
      </div>

      {/* What we do */}

      <div className=" py-16 md:py-24  text-white flex flex-col justify-center items-center gap-y-12 bg-black">
        <HeadingTitles initialpart={"What"} finalpart={"we do?"} />
        <div className="px-8 md:px-14 lg:px-24 2xl:px-80 flex flex-col">
          {whatWedo.map((data, index) => (
            <div
              className={`grid grid-cols-1 md:flex ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse "
              } `}
              key={index}
            >
              <SubTitles index={index} title={data.title} />

              <p className="md:w-1/2 flex flex-col justify-center text-xl p-8 md:p-16 text-black bg-[#F9DB6D]">
                {data.description.split(".").map((line, idx) => (
                  <span className="font-medium mb-1" key={idx}>
                    {line}
                    {idx === data.description.split(".").length - 1 ? "" : "."}
                  </span>
                ))}

                {data.benefits.map((benefit, idx) => (
                  <span className="text-lg" key={idx}>
                    {benefit}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Expertise */}
      <div className=" py-16 md:py-24  text-black flex flex-col justify-center items-center gap-y-12 bg-white">
        <HeadingTitles initialpart={"Our"} finalpart={"Expertise"} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-10 md:px-24 2xl:px-80 gap-4 ">
          {ourExpertise.map((data, index) => (
            <div
              key={index}
              className={`text-center flex flex-col gap-4 px-4 py-6 rounded-xl  outline-2 outline-[#f9db6d] shadow-2xl ${
                index % 2 === 0 ? "bg-white" : "bg-[#f9db6d]"
              }`}
            >
              <h3 className="font-medium text-2xl">{data.title}</h3>
              <p className="flex flex-col gap-2 text-lg">
                {data.description.split(".").map((line, idx) => (
                  <span key={idx}>
                    {line}
                    {idx === data.description.split(".").length - 1 ? "" : "."}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Fusion Frame Produciton Numbers */}
      <div className=" py-16 md:py-24  text-white flex flex-col justify-center items-center gap-y-12 bg-black">
        {/* <h2 className="text-5xl text-center font-georama">
          Fusion Frame Production{" "}
          <span className="text-[#F9DB6D]">in numbers...</span>
        </h2> */}
        <HeadingTitles
          initialpart={"Fusion Frame Production"}
          finalpart={"in numbers..."}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:flex gap-4">
          {InNumbers.map((data, index) => (
            <div
              key={index}
              className="border-2 w-56 h-28 flex flex-col justify-center  rounded-xl p-8 gap-2"
            >
              <h2 className="text-4xl font-bold  text-[#F9DB6D]">
                {data.number}
              </h2>
              <div className="flex items-center gap-2">
                <div className="border-t-slate-600 border-t-2 w-1/6 font-medium "></div>
                <h3 className="">{data.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How it Works */}
      <div className=" py-8 md:py-28 bg-white text-black flex flex-col justify-center items-center gap-y-14">
        <HeadingTitles initialpart={"How it"} finalpart={"works?"} />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-center  items-center gap-8 px-16">
          {howItWorksData.map((step, index) => (
            <HowITWorksCard
              key={index}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>
        <button className="border-[#F9DB6D] border-4  text-black px-8 py-4 mt-8 font-bold text-xl hover:bg-[#f9DB6D] duration-300 transition-all">
          <Link href="/contact">Get Started</Link>
        </button>
      </div>

      {/* Moneyback Garentteee */}
      <div className=" py-12   text-white flex flex-col justify-center items-center gap-y-4 bg-black">
        
        <HeadingTitles initialpart={"Moneyback"} finalpart={"Guarantee"} />

        <h3 className="flex text-center px-4 py-4 md:text-xl font-medium">
          If you&apos;re not satisfied with the video we edited, you can request a
          full refund within 3 business days of receiving the video.
        </h3>
      </div>

      {/* Testimonials */}

      <div className="relative bg-[#f4eded] py-20 px-4 text-black flex flex-col gap-y-6 justify-center items-center md:h-[600px]">
        <h2 className="text-4xl md:text-5xl font-extrabold flex justify-center items-center md:absolute left-0 top-1/2 bottom-1/2 md:-rotate-90 md:w-[15%]">
          Testimonial
        </h2>
        <div className="w-full h-full md:w-[90%] md:ml-36 lg:ml-52 flex justify-center bg-fixed bg-center bg-no-repeat bg-cover overflow-hidden items-center">
          {/* {=============================================================================================} */}
          TODO: Add testimonial to data.js file and fetch it from there
          {/* {=============================================================================================} */}
          {/* <TestimonialSwiper
            testimonialType={[
              "weddingTestimonial",
              "podcastTestimonial",
              "youtubeTestimonial",
            ]}
          /> */}
        </div>
      </div>
    </section>
  );
}
