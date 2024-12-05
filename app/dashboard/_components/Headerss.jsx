import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Headerss() {
  return (
    <div className='flex justify-between items-center p-5 shadow-sm'>
        <Image src={'/favicon.svg'} width={30} height={30}/>
        <UserButton/>
    </div>
  )
}

export default Headerss