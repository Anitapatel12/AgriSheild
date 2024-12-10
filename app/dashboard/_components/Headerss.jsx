import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Headerss() {
 
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
      
          <Image
            src="/agri.svg" // Replace with your actual logo file
            width={100}
            height={100}
            className="rounded-full shadow-lg"
            alt="Agri Shield Logo"
          />
        
  
        {/* Marquee effect for Namaste in multiple Indian languages */}
        <div className="flex-10 overflow-hidden ml-8 text-white">
          <div className="namaste-marquee">
            <span className="mr-4">नमस्ते </span>
            <span className="mr-4">নমস্কার </span>
            <span className="mr-4">નમસ્તે </span>
            <span className="mr-4">ನಮಸ್ತೆ </span>
            <span className="mr-4">നമസ്ക്കാരം </span>
            <span className="mr-4">नमस्कार </span>
            <span className="mr-4">ନମସ୍କାର </span>
            <span className="mr-4">ਸਤ ਸ੍ਰੀ ਅਕਾਲ </span>
            <span className="mr-4">வணக்கம் </span>
            <span className="mr-4">నమస్కారం</span>
            <span className="mr-4">السلام </span>
          </div>
        </div>
  <div>
    <UserButton/>
  </div>
        {/* Add more navigation or items as needed */}
      </div>
    );
  }
  
  
  


export default Headerss