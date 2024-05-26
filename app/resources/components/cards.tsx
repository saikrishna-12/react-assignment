import Image from 'next/image';
import React from 'react';

interface CardProps {
  title: string;
  icon_url: string;
  link: string;
  description: string;
  category: string;
  tag: string;
  id: string;
}

const Card: React.FC<CardProps> = ({
  title,
  icon_url,
  link,
  description,
  category,
}) => {
  return (
    <div className="w-[360px] h-[192px] border rounded-md bg-white shadow-md overflow-hidden">
      <div className="flex items-center p-4 mt-2">
        <img height={42} width={42} src={icon_url} alt={title} className="w-12 rounded shadow-md border-2 border-[#D7DFE9] h-12 mr-4" />
        <div>
          <h3 className="text-[16px] font-medium font-sans ">
            {title}
          </h3>
          <p className="text-[14px] text-[#7E858E] font-sans font-extralight">{category}</p>
        </div>
        
      </div>
      <div className="p-4 pt-0">
      <a href={link} className='text-primary font-sans text-[14px] font-light'>{link}</a>
      </div>
      <div className="p-4 pt-0">
      
        <p className=" text-[#7E858E] text-[14px] line-clamp-3 font-sans font-extralight">{description}</p>
      </div>
    </div>
  );
};

export default Card;
