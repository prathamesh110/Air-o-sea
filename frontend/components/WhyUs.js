import Image from 'next/image'
import splash from "../assets/why us/splash.jpg"
import splash2 from "../assets/why us/splash2.jpg"
import { BiSupport } from 'react-icons/bi';
import { TbHeartHandshake } from 'react-icons/tb';

import { HiLanguage } from 'react-icons/hi2';
import { MdLanguage } from 'react-icons/md';

const WhyUs = () => {
  return (
    <div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 xl:h-[43rem]  mt-10">
      <div className="flex relative z-10 overflow-hidden">
        {/* <div className='hidden md:flex'>
            <Image src={splash} alt="" className=" " />
        </div> */}
        <div className="z-20 relative overflow-hidden">
          <div className="relative">
            <Image src={splash2} alt="" className="" />
          </div>
        </div>
      </div>
      <div className=" text-center flex  items-center flex-col">
        <div className="w-3/4 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold  md:mt-6 text-black">
            Why Should You business with Us?
          </h2>
        </div>
        <div className='w-5/6'>
          <h2 className="text-gray-500 text-base mt-4 text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </h2>
        </div>
        <div className='w-4/6 justify-center'>
            <div className='grid grid-cols-2 gap-4'>
                <div className='mt-[3rem] flex flex-col items-center'>  
                    <BiSupport className='text-green-500 text-4xl' />
                    <h2 className='text-black font-bold text-base'>24X7 Presence in China.</h2> 
                </div>

                <div className='mt-[3rem] flex flex-col items-center'>  
                    <TbHeartHandshake className='text-green-500 text-4xl' />
                    <h2 className='text-black font-bold text-base'>Local market expertise in India and China.</h2> 
                </div>
            </div>

            <div className='grid grid-cols-2 gap-4'>
                <div className='mt-[3rem] flex flex-col items-center'>  
                    <HiLanguage className='text-green-500 text-4xl' />
                    <h2 className='text-black font-bold text-base'>Bilingual Support in India and China.</h2> 
                </div>

                <div className='mt-[3rem] flex flex-col items-center'>  
                    <MdLanguage className='text-green-500 text-4xl' />
                    <h2 className='text-black font-bold text-base'>Excellent Market reach across India.</h2> 
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs