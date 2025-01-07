import React from 'react'
import { CiSearch } from "react-icons/ci";
import Image from 'next/image';
import { FaStar } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";

interface Data {
    id: number;
    img: string;
    date: string;
    des: string
}
interface Data1{
    id: number;
    img: string;
    title: string;
    review: number;
}
const Rightside = () => {
    const data: Data[] = [
        {
            id: 1,
            img: "/images/recentpost1.png",
            date: "June 22, 2020",
            des: "Lorem ipsum dolor sit cingelit, sed do."
        },
        {
            id: 2,
            img: "/images/recentpost2.png",
            date: "June 22, 2020",
            des: "Lorem ipsum dolor sit cingelit, sed do."
        },
        {
            id: 3,
            img: "/images/recentpost3.png",
            date: "June 22, 2020",
            des: "Lorem ipsum dolor sit cingelit, sed do."
        },
        {
            id: 4,
            img: "/images/recentpost4.png",
            date: "June 22, 2020",
            des: "Lorem ipsum dolor sit cingelit, sed do."
        }
    ]
    const data1: Data1[] = [
        {
            id:1,
            img:"/images/FilterByMenu01.png",
            title:"Chicken Fry",
            review:26
        },
        {
            id:2,
            img:"/images/burger.png",
            title:"Burger Food ",
            review:46
        }, {
            id:3,
            img:"/images/pizza.png",
            title:"Pizza",
            review:16
        }, {
            id:4,
            img:"/images/fruits.png",
            title:"Fresh Fruits",
            review:36
        }, {
            id:5,
            img:"/images/vegetables.png",
            title:"Vegetables",
            review:16
        }
    ]
    return (
        <div className='md:max-w-[424px] w-full my-12 h-fit px-3'>
            <button className='flex justify-between md:max-w-[424px] w-full my-4 border-gray-300 border-[2px] h-[70px] rounded-[6px]'><input type='text' placeholder='search your keyword...' className='ml-6 pt-5' /><span className='w-[76px] h-[66px] rounded-r-md bg-[#FF9F0D] text-white'><CiSearch size={24} className='ml-6 mt-6' /></span></button>
            {/* Second div */}
            <div className='md:max-w-[424px] w-full h-[430px] px-8 border-2 mb-4 border-gray-300'>
                <div className='w-[322px] h-[357px] space-y-2'>
                    <Image src="/images/prince.png" alt="client" width={140} height={120} className="mx-[90px] mt-6" />
                    <h2 className='text-center text-[20px] font-bold'>
                        Prince Miyako
                    </h2>
                    <p className='text-center'>Blogger/Photographer</p>
                    <p className='flex gap-4 justify-center'>
                        <span className='flex gap-1 mt-1'>
                            <FaStar size={14} className='text-[#FF9F0D]' />
                            <FaStar size={14} className='text-[#FF9F0D]' />
                            <FaStar size={14} className='text-[#FF9F0D]' />
                            <FaStar size={14} className='text-[#FF9F0D]' />
                            <FaStar size={14} className='text-[#FF9F0D]' />
                        </span>
                        <span className='text-[#828282]'>
                            (1 Review)
                        </span>
                    </p>
                    <p className='w-[322px] text-center'>
                        Lorem ipsum dolor sit?amet, consectetur
                        adipisicing elit.Veritatis distinctio, odio
                        eligendi suscipit reprehenderit atque
                    </p>
                    <span className='flex justify-center gap-3'>
                        <FaFacebookF size={20} />
                        <FaTwitter size={20} />
                        <FaInstagram size={20} />
                        <FaPinterest size={20} />
                    </span>
                </div>
            </div>
            {/* Third div */}
            <div className='md:max-w-[423px] h-[592px] w-full border-2 border-gray-300 '>
                <h2 className='text-[20px] font-bold mx-8 mt-6'>Recent Post</h2>
                {data.map((item) => (
                    <div key={item.id} className='flex mt-2 flex-col mx-4 border-b-2 border-gray-300 md:flex-row gap-4 p-4'>
                        <Image src={item.img} alt={item.date} width={99} height={92} className='w-[99px] h-[92px] rounded-md' />
                  <div>
                    <p className='opacity-30'>{item.date}</p>
                    <p>{item.des}</p>
                  </div>
                    </div>
                ))}
            </div>
            {/* Forth div */}
            <div className='md:max-w-[423px] h-[750px]  mt-4 w-full border-2 border-gray-300 '>
                <h2 className='text-[20px] font-bold mx-8 mt-6'>Filter By Menu</h2>
                {data1.map((item) => (
                    <div key={item.id} className='flex justify-between mt-2 flex-col mx-4 md:flex-row gap-4 p-4'>
                        <div className='flex gap-4'>
                        <Image src={item.img} alt={item.title} width={99} height={92} className='w-[99px] h-[92px] rounded-md' />
                  
                    <h2 className='font-bold text-[16px] mt-8'>{item.title}</h2>
                    </div>
                    <p className='mt-8 font-semibold'>{item.review}</p>
                  
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Rightside





