import { Button } from '@/components/ui/button'
// 
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <div
      className='flex justify-between items-center p-3 shadow-md'
      style={{
        backgroundColor: '#C1E1C1',
        backgroundImage: "url('/header.jpg')", // Adds the background image
        backgroundSize: 'cover', // Ensures the image covers the entire div
        backgroundPosition: 'center', // Centers the image
      }}
    >
      {/* Logo */}
      <Link href="/">
        <Image
          src="/agri.svg" // Replace with your actual logo file
          width={100}
          height={100}
          className="rounded-full shadow-lg"
          alt="Agri Shield Logo"
        />
      </Link>

      {/* Marquee effect for Namaste in multiple Indian languages */}
      <div className="flex-1 overflow-hidden ml-8 text-white">
        <div className="namaste-marquee">
          <span className="mr-8">नमस्ते </span>
          <span className="mr-8">নমস্কার </span>
          <span className="mr-8">નમસ્તે </span>
          <span className="mr-8">ನಮಸ್ತೆ </span>
          <span className="mr-8">നമസ്ക്കാരം </span>
          <span className="mr-8">नमस्कार </span>
          <span className="mr-8">ନମସ୍କାର </span>
          <span className="mr-8">ਸਤ ਸ੍ਰੀ ਅਕਾਲ </span>
          <span className="mr-8">வணக்கம் </span>
          <span className="mr-8">నమస్కారం</span>
          <span className="mr-8">السلام علیکم </span>
        </div>
      </div>

      {/* Add more navigation or items as needed */}
    </div>
  );
}

export default Header;
