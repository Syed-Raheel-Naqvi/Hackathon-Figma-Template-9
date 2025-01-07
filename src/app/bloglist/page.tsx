import Common from '@/components/Common'
import React from 'react'
import Leftside from './leftside'
import Rightside from './rightside'

const page = () => {
  return (
    <div className='md:max-w-[1920px]'>
      <Common title="Blog List" subtitle="Blog"/>
    <div className='md:max-w-[1320px] gap-4 flex flex-col md:flex-row'>
    <Leftside/>
    <Rightside/>
    </div>
    </div>
  )
}

export default page
