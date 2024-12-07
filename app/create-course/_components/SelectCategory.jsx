import CategoryList from '@/app/_shared/CategoryList'
import Image from 'next/image'
import React from 'react'

function SelectCategory() {
  return (
    <div>
      <div className='md:px-20 mt-4'>
        <h2 className='my-5'>Select the Course Category</h2>
      </div>
      <div className='grid grid-cols-3 gap-10'>
        {CategoryList.map((item, index) => (
          <div className='flex flex-col p-5 border 
        items-center rounded-xl hover:border-primary hover:bg-blue-50
        cursor-pointer'>
            <Image src={item.icon} width={50} height={50} />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>

  );
}

export default SelectCategory