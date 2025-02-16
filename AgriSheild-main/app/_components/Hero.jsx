// // import React from 'react'

// // function Hero() {
// //   return (
// //     <section className="bg-gray-50">
// //   <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex  lg:items-center">
// //     <div className="mx-auto max-w-xl text-center">
// //       <h1 className="text-3xl font-extrabold text-primary sm:text-5xl">
// //         AGRI-SHEILD
// //         <strong className="font-bold text-black sm:block"> Custom Learning Paths, Powered by AI </strong>
// //       </h1>

// //       <p className="mt-4 sm:text-xl/relaxed">
// //         Unlock personalized education with AI-driven course creation.
// //          Tailor your learning journey to fit your unique goals and pace
// //       </p>

// //       <div className="mt-8 flex flex-wrap justify-center gap-4">
// //         <a
// //           className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
// //           href="#"
// //         >
// //           Get Started
// //         </a>

// //       </div>
// //     </div>
// //   </div>
// // </section>
// //   )
// // }

// // export default Hero
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <section
      className="bg-cover bg-center bg-gray-50"
      style={{
        backgroundImage: 'url("/smart.jpg")', // Replace with the actual URL of the image
      }}
    >
      <div className="bg-black/50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
          <div className="mx-auto max-w-xl text-center text-white">
            <h1
              className="text-4xl font-extrabold sm:text-5xl"
              style={{ fontFamily: "'Roboto Slab', serif" }} // Use a Google Font or custom font
            >
              AGRI-SHIELD
              <strong className="font-bold text-primary sm:block">
                {" "}
                AI-Driven Crop Insurance Made Simple
              </strong>
            </h1>

            <p
              className="mt-4 sm:text-xl/relaxed text-gray-200"
              style={{ fontFamily: "'Lato', sans-serif" }} // Add complementary font for the body text
            >
              Agri-Shield empowers farmers with a friendly platform to navigate
              crop insurance effortlessly. AI-driven tools ensure personalized
              solutions to protect your crops and secure your future.
            </p>

            <p
              className="mt-2 text-sm sm:text-base text-gray-300"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Whether you're a smallholder or large-scale farmer, our platform
              guides you with tailored insights and real-time support to
              maximize benefits.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              
               <Link href={'/dashboard'}><Button>Get Started</Button></Link>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
 