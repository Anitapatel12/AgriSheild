"use client";

import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';
import { HiPlus } from 'react-icons/hi'; // Add an icon
import { motion } from 'framer-motion'; // For animations

function AddCourse() {
  const { user } = useUser();
  
  return (
    <div className="p-6 space-y-10">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-lg shadow-lg p-6">
        <div className="flex flex-col md:w-1/2 space-y-4">
          <motion.h2 
            className="text-4xl font-semibold text-gray-900" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            Hello, <span className="font-bold text-blue-600">{user?.fullName}</span>
          </motion.h2>
          <p className="text-md text-gray-600">
            Know your Right with the Help of Agri Sheild
          </p>
          <div className="flex space-x-4">
            <Link href="/create-course">
              <Button className="flex items-center space-x-2 text-white bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:bg-gradient-to-l shadow-xl transition ease-in-out">
                <HiPlus className="text-lg" />
                <span>chat with AI</span>
              </Button>
            </Link>
            {/* Floating Action Button */}
            <motion.div 
              className="fixed bottom-10 right-10 bg-blue-600 rounded-full p-3 shadow-lg cursor-pointer" 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }}
            >
              <HiPlus className="text-white text-2xl" />
            </motion.div>
          </div>
        </div>

        {/* Image or Illustration */}
        <motion.div 
          className="md:w-1/2 flex justify-center items-center" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img src="/chatbot.jpeg" alt="AI Illustration" className="w-3/4 rounded-lg shadow-2xl" />
        </motion.div>
      </div>
      <div className="text-center py-6">
  <h2 className="text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
    Popular Insurance Among Farmers
  </h2>
  <p className="mt-2 text-md text-gray-600 md:text-lg font-serif italic tracking-wide">
  Explore trusted insurance options designed to safeguard farmers' livelihoods.
</p>

</div>


      {/* Course Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <motion.div 
          className="p-6 bg-blue-500 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out bg-cover bg-center"
          style={{ backgroundImage: 'url(/header.jpg)' }}
          whileHover={{ scale: 1.05 }}
        >
         <h3 className="text-2xl text-white font-bold mb-2">Pradhan Mantri Fasal Bima Yojana</h3>
          <p className="text-white mb-4">A government-backed crop insurance scheme providing financial stability to farmers against natural calamities.</p>
          <Link href="https://pmfby.gov.in/home" className="text-blue-200 hover:underline">Visit Site</Link>
        </motion.div>
        
        <motion.div 
          className="p-6 bg-purple-500 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out bg-cover bg-center"
          style={{ backgroundImage: 'url(/header.jpg)' }}
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl text-white font-semibold mb-2">Agriculture Insurance Company of India</h3>
          <p className="text-white mb-4">Provides crop insurance schemes to protect farmers against yield risks due to natural calamities and other factors.</p>
          <Link href="http://www.aicofindia.com/" className="text-purple-200 hover:underline">Visit site</Link>
        </motion.div>
        
        <motion.div 
          className="p-6 bg-green-500 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out bg-cover bg-center"
          style={{ backgroundImage: 'url(/header.jpg)' }}
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl text-white font-semibold mb-2">Bajaj Allianz Crop Insurance</h3>
          <p className="text-white mb-4">Crop insurance offered by Bajaj Allianz covering a variety of risks like droughts, floods, and pests for farmers.</p>
          <Link href="https://www.bajajallianz.com" className="text-green-200 hover:underline">Visit site</Link>
        </motion.div>
      </div>
    </div>
  );
}

export default AddCourse;
