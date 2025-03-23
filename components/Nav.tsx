"use client"
import Image from "next/image";
import { useState } from "react";
import { FaSearch , FaBars } from 'react-icons/fa';
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false); // State for handling menu toggle

    const toggleMenu = () => {
      setIsOpen(!isOpen); // Toggle the menu visibility
    };
  return (
    <div className="px-[60px] box-border py-0 h-fit w-screen flex overflow-x-hidden justify-between border-b-2 z-30 border-amber-50">
      <div className=" py-[25px] flex z-40">
      <div className="flex items-center justify-between w-screen sm:w-auto z-40">
            <div className="relative w-32 h-9 z-40">
            <Image 
            src="/logo.png"
            alt="Logo"
            fill
            className="object-contain z-40" // Ensures the image scales properly
          />
            </div>
         <div className="z-40">
         <button onClick={toggleMenu} className=" lg:hidden z-40">
          <FaBars size={24} className="z-40"/> {/* Hamburger Icon */}
        </button>
         </div>
          
        </div>
        <nav className=" hidden lg:flex text-white  items-center ml-5 z-40 ">
          <ul className="flex z-40">
            <li>Home</li>
            <li className="ml-[55px] z-40">Inside Look</li>
            <li className="ml-[55px] z-40">Services</li>
            <li className="ml-[55px] z-40">Product</li>
            <li className="ml-[55px] z-40">Blog</li>
            <li className="ml-[55px] z-40">Contact</li>
          </ul>
        </nav>
      </div>
      <div className="hidden sm:flex z-40">
        <div className="flex items-center gap-4 h-full z-40">
            <div className="z-40">
                <Image
                  src='/message.png'
                  width={30}
                  height={30}
                  alt="message"
                  className="z-40">
                </Image>
            </div>
            <div className="z-40">
                <p className="z-40">Contact support</p>
                <p className="z-40">0941330816</p>
            </div>
        </div>
        <div className="flex items-center z-40">
        <FaSearch className="ml-[90px] z-40" size={25}></FaSearch>
        </div>
      </div>
    </div>
  );
};

export default Nav;
