

const Navbar = () => {
  return (
    <>
    <div className="grid md:gap-1 lg:gap-8 grid-cols-4 justify-center items-center">
        <div className=" cursor-pointer"><h2 className="md:text-lg">Home</h2></div>
        <div className=" cursor-pointer"><h2 className="md:text-lg lg:text-xl">About us</h2></div>
        <div className=" cursor-pointer"><h2 className="md:text-lg lg:text-xl">Services</h2></div>
        <div className=" cursor-pointer"><h2 className="md:text-lg lg:text-xl">Contact Us</h2></div>
    </div>
    </>
  )
}

export default Navbar