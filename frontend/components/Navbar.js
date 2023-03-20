import Image from "next/image";
import logo from "../assets/logo.png"

import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  return (
    <>
      <div className="p-4 z-40 w-full bg-white shadow-md opacity-95  flex fixed">
        <div className="md:ml-10">
          <Image
            src={logo}
            alt=""
            className="min-w-[5rem] w-[20rem]  md:w-[25rem] md:min-w-[10rem]"
          />
        </div>
        <div className="hidden md:hidden lg:w-3/6 lg:flex lg:justify-end xl:w-4/6">
          <div className="grid md:gap-1 lg:gap-8 grid-cols-4 justify-center items-center">
            <div className=" cursor-pointer">
              <h2 className="md:text-lg text-green-500">Home</h2>
            </div>
            <div className=" cursor-pointer">
              <h2 className="md:text-lg lg:text-xl text-blue-900">About us</h2>
            </div>
            <div className=" cursor-pointer">
              <h2 className="md:text-lg lg:text-xl text-blue-900">Services</h2>
            </div>
            <div className=" cursor-pointer">
              <h2 className="md:text-lg lg:text-xl text-blue-900">
                Contact Us
              </h2>
            </div>
          </div>
        </div>
        <div className="flex md:hidden text-blue-900 items-center w-1/4 justify-end">
          <AiOutlineMenu className="w-8 h-8" />
        </div>
      </div>
    </>
  );
}

export default Navbar