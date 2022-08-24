/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"
import balayage from "../public/images/balayage.jpg"
import photoShootImage from "../public/images/holdingCamera.jpg"
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import {
  BookmarkAltIcon,
  BriefcaseIcon,
  DesktopComputerIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

const services = [
  { name: "Cutting", href: "/services/cutting", icon: InformationCircleIcon },
  { name: "Balayage", href: "/services/balayage", icon: BriefcaseIcon },
  { name: "Coloring", href: "/services/color", icon: OfficeBuildingIcon },
  {
    name: "Creative Color",
    href: "/services/creative-color",
    icon: NewspaperIcon,
  },
  { name: "Styling", href: "/services", icon: ShieldCheckIcon },
  { name: "Makeup", href: "/services", icon: ShieldCheckIcon },
  { name: "Extensions", href: "/services", icon: ShieldCheckIcon },
  { name: "Weddings", href: "/services", icon: ShieldCheckIcon },
  {
    name: "SuperModel Makeover",
    href: "/services/supermodel-makeover",
    icon: ShieldCheckIcon,
  },
];
const resources = [
  { name: "Appointments", href: "/appointments", icon: UserGroupIcon },
  {
    name: "Photo Shoots",
    href: "/services/supermodel-makeover",
    icon: GlobeAltIcon,
  },
  { name: "Price Menu", href: "/services", icon: BookmarkAltIcon },
 
];
const blogPosts = [
  {
    id: 1,
    name: 'Learn About Headbetter Photoshoots and the Supermodel Makeover.',
    href: "/services/supermodel-makeover",
    preview:
      "Provided by headbetter stylists, it includes any and all hair services, Make up and a full photoshoot.",
    imageUrl: photoShootImage,
  },
  {
    id: 2,
    name: "Ashy balayage vs Warm balayage",
    href: "/post/ashy-balayage-vs-warm-balayage",
    preview:
      "Okay, So your hairdresser has Balayaged your hair, Most likely they have used bleach to lighten your hair",
    imageUrl: balayage,
  },
 
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FlyoutMenu(props) {
  console.log("camera", photoShootImage)
  return (
    <Popover className="relative">
      {({ open, close }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? "text-gray-500 dark:text-gray-50 " : "text-gray-500 dark:text-gray-50 ",
              "group bg-gray-50 dark:bg-gray-900 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 "
            )}
          >
            <span>{props.linkName}</span>
            <ChevronDownIcon
              className={classNames(
                open ? "text-gray-600" : "text-gray-400",
                "ml-2 h-5 w-5 group-hover:text-gray-500"
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
          >
            <Popover.Panel className="absolute   z-10 mt-3 w-screen max-w-xl -translate-x-56 translate-y-[.438rem] transform px-8 sm:px-14 lg:max-w-4xl xl:max-w-7xl mx-auto">
              <div className="absolute inset-0 flex" aria-hidden="true">
                <div className="bg-gray-100 w-1/2" />
                <div className="bg-gray-100 w-1/2" />
              </div>
              <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
                <nav
                  className="grid gap-y-10 px-4 py-8 bg-gray-100 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12"
                  aria-labelledby="solutions-heading"
                >
                  <h2 id="solutions-heading" className="sr-only">
                    Services Menu
                  </h2>
                  <div>
                    <h3 className="text-base font-semibold text-gray-500 ">
                      <Link href="/services">
                        <a onClick={() => close()}>Services</a>
                      </Link>
                    </h3>
                    <ul role="list" className="mt-5 space-y-6">
                      {services.map((item) => (
                        <li key={item.name} className="flow-root">
                          <Link href={item.href}>
                            <a
                              onClick={() => close()}
                              className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
                            >
                              <item.icon
                                className="flex-shrink-0 h-6 w-6 text-gray-400"
                                aria-hidden="true"
                              />
                              <span className="ml-4">{item.name}</span>
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-500">
                      Resources
                    </h3>
                    <ul role="list" className="mt-5 space-y-6">
                      {resources.map((item) => (
                        <li key={item.name} className="flow-root">
                          <Link href={item.href}>
                            <a
                              onClick={() => close()}
                              className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
                            >
                              <item.icon
                                className="flex-shrink-0 h-6 w-6 text-gray-400"
                                aria-hidden="true"
                              />
                              <span className="ml-4">{item.name}</span>
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>
                <div className="bg-gray-100 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                  <div>
                    <h3 className="text-base font-semibold text-gray-500">
                      From the blog
                    </h3>
                    <ul role="list" className="mt-6 space-y-6">
                      {blogPosts.map((post) => (
                        <li key={post.id} className="flow-root">
                          <Link href={post.href}>
                            <a
                              onClick={() => close()}
                              className="-m-3 p-3 flex rounded-lg hover:bg-gray-100 transition ease-in-out duration-150"
                            >
                              <div className="hidden sm:block flex-shrink-0">
                                <Image
                                  className="w-32 h-20 object-cover rounded-md"
                                  src={post.imageUrl}
                                  alt={post.imageUrl.src}
                                  layout="fixed"

                                  height="75px"
                                  width="150px"
                                />
                              </div>
                              <div className="min-w-0 flex-1 sm:ml-8">
                                <h4 className="text-base font-medium text-gray-900 ">
                                  {post.name}
                                </h4>
                                <p className="mt-1 text-sm text-gray-500 font-medium">
                                  {post.preview}<span className="font-normal">...read more</span>
                                </p>
                              </div>
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 text-sm font-medium">
                    <Link href="/blogs">
                      <a
                        onClick={() => close()}
                        className="text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
                      >
                        View all posts <span aria-hidden="true">&rarr;</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
