import Image from "next/image";
import Link from "next/link"
import camera from "../../public/images/holdingCamera.png";

const Makeover = () => {
  return (
    <div className="">
      <div className="relative  min-h-screen lg:h-[1400px] w-full bg-[#96c6b8] overflow-hidden">
        <div className="max-w-7xl mx-auto pt-8 lg:pt-24 text-gray-700 font-extrabold px-8 text-3xl sm:text-5xl lg:text-7xl font-primary text-center  ">
          <h1 className="">
            A Salon Equipped with a Fashion Photography Studio In-House
          </h1>
        </div>
        <div className="lg:flex pt-10 lg:pt-32 max-w-7xl mx-auto gap-4 justify-between">
          <div className="flex flex-col space-y-6 lg:w-2/3 lg:order-2 px-2 sm:px-6  self-center text-sm lg:text-lg text-center lg:align-middle lg:text-left  font-semibold text-gray-600">
            <h3 className="text-2xl  text-primary text-bold">Get Booked</h3>
            <p className="">
              Supermodel Makeover is a service provided by headbetter stylists,
              it includes any and all hair services, Make up and a full
              photoshoot. Johnny will work with you together in terms of
              Creative Direction, and you are in charge of the vibes.
            </p>
           
              <Link href="/gallery/1">
              <a className="cursor-pointer w-fit flex  self-center lg:self-start  px-8 py-3 border border-primary text-base font-medium rounded-md text-primary hover:text-white   hover:bg-primary-dark md:py-4 md:text-lg md:px-10">See Gallery</a>
              </Link>
            
          </div>
          <div className="lg:w-2/3 lg:order-1 mt-6 -rotate-90  lg:transform-none ">
            <div className="lg:hidden">
              <Image
                src={camera}
                layout="intrinsic"
                priority={true}
                width={1000}
                height={968}
              />
            </div>
          </div>
          <div className="hidden lg:block absolute left-0 w-1/2">
            <Image
              src={camera}
              layout="intrinsic"
              priority={true}
              width={1000}
              height={968}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Makeover;
