import Image from 'next/image';
import React from 'react';

interface LogoProps {
  isExpanded: boolean;
  image: string;
  alt: string;
  text?: string;
}

const Logo = ({ image, alt, text, isExpanded }: LogoProps) => {
  return isExpanded ? (
    <div className="mt-4 text-lg font-bold flex">
      <Image
        src={image}
        alt={alt || 'image-company-logo'}
        width={62}
        height={62}
        className="mr-3"
      />
      {text && <p className="font-normal"> - {text}</p>}
    </div>
  ) : (
    <div className="mt-4 text-lg font-bold">
      <Image
        src={image}
        alt={alt || 'image-company-logo'}
        width={62}
        height={62}
      />
    </div>
  );
};

export default Logo;
