import React from 'react'
import Headerss from '../dashboard/_components/Headerss'

function CreateCourseLayout({children}) {
  return (
    <div>
        <Headerss/>
        {children}</div>
  )
}

export default CreateCourseLayout