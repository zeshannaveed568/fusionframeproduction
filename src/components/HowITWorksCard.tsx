import { FC } from "react";

type HowITWorksCardProps = {
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
};

const HowITWorksCard: FC<HowITWorksCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 max-w-96'>
      <div className='border-black border-2 rounded-full p-4'>
        <Icon size={56} color={"black"} />
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h3 className='font-bold tracking-wider text-xl mb-2'>{title}</h3>
        <p className='text-center  md:text-lg'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default HowITWorksCard;
