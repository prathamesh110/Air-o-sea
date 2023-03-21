import Image from "next/image"
import splash from "../assets/why us/splash.jpg"

const ContactUs = () => {
  return (
    <div className="h-[43rem] flex justify-center items-center relative">
      <div className="bg-slate-200 w-[22rem] h-auto rounded-md z-20 flex justify-center mx-5 my-10 md:grid md:grid-cols-2 md:w-5/6">
        <div className="hidden md:flex">
          <Image src={splash} alt="" />
        </div>
        <div className="py-4 flex flex-col items-center">
          <h1 className="text-2xl md:text-3xl font-bold  md:mt-6 text-black">
            Contact Us
          </h1>
          <div className="grid grid-col-7 gap-4 mt-4">
            <input
              type="text"
              className="w-72 h-10 px-2"
              id="fname"
              name="fname"
              placeholder="First Name"
            />
            <input
              type="text"
              className="w-72 h-10 px-2"
              id="lname"
              name="lname"
              placeholder="Last Name"
            />
            <input
              type="email"
              className="w-72 h-10 px-2"
              id="email"
              name="email"
              placeholder="Your Email *"
            />
            <input
              type="text"
              className="w-72 h-10 px-2"
              id="pno"
              name="pno"
              placeholder="Phone Number"
            />
            <select name="services" id="services" className="w-72 h-10 px-1">
              <option value="epc">Services</option>
              <option value="epc">EPC</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>

            <textarea id="w3review" name="w3review" rows="10" cols="50" className="w-72 h-20 px-2" placeholder="Message..">
              
            </textarea>

            <div className="bg-green-500 rounded-md md:w-full  flex justify-center items-center mt-4 py-2 mb-4">
                <h2>Submit</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-500 w-full h-[15rem] absolute z-10">

      </div>
    </div>
  );
}

export default ContactUs