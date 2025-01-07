import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
    <section className='bg-black px-3 md:px-[135px] flex flex-col justify-evenly md:flex-row  md:items-center py-[50px]'>
        {/* Heading */}
        <div className='text-white w-full md:w-[50%]'>
  <h1 className='md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font whitespace-nowrap'>
    Its Quick & Amusing!
  </h1>

  <h1 className='text-[25px] md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal'>
    <span className='text-[#FF9F0D]'>Th</span>e Art of speed food Quality
  </h1>
  <p className='text-[10px] md:text-[16px] font-normal'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
  </p>

  <div className='flex flex-col md:flex-row items-center md:items-start'>
  <button className='bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[190px] md:h-[60px] rounded-[40px] mt-[32px] hover:bg-yellow-800'>
    See More
  </button>
  </div>
  </div>
  {/* Image */}

  <div className='mt-[50px] md:mt-0'>   
            <Image 
                src="/images/food1.png" alt='Hero Image' width={700} height={500} className=''/>
        </div>
    </section>
    <main className="min-h-screen bg-black text-white p-4 md:p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-center">
      <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          <span className="text-[#FF9F0D]">About us</span>
        </h2>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          <span className="text-[#FF9F0D]">We</span> Create the best<br />foody product
        </h1>
        <p className="mb-6 text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>
        <ul className="mb-8 space-y-2">
          <li>Lacus nisi, et ac dapibus sit eu velit in consequat.</li>
          <li>Quisque diam pellentesque bibendum non dui volutpat fringilla</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
        <button className="bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[160px] md:h-[50px] lg:w-[190px] lg:h-[60px] rounded-[40px] hover:bg-yellow-800 duration-100">
            Read More
        </button>
      </div>
      <div className="lg:w-1/2 relative">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <Image
              src="/images/food2.png"
              alt="Egg and avocado dish"
              width={600}
              height={300}
              className="rounded-lg object-cover w-full h-[300px]"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/food3.png"
              alt="Grilled dish"
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-[200px]"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/food4.png"
              alt="Sandwich"
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-[200px]"
            />
          </div>
        </div>
      </div>
    </main>
    </div>
  )
}

export default page
