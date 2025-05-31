import Image from 'next/image';
import React from 'react';

interface LogoProps {
  image: string;
  alt: string;
  text?: string;
}

const Logo = ({ image, alt, text }: LogoProps) => {
  return (
    <div
      className={
        'mt-4 text-lg font-bold flex items-center transition-all duration-300 h-20 p-3'
      }
    >
      <div className="relative w-16 h-16 flex items-center justify-center">
        <Image
          src={image}
          alt={alt || 'image-company-logo'}
          fill
          className="object-contain"
        />
      </div>
      <div
        className={
          'transition-all duration-300 overflow-hidden whitespace-nowrap ml-3 opacity-100 max-w-[160px]'
        }
      >
        <p className="font-normal">{'- ' + text || ''}</p>
      </div>
    </div>
  );
};

export default Logo;
