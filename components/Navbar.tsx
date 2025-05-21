import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

const Navbar = () => (
  <nav className="relative cont mx-auto  h-[51px] flex items-center justify-between">
    <div className="flex items-center gap-[4px]">
      <Logo />
      <span className="text-[24px] font-bai font-medium">CYBER CLUB</span>
    </div>

     <ul className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-[30px]">
      <li className='flex items-center gap-[5px]'>
        <img src={'/home.svg'} />
        <Link href="/" className="text-[16px] leading-[16px] font-bahn text-white hover:text-[#EDF67D] transition-colors duration-300">
          ГЛАВНАЯ
        </Link>
      </li>
      <li className='flex items-center gap-[5px]'>
        <img src={'/rocket.svg'} />
        <Link href="/" className="text-[16px] leading-[16px] font-bahn text-white hover:text-[#EDF67D] transition-colors duration-300">
          УСЛУГИ
        </Link>
      </li>
      <li className='flex items-center gap-[5px]'>
        <img src={'/gamepad.svg'} />
        <Link href="/" className="text-[16px] leading-[16px] font-bahn text-white hover:text-[#EDF67D] transition-colors duration-300">
          ТУРНИРЫ
        </Link>
      </li>
      <li className='flex items-center gap-[5px]'>
        <img src={'/blocks.svg'} />
        <Link href="/" className="text-[16px] leading-[16px] font-bahn text-white hover:text-[#EDF67D] transition-colors duration-300">
          НОВОСТИ
        </Link>
      </li>
    </ul>
    <button className='bg-gradient-to-br from-[#A3A3CF] to-[#8142F6] flex items-center rounded-[70px] px-[20px] h-[31px] text-[18px]'>
      <img src={'/headphone.svg'} />
      <span className='text-[18px] ml-[13px] leading-[18px] font-semibold text-white transition-colors duration-300'>
        +7 (937) 533-83-38
      </span>
    </button>
  </nav>
);

export default Navbar;
