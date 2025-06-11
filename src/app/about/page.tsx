"use client";
import Title from "@/components/Title";
import Image from "next/image";
import bgImg from "../../../public/assets/about.webp";
import HowITWorksCard from "@/components/HowITWorksCard";
import { howItWorksData, teamMembers } from "../../../data";
import GetQuoteCta from "@/components/GetQuoteCta";
import TeamCard from "@/components/TeamCard";
import Bullet from "../../../public/assets/bullet.png";
import Founder from "../../../public/assets/founder.png";
import Logo from "../../../public/assets/logo-white.png";
import HeadingTitles from "@/components/HeadingTitles";

export default function AboutPage() {
  return (
    <section className="font-georama">
      {/* Hero  */}
      <div className="relative h-[400px] ">
        <Image
          src={bgImg}
          alt="About Image"
          className="w-full h-full object-cover"
          placeholder="blur"
        />
        <div className="absolute bottom-10 w-screen text-white">
          <Title title="About" />
        </div>
      </div>

      <div className=" px-4 text-white">
        {/* Who are we? */}
        <div className="container mx-auto py-4 pt-16">
          <h2 className="text-4xl md:text-5xl items-baseline flex flex-col md:flex-row gap-2 font-extrabold">
            Who we are...
            <span className="text-gray-300 text-sm md:text-lg font-semibold">
              More than just a video editing company | A trusted partner
            </span>
          </h2>

          <div className="text-lg flex flex-col-reverse md:flex-row items-center gap-8 py-6 ">
            {/* Desc */}
            <div className="text-justify w-full md:w-1/2 xl:w-2/3">
              <p className="mt-4 text-white">
                Fusion Frame Productions is a top-tier video editing services
                company based in Islamabad, PK. We specialize in professional
                video editing, transforming raw footage into captivating
                stories. Founded in 2024 by Zeshan and friends Hasnat, Aafaq,
                and Shayan, we have grown from a small team working from home to
                serving clients worldwide.
              </p>
              <p className="mt-4 text-white">
                Our dedicated in-house team of skilled Video Editors, a
                Marketing Manager, and a Content Manager ensures high-quality,
                engaging videos for a diverse range of clients. At Fusion Frame
                Productions, we pride ourselves on our creativity, excellence,
                and commitment to customer satisfaction.
              </p>
              <p className="mt-4 text-white">
                Choose Fusion Frame Productions for all your video editing needs
                and experience the difference of working with true
                professionals.
              </p>
            </div>
            {/* Logo */}
            <div className="flex justify-center w-full md:w-1/2 xl:w-1/3">
              <Image
                className="object-contain w-72 h-full"
                src={Logo}
                alt="Logo"
                placeholder="blur"
              />
            </div>
          </div>
        </div>

        {/* What Sets Us Apart from Other */}
        <div className="container mx-auto py-4">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            What Sets Us Apart from Other{" "}
            <span className="text-[#f9db6d]">Video Agencies?</span>
          </h2>

          {/* Bullets Cards */}

          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2  justify-items-center gap-4 p-8 pt-14 text-black font-georamaregular">
            <div className="bg-[#f9db6d]  px-4 py-6 md:px-8 flex flex-col gap-2 md:min-h-80 max-h-80 md:col-span-1 md:row-span-1 place-content-center">
              <Image
                src={Bullet}
                alt="bullet"
                className="object-contain h-12"
                placeholder="blur"
              />
              <div className="flex flex-col gap-1 mt-4 px-2">
                <h2 className="font-bold tracking-wide text-2xl">
                  Dedicated Editors
                </h2>
                <p className=" text-lg font-medium">
                  You get one or more dedicated video editors who learn your
                  style, personal touch, and the fine details that make your
                  videos unique.
                </p>
              </div>
            </div>
            <div className="bg-[#f9db6d]  px-4 py-6 md:px-8 flex flex-col gap-2 md:min-h-80 max-h-80 md:col-span-1  md:row-span-1 place-content-center">
              <Image
                src={Bullet}
                alt="bullet"
                className="object-contain h-12"
                placeholder="blur"
              />
              <div className="flex flex-col gap-1 mt-4 px-2">
                <h2 className="font-bold tracking-wide text-2xl">
                  Boutique Agency
                </h2>
                <p className="text-lg font-medium">
                  As a boutique agency, we’re small but mighty. This means you
                  get the focused attention you deserve, without our resources
                  being spread too thin across too many clients.
                </p>
              </div>
            </div>
            <div className="bg-[#f9db6d]  px-4 py-6 md:px-8 flex flex-col gap-2 md:min-h-80 max-h-80 md:col-span-2 md:row-span-1 xl:mx-72 place-content-center">
              <Image
                src={Bullet}
                alt="bullet"
                className="object-contain h-12"
                placeholder="blur"
              />
              <div className="flex flex-col gap-1 mt-4 px-2">
                <h2 className="font-extrabold tracking-wide text-2xl">
                  Personalized Service
                </h2>
                <p className="text-lg font-medium">
                  Our size allows us to provide personalized service, ensuring
                  each project receives the time and care it needs to shine.
                  Choose Fusion Frame Productions for a video editing experience
                  where your vision truly comes to life.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Founder */}
        <div className="container mx-auto px-4 py-14 text-white flex flex-col justify-center items-center text-center gap-y-8">
          <Image
            src={Founder}
            alt="Founder"
            placeholder="blur"
            className="object-cover w-44 h-44 rounded-full"
          />
          <h1 className="text-sm tracking-wider font-bold italic">
            Zeshan Naveed, Founder of Fusion Frame Productions
          </h1>
        </div>

        {/* Team */}

        <div className="container mx-auto flex flex-col gap-8 py-14">
          <h2 className="text-5xl font-extrabold text-center ">Team</h2>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 row-span-2 md:flex gap-4 ">
              {teamMembers.map((member, index) => (
                <TeamCard
                  key={index}
                  name={member.name}
                  role={member.role}
                  imageSrc={member.imageSrc}
                  imageAlt={member.imageAlt}
                />
              ))}
            </div>
          </div>
        </div>

        {/* How it Works */}

        <div className=" py-8 md:py-28 bg-white text-black flex flex-col justify-center items-center gap-y-14 overflow-visible">
          <HeadingTitles initialpart="How it" finalpart="works?" />

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
        </div>

        {/* CTA  */}
        <div className="py-8">
          <GetQuoteCta />
        </div>
        <hr />
      </div>
    </section>
  );
}
