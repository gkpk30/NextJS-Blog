import Image from "next/image";
import Link from "next/link";
import blowout from "../../public/images/blowout.jpeg";
import cappucino from "../../public/images/cappucino.jpeg";
import conditioning from "../../public/images/conditioning.jpg";
import robe from "../../public/images/robe.jpeg";
import BreadCrumbs from "../../components/BreadCrumbs";

export default function Coloring() {
  const pages = [
    { name: "services", href: "/services", current: false },
    { name: "cutting", href: "/services/cutting", current: true },
  ];

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
        <div className="mt-5 mb-20">
          <BreadCrumbs pages={pages} />
        </div>
        <div className="text-base max-w-prose mx-auto lg:max-w-none">
          <h2 className="text-base text-indigo-700 dark:text-indigo-300 font-semibold tracking-wide uppercase">
            Cutting
          </h2>
          <p className="mt-2 text-3xl leading-8 font-primary font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
            SHERMAN OAKS MOST LUXURIOUS FULL SERVICE HAIRCUT
          </p>
        </div>
        <div className="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
          <p className="text-lg text-gray-500 dark:text-gray-300">
            Headbetter Salon prides itself on being the most technically
            advanced haircutting salon in Los Angeles. Our stylists training is
            unparalleled, we start with a firm foundation of Vidal Sassoons
            geometric theory and finish with a flair for fashion. We have
            poignant and meaningful consultations that set the stage for
            flawless execution. We take time to get to know our clients, we want
            to understand you and to work with you to help you uncover the
            Goddess that you are.
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
          <div className="relative z-10">
            <div className="prose prose-indigo text-gray-500 dark:text-gray-300 mx-auto lg:max-w-none">
              <p>
                Whether its short and sassy or long and luxurious, Headbetter
                Salons hairstylists go above and beyond to create a masterpiece
                that will give you the confidence and character that best suits
                you.
              </p>
              {/* <p>
                Our stylists take the time to work with you to discover the look
                you want and the colors and contrasts that suit your personality
                and lifestyle.
              </p> */}
              <h3 className="mt-8 text-base text-indigo-700  dark:text-indigo-300 font-semibold tracking-wide uppercase">
                All haircut services include the following{" "}
              </h3>
              <ul className="mt-2 ml-4 !list-disc" role="list">
                <li>Greeting</li>
                <li>Coffee and Refreshments</li>
                <li>Consultation</li>
                <li>Robe</li>
                <li>Shampoo and Conditioner</li>
                <li>Haircut</li>
                <li>Style Consultation</li>
                <li>Blowout</li>
              </ul>
            </div>
            <h3 className="mt-8">We&apos;re here to help</h3>
            <div className="mt-4 flex text-base max-w-prose mx-auto lg:max-w-none">
              <div className="rounded-md shadow">
                <Link href="/appointments">
                  <a className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                    Contact Us
                  </a>
                </Link>
              </div>
              <div className="rounded-md shadow ml-4">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
            <svg
              className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-300 dark:text-primary opacity-70"
                    fill="currentColor"
                    // fillOpacity="0.45"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"
              />
            </svg>
            <div className=" grid grid-cols-2 gap-4">
              <Image src={cappucino} alt={cappucino} />
              <Image src={robe} alt={robe} />
              <Image src={conditioning} alt={conditioning} />
              <Image src={blowout} alt={blowout} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
