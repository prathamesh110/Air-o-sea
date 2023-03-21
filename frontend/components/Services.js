import Image from "next/image";
import splash from "../assets/Services/splash.jpg"
import { IoIosAirplane } from 'react-icons/io';


const Services = () => {
  return (
    <div className="flex xl:h-[43rem] justify-center items-center flex-col mt-10">
      <div className="flex justify-center items-center">
        {/* <div className=" border-x-[2rem] border-y-[0.1rem] border-green-500">
            <h1 className="hidden">-</h1>
        </div> */}
        <h2 className="text-green-500 ml-4 text-xl font-bold">
          Why Choose Us?
        </h2>
      </div>
      <h2 className="text-3xl px-[6px] text-center md:text-4xl font-bold mt-5 md:mt-6 text-black">
        We Provides Best Services
      </h2>
      <div className="w-4/6 md:w-5/6 flex justify-center mt-12">
        <div className="grid grid-rows-3 gap-10 md:grid-cols-3 md:grid-rows-1 ">
          <div>
            <div className="relative w-96 z-0">
              <div className="flex absolute z-20 bottom-0">
                <div className="bg-white ">
                  <div className="w-24 h-24 md:w-32 md:h-32 flex justify-center items-center">
                    <IoIosAirplane className="w-10 h-10 md:w-16 md:h-16 text-green-500" />
                  </div>
                </div>
                <div
                  class="w-0 h-0 
                  md:border-t-[128px] md:border-t-transparent
                  md:border-l-[60px] md:border-l-white
                  md:border-b-[0px] md:border-b-transparent 


                  border-t-[100px] border-t-transparent
                  border-l-[50px] border-l-white
                  border-b-[0px] border-b-transparent"
                ></div>
              </div>
              <Image src={splash} alt="" />
            </div>
            <div className="mt-8">
              <h1 className="text-black text-3xl">Logistic Service</h1>
              <h2 className="text-gray-500 text-base mt-4 line-clamp-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </h2>
              <div className="bg-green-500 rounded-md md:w-2/6   flex justify-center items-center mt-4 py-2">
                <h2>Know More</h2>
              </div>
            </div>
          </div>

          <div>
            <div className="relative z-0">
              <div className="flex absolute z-20 bottom-0">
                <div className="bg-white ">
                  <div className="w-24 h-24 md:w-32 md:h-32 flex justify-center items-center">
                    <IoIosAirplane className="w-10 h-10 md:w-16 md:h-16 text-green-500" />
                  </div>
                </div>
                <div
                  class="w-0 h-0 
                  md:border-t-[128px] md:border-t-transparent
                  md:border-l-[60px] md:border-l-white
                  md:border-b-[0px] md:border-b-transparent 


                  border-t-[100px] border-t-transparent
                  border-l-[50px] border-l-white
                  border-b-[0px] border-b-transparent"
                ></div>
              </div>
              <Image src={splash} alt="" />
            </div>
            <div className="mt-8">
              <h1 className="text-black text-3xl">Logistic Service</h1>
              <h2 className="text-gray-500 text-base mt-4 line-clamp-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </h2>
              <div className="bg-green-500 rounded-md md:w-2/6  flex justify-center items-center mt-4 py-2">
                <h2>Know More</h2>
              </div>
            </div>
          </div>

          <div>
            <div className="relative z-0">
              <div className="flex absolute z-20 bottom-0">
                <div className="bg-white ">
                  <div className="w-24 h-24 md:w-32 md:h-32 flex justify-center items-center">
                    <IoIosAirplane className="w-10 h-10  md:w-16 md:h-16 text-green-500" />
                  </div>
                </div>
                <div
                  class="w-0 h-0 
                    md:border-t-[128px] md:border-t-transparent
                    md:border-l-[60px] md:border-l-white
                    md:border-b-[0px] md:border-b-transparent 


                    border-t-[100px] border-t-transparent
                    border-l-[50px] border-l-white
                    border-b-[0px] border-b-transparent 
                    
                    
                    
                    
                    "
                ></div>
              </div>
              <Image src={splash} alt="" />
            </div>
            <div className="mt-8">
              <h1 className="text-black text-3xl">Logistic Service</h1>
              <h2 className="text-gray-500 text-base mt-4 line-clamp-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </h2>
              <div className="bg-green-500 rounded-md md:w-2/6  flex justify-center items-center mt-4 py-2">
                <h2>Know More</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services