import Image from "next/image";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/solid";
import serviceBanner from "../../public/images/services-banner.jpeg";

import balayage from "../../public/images/balayage.jpg";
import coloring from "../../public/images/coloring.jpg";
import creativeColor from "../../public/images/creative-color.jpeg";
import extensions from "../../public/images/extensions.jpg";
import cutting from "../../public/images/cutting.jpg";
import styling from "../../public/images/styling.jpg";
import wedding from "../../public/images/wedding.jpg";
import makeup from "../../public/images/makeup.jpeg";

const features = [
  {
    name: "Cutting",
    subHeader:
      "The owners are Vidal Sassoon trained and hold a high standard for the baseline of work done in the salon.",
    description:
      "Headbetter stylists pride themselves on precision haircutting. All cuts include a full service shampoo and are finished with a proper blow-out. You will leave the salon ready for a big night out.",
    imageSrc: cutting,
    imageAlt:
      "White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.",
    price: "$90-$150",
    href: "/services/cutting",
  },
  {
    name: "Highlights/Balayage",
    subHeader: "We LOVE balayage, highlights and dimension",
    description:
      "Headbetter stylists have over 20 years experience doing traditional balayage in Los Angeles, and were among the first to get notoriety on social media for changing the look of Los Angeles. If you want the best, and you want a stylist that will design a look that's all your own... you found it.",
    imageSrc: balayage,
    imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
    price: "$200-$500",
    href: "/services/balayage",
  },
  {
    name: "Coloring",
    subHeader:
      "Headbetter Salon Prides itself on using the finest haircolor available, we stock many brands",
    description:
      "All haircolor brands are of the highest quality and are luxuriously conditioning. Let us work with you to find the perfect tone and depth that flatters your skin tone.",
    imageSrc: coloring,
    imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
    price: "$100-$200",
    href: "/services/coloring",
  },
  {
    name: "Creative Coloring",
    subHeader:
      "Headbetter Salon has some of the wildest hairdressers in the world when it comes to creative, jaw dropping vivid and punky colors!",
    description:
      "Do not hesitate to ask us to create a work of art with your hair, you will make our day. There's nothing that would make us happier than to test the limits of fashion with you and your locks",
    imageSrc: creativeColor,
    imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
    price: "$200-$1000",
    href: "/services/creative-coloring",
  },
  {
    name: "Styling",
    subHeader: "Big night out? Let us make you shine!",
    description:
      "Headbetter stylists are regularly hired for events like the Grammys and the Oscars, so rest assured that we take our styling seriously. We offer the absolute best hair styling services available in Los Angeles.<br><br> Also, every Cut or Color service done at Headbetter gets the red carpet treatment, a perfect blow dry free of additional charge.",
    imageSrc: styling,
    imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
    price: "$75-$200",
  },
  {
    name: "Make-up",
    subHeader:
      "We provide options such as a natural look, a total glam look, eyelash extensions and much more.",
    description:
      "Our make-up artists are top of the line. We carry the best make-up options in the industry. ",
    imageSrc: makeup,
    imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
    price: "$150-$250",
  },
  {
    name: "Extensions",
    subHeader:
      "When it comes to extensions... the sky is the limit at Headbetter",
    description:
      "Come sit down for a consultation with our experts and together we'll determine the new length, color and fullness that you desire. Do yourself a favor let us make your dream hair a reality.",
    imageSrc: extensions,
    imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
    price: "$500-$2500",
   
  },
  {
    name: "Weddings",
    subHeader: "Weddings! You bet",
    description: "We got this. Call John Michael for more info.",
    imageSrc: wedding,
    imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
    price: "$500-$2500",
    href: "/services/wedding",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function services() {
  return (
    <div>
      <div aria-hidden="true" className="relative ">
        <Image
          src={serviceBanner}
          alt="Banner for Service Page"
          className="object-center object-cover "
          layout="responsive"
          width={1200}
          height={384}
          quality={90}
          priority={true}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50  dark:from-gray-900" />
      </div>
      <div className="relative -mt-20 max-w-7xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center lg:max-w-4xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl">
            Sherman Oaks Most Luxurious Full Service Haircut
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-400 ">
            The most technically advanced haircutting salon in Los Angeles. Our
            stylist training is unparalleled, we start with a firm foundation of
            Vidal Sassoons geometric theory and finish with a flair for fashion.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {features.map((feature, featureIdx) => (
            <div
              key={feature.name}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center"
            >
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? "lg:col-start-1"
                    : "lg:col-start-8 xl:col-start-9",
                  "mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4"
                )}
              >
                <div className="flex flex-row mb-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-300 mr-4">
                    {feature.name}
                  </h3>
                  <div className="text-sm self-center "> {feature.price}</div>
                </div>
                <p className="text-sm mb-6 font-medium text-gray-600 dark:text-gray-400 italic">
                  {feature.subHeader}
                </p>
                <div
                  dangerouslySetInnerHTML={{ __html: feature.description }}
                ></div>
                {feature.href && (
                  <Link href={feature.href}>
                    <button className="flex bg-yellow-400 font-semibold text-sm mt-4 p-2 rounded-lg dark:text-gray-700">
                      <span>What&apos;s included </span>
                      <ChevronDownIcon
                        className={classNames(
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  </Link>
                )}
              </div>
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? "lg:col-start-6 xl:col-start-5"
                    : "lg:col-start-1",
                  "flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8"
                )}
              >
                <div className="aspect-w-5 aspect-h-2 rounded-lg bg-gray-200 overflow-hidden">
                  <Image
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    className="object-center object-cover"
                    width={1000}
                    height={500}
                    layout="responsive"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
