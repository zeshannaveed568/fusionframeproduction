import Image from "next/image";
import bgImg from "../../../public/assets/contact.webp";
import Title from "@/components/Title";
import ContactForm from "@/components/ContactForm";
import { ContactData } from "../../../data";
import ContactCard from "@/components/ContactCard";


export default function ContactPage() {
  return (
    <section className="w-screen">
      <div className="relative h-[600px] bg-orange-300 w-full flex justify-center items-center">
        {/* Background Image */}
        <div className="h-full">
          <Image
            className="w-screen h-full object-cover"
            src={bgImg}
            alt="Contact Background Image"
            layout="fill"
            priority
          />
        </div>
        <div className="absolute text-white">
          <Title title={"Contact"} />
        </div>
        {/* Contact Form */}
        <div className="absolute top-[65%] w-full flex flex-col justify-center items-center gap-y-8">
          <ContactForm />
        </div>
      </div>
      {/* Contact Details */}
      <div className="container md:mx-auto my-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-black gap-y-4 sm:gap-x-4 mt-[40rem] sm:mt-[38rem] md:mt-[28rem]">
        {ContactData.map((contact, index) => (
          <ContactCard
            key={index}
            icon={contact.icon}
            title={contact.title}
            desc={contact.desc}
            ctaText={contact.ctaText}
            ctaUrl={contact.ctaUrl}
          />
        ))}
      </div>
    </section>
  );
}
