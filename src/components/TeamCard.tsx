import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

interface TeamCardProps {
  name: string;
  role: string;
  imageSrc: React.ReactNode;
  imageAlt: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, imageSrc }) => {
  return (
    <Card className='py-4'>
      <CardBody className='overflow-visible py-2'>
        {/* <Image
          alt={imageAlt}
          className='object-cover rounded-xl aspect-square'
          src={imageSrc}
          width={300}
          height={300}
        /> */}
        {imageSrc}
      </CardBody>
      <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
        <p className='text-tiny uppercase font-extrabold tracking-wider'>
          {name}
        </p>
        <h4 className='font-semibold text-sm'>{role}</h4>
      </CardHeader>
    </Card>
  );
};

export default TeamCard;
