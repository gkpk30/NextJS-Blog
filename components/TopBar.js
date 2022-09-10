/* This example requires Tailwind CSS v2.0+ */
import { useEffect, useState } from "react";
import FlyoutMenu from './FlyoutMenu'

import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Image from "next/image"
import { useRouter } from "next/router";
import logo from "../public/images/headbetterlogo.png"
import logoWhite from "../public/images/headbetterlogoWhite.png"



import { useTheme } from "next-themes";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TopBar() {
  const router = useRouter();
 // console.log("router: ", router.pathname);

  const pathnameArray = router.pathname.split("/")
  //console.log("pathname: ", pathnameArray[2])
  // const pathname = location.pathname
  // console.log("pathname: ", pathname)

  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className=" w-7 h-7 text-yellow-500 bg-slate-500 rounded-md "
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className=" w-7 h-7 bg-slate-200 rounded-md text-blue-900 "
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  //renders a logo color based on color theme light vs dark
  const renderLogoChanger = () => {
    if(!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") { 
      return (
        <Image
        className="block  h-8 w-auto"
        src={logoWhite}
        alt="HeadBetter Logo"
        height="32px"
        width="100px"
         />
      )
    } else {
      return (
        <Image
        className="block  h-8 w-auto"
        src={logo}
        alt="HeadBetter Logo"
        height="32px"
        width="100px"
         />
      )
    }
  }

  return (
    <header>
      <Disclosure as="nav" className="shadow">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md dark:text-gray-50  text-gray-400 hover:text-gray-500  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex justify-between " style={{ flex: "auto" }}>
                  <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex-shrink-0 flex items-center">
                      <Link href="/">
                      <a className="cursor-pointer">
                        {renderLogoChanger()}
                        </a>
                      </Link>
                     
                    </div>

                    <div className="hidden sm:ml-12 sm:flex sm:space-x-6 z-10  ">
                      {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                      <Link href="/">
                        <a
                          className={classNames(
                            router.pathname === "/"
                              ? "border-primary font-semibold"
                              : "border-transparent font-medium ",
                            " hover:border-gray-300  text-gray-500 dark:text-gray-50 inline-flex items-center px-1 pt-1 border-b-2 text-sm "
                          )}
                        >
                          Home
                        </a>
                      </Link>
                     
                        <div
                          className={classNames(
                            router.pathname === "/services" ||
                            router.pathname.split("/")[1] === "services"
                              ? "border-primary font-semibold"
                              : "border-transparent font-medium",
                            " hover:border-gray-300 text-gray-500  dark:text-gray-50 inline-flex items-center px-1 pt-1 border-b-2 text-sm "
                          )}
                        >
                         {/* <Example linkName='Services'/> */}
                         <FlyoutMenu linkName = "Services"/>
                        </div>
                      
                      {/* <Link href="/services"> */}
                        {/* <Example linkName='Services'/> */}
                       {/* <FlyoutMenu menuLink = "Services"/> */}
                       {/* </Link> */}
                     
                      <Link href="/gallery/1">
                        <a
                          className={classNames(
                            router.pathname === "/gallery/[page]"
                              ? "border-primary font-semibold"
                              : "border-transparent font-medium ",
                            " hover:border-gray-300 text-gray-500  dark:text-gray-50 inline-flex items-center px-1 pt-1 border-b-2 text-sm "
                          )}
                        >
                          Gallery
                        </a>
                      </Link>
                      <Link href="/blogs">
                        <a
                          className={classNames(
                            router.pathname === "/blogs" ||
                              router.pathname === "/post/[slug]"
                              ? "border-primary  font-semibold"
                              : "border-transparent font-medium ",
                            " hover:border-gray-300 text-gray-500  dark:text-gray-50 inline-flex items-center px-1 pt-1 border-b-2 text-sm "
                          )}
                        >
                          Blogs
                        </a>
                      </Link>

                      <Link href="/artist/">
                        <a
                          className={classNames(
                            router.pathname === "/artist" ||
                              router.pathname === "/artist/[page].js"
                              ? "border-primary font-semibold"
                              : "border-transparent font-medium",
                            " hover:border-gray-300 text-gray-500  dark:text-gray-50 inline-flex items-center px-1 pt-1 border-b-2 text-sm "
                          )}
                        >
                          Artists
                        </a>
                      </Link>
                    </div>
                  </div>
                  {/* <div className="self-center mr-4 z-20">
                    <Link  href="#">
                    <a
                     
                      className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-semibold text-gray-600 bg-gray-50 hover:bg-indigo-50 "
                    >
                      Book New Appointment
                    </a>
                    </Link>
                  </div> */}
                  <div className="flex self-center z-20 " style={{}}>
                    {renderThemeChanger()}
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="pt-2 pb-4 space-y-1">
                {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                <Disclosure.Button
                  // as={Link}
                  as="a"
                  href="/"
                  className={classNames(
                    router.pathname === "/"
                      ? "border-primary font-semibold bg-indigo-50 dark:bg-gray-600 text-indigo-700 dark:text-gray-50"
                      : "border-transparent text-gray-500 dark:text-gray-50",
                    "hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  )}
                  // className="bg-indigo-50 dark:bg-gray-600 border-primary text-indigo-700 dark:text-gray-50  block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  Home
                </Disclosure.Button>
                <Disclosure.Button
                  // as={Link}
                  as="a"
                  href="/services"
                  className={classNames(
                    router.pathname === "/services" || router.pathname.split("/")[1] === "services"
                      ? "border-primary font-semibold bg-indigo-50 dark:bg-gray-600 text-indigo-700 dark:text-gray-50"
                      : "border-transparent text-gray-500 dark:text-gray-50",
                    "hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  )}
                >
                  Services
                </Disclosure.Button>
                <Disclosure.Button
                  // as={Link}
                  as="a"
                  href="/gallery/1"
                  className={classNames(
                    router.pathname === "/gallery/[page]"
                      ? "border-primary font-semibold bg-indigo-50 dark:bg-gray-600 text-indigo-700 dark:text-gray-50"
                      : "border-transparent text-gray-500 dark:text-gray-50",
                    "hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  )}
                >
                  Gallery
                </Disclosure.Button>
                <Disclosure.Button
                  id="blogs"
                  // as={Link}
                  as="a"
                  href="/blogs"
                  className={classNames(
                    router.pathname === "/blogs" ||
                      router.pathname === "/post/[slug]"
                      ? "border-primary font-semibold bg-indigo-50 dark:bg-gray-600 text-indigo-700 dark:text-gray-50"
                      : "border-transparent text-gray-500 dark:text-gray-50",
                    "hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  )}
                >
                  Blogs
                </Disclosure.Button>

                <Disclosure.Button
                  // as={Link}
                  as="a"
                  href="/artist/"
                  className={classNames(
                    router.pathname === "/artist"
                      ? "border-primary font-semibold bg-indigo-50 dark:bg-gray-600 text-indigo-700 dark:text-gray-50"
                      : "border-transparent text-gray-500 dark:text-gray-50",
                    "hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  )}
                >
                  Artists
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
}
