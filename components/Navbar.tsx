import React, { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative cont mx-auto h-[51px] flex items-center justify-between">
      <div className="flex items-center gap-[4px]">
        <Logo />
        <span className="text-[24px] font-bai font-medium">CYBER CLUB</span>
      </div>

      {/* Mobile menu button */}
      <button 
        className="lg:hidden z-50 p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
      </button>

      {/* Desktop menu */}
      <ul className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-[30px]">
        <li className='flex items-center gap-[5px]'>
          <img src='/home.svg' alt="Home" />
          <Link href="/" className="text-[16px] leading-[16px] font-bahn text-white hover:text-[#EDF67D] transition-colors duration-300">
            ГЛАВНАЯ
          </Link>
        </li>
        <li className='flex items-center gap-[5px]'>
          <img src='/rocket.svg' alt="Services" />
          <Link href="/" className="text-[16px] leading-[16px] font-bahn text-white hover:text-[#EDF67D] transition-colors duration-300">
            УСЛУГИ
          </Link>
        </li>
        <li className='flex items-center gap-[5px]'>
          <img src='/gamepad.svg' alt="Tournaments" />
          <Link href="/" className="text-[16px] leading-[16px] font-bahn text-white hover:text-[#EDF67D] transition-colors duration-300">
            ТУРНИРЫ
          </Link>
        </li>
        <li className='flex items-center gap-[5px]'>
          <img src='/blocks.svg' alt="News" />
          <Link href="/" className="text-[16px] leading-[16px] font-bahn text-white hover:text-[#EDF67D] transition-colors duration-300">
            НОВОСТИ
          </Link>
        </li>
      </ul>

      {/* Mobile menu */}
      <div className={`lg:hidden fixed inset-0 bg-[#252129] z-40 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="flex flex-col items-center justify-center h-full gap-8">
          <li className='flex items-center gap-[5px]'>
            <img src='/home.svg' alt="Home" />
            <Link href="/" className="text-[20px] font-bahn text-white hover:text-[#EDF67D] transition-colors duration-300">
              ГЛАВНАЯ
            </Link>
          </li>
          <li className='flex items-center gap-[5px]'>
            <img src='/rocket.svg' alt="Services" />
            <Link href="/" className="text-[20px] font-bahn text-white hover:text-[#EDF67D] transition-colors duration-300">
              УСЛУГИ
            </Link>
          </li>
          <li className='flex items-center gap-[5px]'>
            <img src='/gamepad.svg' alt="Tournaments" />
            <Link href="/" className="text-[20px] font-bahn text-white hover:text-[#EDF67D] transition-colors duration-300">
              ТУРНИРЫ
            </Link>
          </li>
          <li className='flex items-center gap-[5px]'>
            <img src='/blocks.svg' alt="News" />
            <Link href="/" className="text-[20px] font-bahn text-white hover:text-[#EDF67D] transition-colors duration-300">
              НОВОСТИ
            </Link>
          </li>
        </ul>
      </div>

      <button className='hidden lg:flex bg-gradient-to-br from-[#A3A3CF] to-[#8142F6] items-center rounded-[70px] px-[20px] h-[31px] text-[18px]'>
        <img src='/headphone.svg' alt="Phone" />
        <span className='text-[18px] ml-[13px] leading-[18px] font-semibold text-white transition-colors duration-300'>
          +7 (937) 533-83-38
        </span>
      </button>
    </nav>
  );
};

export default Navbar;