import React from 'react'
import { PiCalendar } from "react-icons/pi";
import { TiMessages } from "react-icons/ti";
import { PiUserCirclePlusLight } from "react-icons/pi";

const Leftside = () => {
  return (
    <div className='md:max-w-[872px] my-16 px-12 '>

      {/* First div */}
     <div className='md:mx-w-[871px] h-[520px] bg-[url(/images/bloglist1.png)] bg-cover bg-center'>    
    <button className='w-[60px] h-[60px] bg-[#FF9F0D] text-white rounded-[6px] ml-[20px] mt-[20px]'>14 feb</button>
    </div> 
    <p className='flex gap-2 my-6'><PiCalendar size={24} className='text-[#FF9F0D]'/>
   <span>Feb 14, 2022 /</span>
    <TiMessages size={24} className='text-[#FF9F0D]'/>
    <span> 3 /</span>
    <PiUserCirclePlusLight size={24} className='text-[#FF9F0D]'/>
    <span> admin</span>
    </p>
    <h2 className='font-bold text-[24px] mb-6'>10 Reasons To Do A Digital Detox Challenge </h2>
    <p className='text-[16px] md:max-w-[678px] text-justify'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
    <button className='w-[172px] h-[52px] text-[#FF9F0D] border-[#FF9F0D] border-[1px] my-8'>Read More</button>
    
    {/* Second Div */}
    <div className='md:mx-w-[871px] h-[520px] bg-[url(/images/bloglist2.png)] bg-cover bg-center'>    
    <button className='w-[60px] h-[60px] bg-[#FF9F0D] text-white rounded-[6px] ml-[20px] mt-[20px]'>14 feb</button>
    </div> 
    <p className='flex gap-2 my-6'><PiCalendar size={24} className='text-[#FF9F0D]'/>
   <span>Feb 14, 2022 /</span>
    <TiMessages size={24} className='text-[#FF9F0D]'/>
    <span> 3 /</span>
    <PiUserCirclePlusLight size={24} className='text-[#FF9F0D]'/>
    <span> admin</span>
    </p>
    <h2 className='font-bold text-[24px] mb-6'>Traditional Soft Pretzels with Sweet Beer Cheese</h2>
    <p className='text-[16px] md:max-w-[678px] text-justify'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
    <button className='w-[172px] h-[52px] text-[#FF9F0D] border-[#FF9F0D] border-[1px] my-8'>Read More</button>
    
    {/* Third Div */}
    <div className='md:mx-w-[871px] h-[520px] bg-[url(/images/bloglist3.png)] bg-cover bg-center'>    
    <button className='w-[60px] h-[60px] bg-[#FF9F0D] text-white rounded-[6px] ml-[20px] mt-[20px]'>14 feb</button>
    </div> 
    <p className='flex gap-2 my-6'><PiCalendar size={24} className='text-[#FF9F0D]'/>
   <span>Feb 14, 2022 /</span>
    <TiMessages size={24} className='text-[#FF9F0D]'/>
    <span> 3 /</span>
    <PiUserCirclePlusLight size={24} className='text-[#FF9F0D]'/>
    <span> admin</span>
    </p>
    <h2 className='font-bold text-[24px] mb-6'>The Ultimate Hangover Burger: Egg in a Hole Burger</h2>
    <p className='text-[16px] md:max-w-[678px] text-justify'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
    <button className='w-[172px] h-[52px] text-[#FF9F0D] border-[#FF9F0D] border-[1px] my-8'>Read More</button>
    
    {/* Forth Div */}
    <div className='md:mx-w-[871px] h-[520px] bg-[url(/images/bloglist4.png)] bg-cover bg-center'>    
    <button className='w-[60px] h-[60px] bg-[#FF9F0D] text-white rounded-[6px] ml-[20px] mt-[20px]'>14 feb</button>
    </div> 
    <p className='flex gap-2 my-6'><PiCalendar size={24} className='text-[#FF9F0D]'/>
   <span>Feb 14, 2022 /</span>
    <TiMessages size={24} className='text-[#FF9F0D]'/>
    <span> 3 /</span>
    <PiUserCirclePlusLight size={24} className='text-[#FF9F0D]'/>
    <span> admin</span>
    </p>
    <h2 className='font-bold text-[24px] mb-6'>My Favorite Easy Black Pizza Toast Recipe</h2>
    <p className='text-[16px] md:max-w-[678px] text-justify'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
    <button className='w-[172px] h-[52px] text-[#FF9F0D] border-[#FF9F0D] border-[1px] my-8'>Read More</button>
    </div>   
  )
}

export default Leftside
