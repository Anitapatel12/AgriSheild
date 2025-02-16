"use client"

import { Progress } from '@/components/ui/progress';
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaHome } from "react-icons/fa";
import { GoShieldCheck } from "react-icons/go";
import { BsStack } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";


function SideBar() {
    const Menu=[
        {
           id:1,
           name:'Home',
           icon:<FaHome />,
           path:'/dashboard'
        },
        {
            id:1,
            name:' Policies',
            icon:<BsStack />,
            path:'/dashboard/explore'
         },
         {
            id:1,
            name:'About Us',
            icon:<GoShieldCheck />,
            path:'/dashboard/AboutUs'
         },
         {
            id:1,
            name:'FeedBack',
            icon:<IoMdLogOut />,
            path:'/dashboard/FeedBack'
         }
    ]

    const path=usePathname();
  return (
    <div className='fixed h-full md:w-64 p-5 shadow-md'>
        <Image src={'/agri.svg'} width={120} height ={120}  className="ml-9  rounded-full shadow-lg"/>
        <hr className='my-5'/>

        <ul>
            {Menu.map((item, index) => (
                <Link key={item.id || index}  href={item.path}>
                <div className={`flex items-center gap-2 text-gray-600 
                p-3 cursor-pointer hover:bg-gray-100
                 hover:text-black rounded-lg mb-2 ${item.path==path && 'bg-gray-100 text-black'}`}>
                <div className='text-2xl'>{item.icon}</div>
                    <h2>{item.name}</h2>
                </div>
                </Link>
            ))}

        </ul>
       
    </div>
  )
}

export default SideBar