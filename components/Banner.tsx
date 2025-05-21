import React from 'react';

type BannerProps = {
  text1: string;
  text2: string;
  text3: string;
  imageSrc: string;
  buttonText: string;
};

const Banner = ({text1, text2, text3, imageSrc, buttonText}: BannerProps) => (
  <div className="bg-[#252129] relative w-full h-[500px] rounded-[32px] overflow-hidden">
    <div className="absolute inset-0 z-10 pointer-events-none rounded-[32px] border-3 border-white/15" />
    <div className='px-[15px] py-[20px] max-w-[540px] absolute bottom-[25px] left-[20px] bg-black/40 shadow-xl backdrop-blur-xl flex flex-col rounded-[15px]'>
      <span className='font-bahn text-[24px] leading-[32px]'>{text1}</span>
      <div className='flex items-center gap-[8px] mt-[15px]'>
        <div className='bg-[#8CFF00] shadow-sm shadow-[#8CFF00] w-[6px] h-[6px] rounded-full'/>
        <span className='text-[14px] leading-[17px]'>{text2}</span>
      </div>
      <div className='flex items-center gap-[15px] mt-[15px]'>
        <button className='bg-gradient-to-br from-[#A3A3CF] to-[#8142F6] h-[40px] min-w-[210px] text-center rounded-[70px] text-[16px] font-bold'>
          {buttonText}
        </button>
        <span className='text-[14px] text-white/60 font-inter font-base'>{text3}</span>
      </div>
    </div>
    <img src={imageSrc} className='h-full'/>
  </div>
);

export default Banner;
