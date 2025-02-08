import Link from "next/link";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Sheet } from "@/components/ui/sheet";
import { SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div className="md:max-w-[1920px] bg-black">
      <div className="flex justify-between items-center h-[90px] w-full px-8">
        <div className="flex items-center">
          <h1 className="font-bold text-2xl text-white">Food</h1>
          <span className="font-bold text-2xl text-[#FF9F0D]">tuck</span>
        </div>

        {/* Destop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/HeroSection"
            className="text-lg font-bold hover:text-[#FF9F0D] text-white"
          >
            Home
          </Link>
          <Link
            href="/menu"
            className="text-lg font-bold text-white  hover:text-[#FF9F0D] "
          >
            Menu
          </Link>
          <Link
            href="/bloglist"
            className="text-lg font-bold text-white hover:text-[#FF9F0D]"
          >
            Blog
          </Link>
          <Link
            href="/chef"
            className="text-lg font-bold text-white hover:text-[#FF9F0D]"
          >
            Pages
          </Link>
          <Link
            href="/about"
            className="text-lg font-bold text-white hover:text-[#FF9F0D]"
          >
            About
          </Link>
          <Link
            href="/shop"
            className="text-lg font-bold text-white hover:text-[#FF9F0D]"
          >
            Shop
          </Link>
          <Link
            href="/404error"
            className="text-lg font-bold text-white hover:text-[#FF9F0D]"
          >
            Contact
          </Link>
        </nav>

        {/* Hamburger Menu (Mobile) */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <GiHamburgerMenu size={24} className="text-white" />
          </SheetTrigger>
          <SheetContent className="p-6">
            <nav className="space-y-4">
              <Link
                href="/HeroSection"
                className="text-lg font-bold text-[#FF9F0D] block"
              >
                Home
              </Link>
              <Link href="/menu" className="text-lg font-bold text-black block">
                Menu
              </Link>
              <Link
                href="/bloglist"
                className="text-lg font-bold text-black block"
              >
                Blog
              </Link>
              <Link href="/chef" className="text-lg font-bold text-black block">
                Pages
              </Link>
              <Link
                href="/about"
                className="text-lg font-bold text-black block"
              >
                About
              </Link>
              <Link href="/shop" className="text-lg font-bold text-black block">
                Shop
              </Link>
              <Link
                href="/contact"
                className="text-lg font-bold text-black block"
              >
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Action Icons */}
        <div className="flex items-center space-x-4">
          <IoSearch size={24} className="text-white hover:text-[#FF9F0D] cursor-pointer" />
          <Link href="/signup" className="hover:text-[#FF9F0D] cursor-pointer ">
            <AiOutlineUser size={24} className="text-white hover:text-[#FF9F0D] cursor-pointer" />
          </Link>
          <HiOutlineShoppingBag size={24} className="text-white hover:text-[#FF9F0D] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header;
