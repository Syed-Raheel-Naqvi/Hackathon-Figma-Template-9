import React from 'react';
import Image from 'next/image';

interface Data {
  id: number;
  img: string;
  title: string;
  date: string;
}

const Footer = () => {
  const data: Data[] = [
    {
      id: 1,
      img: "/images/image1.png",
      title: "Is fast food good for your body?",
      date: "February 28, 2022",
    },
    {
      id: 2,
      img: "/images/image1.png",
      title: "Change your food habit with organic food",
      date: "February 28, 2022",
    },
    {
      id: 3,
      img: "/images/image1.png",
      title: "Do you like fast food for your life?",
      date: "February 28, 2022",
    },
  ];

  return (
    <div className="w-full bg-black px-4 sm:px-8 lg:px-12">
      {/* Top Section */}
      <div className="max-w-[1920px] mx-auto py-8 border-b-2 border-[#FF9F0D] flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex-1 space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            <span className="text-[#FF9F0D]">St</span>ill You Need Our Support?
          </h2>
          <p className="text-white text-sm md:text-base">
            Dont wait, make a smart & logical quote here. Its pretty easy.
          </p>
        </div>
        <div className="flex w-full md:w-auto">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="flex-1 text-white bg-[#FF9F0D] rounded-sm px-8 py-2"
          />
          <button className="bg-white text-[#FF9F0D] px-6 py-2 rounded-sm">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Lower Section */}
      <div className="max-w-[1320px] mx-auto py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">About Us</h2>
          <p className="text-white text-sm mb-16">
            Corporate clients and leisure travelers have been relying on
            Groundlink for dependable, safe, and professional chauffeured car
            service in major cities across the world.
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-[#FF9F0D] rounded p-4">
              <Image src="/images/icon.png" alt="icon" width={40} height={40} />
            </button>
            <div>
              <p className="text-white text-sm font-bold">Opening Hours</p>
              <p className="text-white text-xs">
                Mon-Sat (8:00 - 6:00) <br />
                Sunday - Closed
              </p>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Useful Links</h2>
          <ul className="space-y-2">
            <li className="text-sm text-white">About</li>
            <li className="text-sm text-white">News</li>
            <li className="text-sm text-white">Partners</li>
            <li className="text-sm text-white">Team</li>
            <li className="text-sm text-white">Menu</li>
            <li className="text-sm text-white">Contacts</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Help?</h2>
          <ul className="space-y-2">
            <li className="text-sm text-white">FAQ</li>
            <li className="text-sm text-white">Terms & Conditions</li>
            <li className="text-sm text-white">Reporting</li>
            <li className="text-sm text-white">Documentation</li>
            <li className="text-sm text-white">Support Policy</li>
            <li className="text-sm text-white">Privacy</li>
          </ul>
        </div>

        {/* Recent Posts */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Recent Posts</h2>
          {data.map((item) => (
            <div className="flex items-start gap-4 mb-4" key={item.id}>
              <Image src={item.img} alt={item.title} width={80} height={80} />
              <div>
                <h3 className="text-sm text-white font-semibold">{item.title}</h3>
                <p className="text-xs text-white opacity-70">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
