import React from 'react';

type HardwareCardProps = {
  imageSrc: string;
  title: string;
  color1: string;
  color2: string;
};

const HardwareCard= ({imageSrc, title, color1, color2}: HardwareCardProps) => (
  <div className="h-[62px] rounded-[8px] overflow-hidden flex items-center" style={{ backgroundColor: color1 }}>
    <div className='min-w-[74px] h-full rounded-[8px] relative' style={{ backgroundColor: color2 }}>
      <img src={imageSrc} className="absolute z-50 left-0 top-1/2 -translate-y-1/2" />
      <img src={imageSrc} className="absolute z-50 left-0 top-1/2 -translate-y-1/2" />
    </div>
    <span className='px-[10px] font-bahn text-[16px]'>{title}</span>
  </div>
);

export default HardwareCard;
