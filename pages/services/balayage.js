import Image from "next/image";
import balayage from "../../public/images/balayage.jpg";
import cappucino from "../../public/images/cappucino.jpeg";
import conditioning from "../../public/images/conditioning.jpg";
import robe from "../../public/images/robe.jpeg";
import BreadCrumbs from "../../components/BreadCrumbs";

export default function Balayage() {
  const pages = [
    { name: "services", href: "/services", current: false },
    { name: "balayage", href: "/services/balayage", current: true },
  ];

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
        <div className="mt-5 mb-20">
          <BreadCrumbs pages={pages} />
        </div>
        <div className="text-base max-w-prose mx-auto lg:max-w-none">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Balayage
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
            On the forefront of Balayage and Highlighting innovation
          </p>
        </div>
        <div className="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
          <p className="text-lg text-gray-500">
            What started as a flair for slight natural dimension has blossomed
            over the years into a full fledged artform and has become the most
            requested service that we offer. Balayage is a technique similar to
            highlighting, though it is usually hand painted and left in open air
            as opposed to tightly wrapping into a folded foil. Balayage styles
            can range from relaxed and natural to full blown black/white
            contrast and the sky is the limit when it comes to creativity.
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
          <div className="relative z-10">
            <div className="prose prose-indigo text-gray-500 mx-auto lg:max-w-none">
              <p>
                One of the main benifits of balayage is that clients feel less
                need to return for a &quot;root touch up&quot; because generally
                the highlights are starting inches away from the root.
              </p>
              <p>
                Our stylists take the time to work with you to discover the look
                you want and the colors and contrasts that suit your personality
                and lifestyle.
              </p>
              <h3 className="mt-8 text-base text-indigo-600 font-semibold tracking-wide uppercase">
                All Balayage services include the following{" "}
              </h3>
              <ul className="mt-2 ml-4 !list-disc" role="list">
                <li>Greeting</li>
                <li>Coffee and Refreshments</li>
                <li>Consultation</li>
                <li>Robe</li>
                <li>Balayage Application</li>
                <li>Root Color or Lowlight Application (if desired)</li>
                <li>Shampoo</li>
                <li>Toner</li>
                <li>Condition</li>
                <li>Double Check with Client for Desired Tones</li>
                <li>Blowout</li>
              </ul>
            </div>
            <h3 className="mt-8">We’re here to help</h3>
            <div className="mt-4 flex text-base max-w-prose mx-auto lg:max-w-none">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Contact sales
                </a>
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
                    className="text-gray-200 dark:text-primary"
                    fill="currentColor"
                    fillOpacity="0.45"
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
              <Image src={cappucino} />
              <Image src={robe} />
              <Image src={conditioning} />
              <Image src={balayage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
