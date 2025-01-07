import Common from '@/components/Common'
import React from 'react'
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";


const page = () => {
  return (
    <div className='md:max-w-[1920px]'>
      <Common title='Sign Up Page' subtitle='Sign Up' />
      <div className='md:max-w-[424px] w-full h-[624px] space-y-2 md:mx-[35%] my-24'>
        <div className='mx-8 shadow-sm shadow-[#FF9F0D] border-[1px]'>
        <h2 className='font-bold text-[20px] mt-4 mb-2 md:pl-[40px] pl-[25px]'>Sign Up</h2>
        <div className='flex p-4 gap-4 md:mx-8 mx-2 rounded-md border-[1px]'>
          <AiOutlineUser size={24} />
          <input type="text" placeholder='Name' className='text-black' />
        </div>
        <div className='flex p-4 gap-4 md:mx-8 mx-2 rounded-md border-[1px]'>
          <MdOutlineMailOutline size={24} />
          <input type="text" placeholder='Email' className='text-black' />
        </div>  
        <div className='flex p-4 gap-4 md:mx-8 mx-2 rounded-md border-[1px]'>
          <CiLock size={24} />
          <input type="password" placeholder='Password' className='text-black' />
        </div>
        <div className='flex p-4 gap-4 md:mx-8 mx-2'>
          <input type="checkbox" className='bg-[#FF9F0D] text-white' />
          <p>Reminder Me?</p>
        </div>
        <button className='md:max-w-[360px] h-[44px] w-full rounded-md bg-[#FF9F0D] text-white p-3'>Sign Up</button>
        <p className='text-right mt-4 mx-8'>Forgot Password</p> 
        <div className='w-full flex items-center justify-center'> 
        <hr className='w-1/3 bg-gray-500 border-[1px]'></hr>
        <span className='text-gray-500 border-[2px] p-2'>OR</span>
        <hr className='w-1/3 bg-gray-500 border-[1px]'/>
         </div>
        <div className='flex p-4 md:gap-16 gap-8 md:mx-8 mx-2 rounded-md border-[1px]'>
          <FcGoogle size={24} />
          <p>Sign up with Google</p>
          </div>
          <div className='flex p-4 md:gap-16 gap-8 md:mx-8 mx-2 rounded-md border-[1px]'>
          <FaApple size={24} />
        <p>Sign up with Apple</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default page 
