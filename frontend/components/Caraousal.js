import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import splash from "../assets/splash.jpg"
import splash2 from "../assets/splash2.jpg"
import logo from "../assets/logo.png"
import Navbar from '../components/Navbar'

const Caraousal = () => {
  return (
    <div className="relative h-[40rem] md:h-[50rem] bg-red-900 overflow-hidden">
      <div className="bg-black h-[40rem] z-10 absolute  w-[100%] md:h-[50rem] opacity-80"></div>
      <Image
        src={splash}
        alt=""
        className="hidden z-0 absolute w-[full] h-[50rem] opacity-70 object-cover md:flex"
      />
      <Image
        src={splash2}
        alt=""
        className=" z-0 absolute w-[full] h-[40rem] opacity-70 object-cover md:hidden"
      />
      <div className="m-4 z-20 w-full  absolute md:flex">
        <div className="md:ml-10">
          <Image
            src={logo}
            alt=""
            className="min-w-[5rem] w-[20rem]  md:w-[25rem] md:min-w-[10rem]"
          />
        </div>
        <div className="hidden md:hidden lg:w-3/6 lg:flex lg:justify-end xl:w-4/6">
          <Navbar />
        </div>
      </div>
      <div className="flex z-20 flex-col m-4 mt-[10rem] sm:w-5/6 md:mt-[12rem] absolute  md:grid md:grid-cols-5 lg:w-5/6">
        <div className="md:ml-12 md:col-span-3">
          <h1 className="text-white text-2xl font-bold  md:text-[2.5rem] md:leading-[3rem]">
            Are you looking to import or shop contemporary furniture from china
            to India?
          </h1>
          <h2 className=" mt-8 text-base md:text-lg">
            We can help you at each and every step of your logistic
            requirements.
          </h2>
          <h2 className="text-base md:text-lg">
            just fill up the below form and our experts will get in touch with
            you and help you on getting your products at your door step.
          </h2>
          <div className="bg-blue-900 px-6 py-2 absolute mt-8 cursor-pointer  rounded-md">
            <h2 className="text-white text-md">Contact Us</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Caraousal