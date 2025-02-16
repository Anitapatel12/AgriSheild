import React from 'react'
import SideBar from './_components/SideBar'
import Headerss from './_components/Headerss'



function DashboardLayout({children}) {
  return (
    <div>
        <div className='md:w-64 hidden md:block'>
            <SideBar/>
        </div>
        <div className='md:ml-64 '>
           <Headerss/>
        <div className='p-10'>{children}</div>
        </div>
        
    </div>
  )
}

export default DashboardLayout