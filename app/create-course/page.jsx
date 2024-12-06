"use client"

import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import { BiSolidCategory } from "react-icons/bi";
import { MdTopic } from "react-icons/md";
import { SlOptions } from "react-icons/sl";
import SelectCategory from './_components/SelectCategory';
import TopicDescription from './_components/TopicDescription';
import SelectOption from './_components/SelectOption';

function CreateCourse() {
    const StepperOptions=[
        {
        id:1,
        name:'Category',
        icon:<BiSolidCategory />
        },
        {
            id:1,
            name:'Topic & Desc',
            icon:<MdTopic />
        },
        {
            id:1,
            name:'Options',
            icon:<SlOptions />
        }
    ]

    const [activeIndex, setActiveIndex]=useState(0); 
  return (
    <div>
        {/* Stepper */}
        <div className='flex flex-col justify-center items-center mt-10'>
            <h2 className='text-3xl text-primary font-medium'>Create Course</h2>
            <div className='flex mt-10'>
                {StepperOptions.map((item,index)=>(
                    <div key={item.id} className='flex items-center'>
                        <div className='flex flex-col items-center w-[100px] md:w-[100px] '>
                            <div className={`bg-gray-200 p-3 rounded-full text-white
                                ${activeIndex>=index && 'bg-purple-500'}`}>
                            {item.icon}
                            </div>
                            <h2 className='text-black text-sm mt-2'>{item.name}</h2>   
                        </div> 
                        {index!=StepperOptions?.length-1&&
                        (<div className={`h-1 w-[100px] md:w-[100px] rounded-full lg:w-[170px] bg-gray-300
                        ${activeIndex-1>=index && 'bg-purple-500'}`}>
                        </div>)}
                    </div>
                ))}
            </div>
        </div>
        <div className='px-10 md:px-20 lg:px-44 -scroll-mt-10'>
            {/* Components */}
            {activeIndex === 0 ? <SelectCategory /> :
             activeIndex === 1 ? <TopicDescription /> : 
             <SelectOption/>}

        {/* Next & Previous button */}
        <div className='flex justify-between mt-10'>
            <Button disabled={activeIndex==0} 
            variant='outline'
            onClick={()=>setActiveIndex(activeIndex-1)}>Previous</Button>
           {activeIndex<2 &&<Button onClick={()=>setActiveIndex(activeIndex+1)}>Next</Button> }
           {activeIndex==2 &&<Button onClick={()=>setActiveIndex(activeIndex+1)}>Generate Course Layout</Button>} 
        </div>
        </div>
        
    </div>
  )
}

export default CreateCourse