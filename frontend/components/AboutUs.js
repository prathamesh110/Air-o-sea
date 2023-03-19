import Image from "next/image"
import splash from "../assets/AboutUs/splash.png"
import icon1 from "../assets/AboutUs/icon1.png"
import icon2 from "../assets/AboutUs/icon2.png"
import icon3 from "../assets/AboutUs/icon3.png"

const AboutUs = () => {
  return (
    <div className="relative h-[43rem] grid grid-rows-3 md:grid-cols-3 md:grid-rows-1">
      <div className="h-[15rem] w-full md:h-full">
        <div className="relative z-10 flex justify-center">
          <div className="absolute grid grid-cols-3 gap-12 my-10 md:gap-32 md:grid-rows-3 md:grid-cols-1">
            <div className="flex justify-center items-center flex-col">
              <Image src={icon3} alt="" />
              <h2 className="text-center mt-3">EPC</h2>
            </div>

            <div className="flex justify-center items-center flex-col">
              <Image src={icon1} alt="" />
              <h2 className="text-center mt-3">Import & Export Services</h2>
            </div>

            <div className="flex justify-center items-center flex-col">
              <Image src={icon2} alt="" />
              <h2 className="text-center mt-3">
                International Joint Venture projects
              </h2>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full md:h-full bg-black opacity-90 ">
          <Image
            className=" object-cover object-top brightness-50"
            src={splash}
            fill
            alt=""
          />
        </div>
      </div>
      <div className="row-span-2 md:col-span-2 px-6 md:px-8 relative md:w-5/6">
        <div className="flex justify-start items-center mt-16">
          <div className=" border-x-[2rem] border-y-[0.1rem] border-green-500">
            <h1 className="hidden">-</h1>
          </div>
          <h2 className="text-green-500 ml-4 text-xl font-bold">About us</h2>
        </div>
        <div className="mt-8 ml-2 flex justify-start items-center">
          <div>
            <div className="grid grid-cols-3 w-16 ">
              <div className=" w-3 h-3 rounded-full bg-black"></div>
              <div className=" w-3 h-3 rounded-full bg-green-500"></div>
              <div className=" w-3 h-3 rounded-full bg-black"></div>
            </div>

            <div className="grid grid-cols-3 w-16  mt-2">
              <div className=" w-3 h-3 rounded-full bg-white"></div>
              <div className=" w-3 h-3 rounded-full bg-black"></div>
              <div className=" w-3 h-3 rounded-full bg-black"></div>
            </div>

            <div className="grid grid-cols-3 w-16  mt-2">
              <div className=" w-3 h-3 rounded-full bg-white"></div>
              <div className=" w-3 h-3 rounded-full bg-white"></div>
              <div className=" w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>
          <div className="ml-4">
            <h1 className="text-black">
              Welcome To Airosea International Ltd.
            </h1>
          </div>
        </div>
        <div className="my-6 mx-2">
          <h2 className="text-black text-left font-semibold">
            Air O Sea International Ltd. is a disciplined multinational, dynamic
            organization with High Value and Integrity. We are strong bridge
            between India and China Businesses. With strong experience in this
            area we are providing values to our customers in various service
            lines. We not only introduce the business opportunities but making
            our customers comfortable in overseas business.
          </h2>
        </div>

        <div className="mx-2">
          <h2 className="text-black text-left font-semibold">
            Our core services includes and not limited to Trading , Import –
            Export, End to End Project Management, Business Consulting. We are
            having Registered Office in Hong Kong and Corporate office in Pune,
            India and operating from China. We have strong network of partners
            which gives us the knowledge and capacity to give you ideal and best
            in the industry output. We have in-depth knowledge and strong
            experience in a wide range of products such as Electronics,
            Furnitures, LEDs, Gifts, Textiles, Tools , Toys, Food, Appliances,
            Mobile and many more.
          </h2>
        </div>

        <div className="mx-2">
          <h2 className="text-black text-left font-semibold">
            At Air O Sea International Ltd., we give you Risk free access to
            China’s abundant sourcing opportunities. We are focused on Services
            and have the passion to move in all diversified area for our
            customers. It’s our commitment to assist our customers in their
            organization’s growth.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default AboutUs