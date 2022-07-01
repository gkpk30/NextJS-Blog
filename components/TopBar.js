/* This example requires Tailwind CSS v2.0+ */
import { useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {MenuIcon, XIcon } from "@heroicons/react/outline";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from 'next/router'


import { useTheme } from "next-themes";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TopBar() {
  const router = useRouter()
  console.log("router: " , router.pathname)
  // const pathname = location.pathname
  // console.log("pathname: ", pathname)
  
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState()

  useEffect(() => {
    setMounted(true)
  },[])

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
                      <img
                        className="block lg:hidden h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt="Workflow"
                      />
                      <img
                        className="hidden lg:block h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                        alt="Workflow"
                      />
                    </div>

                    <div className="hidden sm:ml-12 sm:flex sm:space-x-6 ">
                      {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                      <Link href="/">
                     
                        <a  
                        className={classNames(router.pathname === '/' ? "border-primary font-bold" : "border-transparent ", " hover:border-gray-300  text-gray-500 dark:text-gray-50 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium")}
                        >
                          Home
                        </a>
                      </Link>
                      <Link href="/blogs"   >
                        <a  
                        className={classNames(router.pathname === '/blogs' ? "border-primary  font-bold" : "border-transparent ", " hover:border-gray-300 text-gray-500  dark:text-gray-50 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium")}
                        >
                          Blogs
                        </a>
                      </Link>
                      <Link href="/gallery/1">
                        <a 
                         className={classNames(router.pathname === '/gallery/[page]' ? "border-primary font-bold" : "border-transparent ", " hover:border-gray-300 text-gray-500  dark:text-gray-50 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium")}
                        >
                          Gallery
                        </a>
                      </Link>
                      <a
                        href="#"
                        className={classNames(router.pathname === '/projects' ? "border-primary font-bold" : "border-transparent ", " hover:border-gray-300 text-gray-500  dark:text-gray-50 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium")}
                        >
                        Projects
                      </a>
                    </div>
                  </div>
                  <div className="flex self-center " style={{}}>
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
                  className="bg-indigo-50 dark:bg-gray-600 border-primary text-indigo-700 dark:text-gray-50  block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  Home
                </Disclosure.Button>
                <Disclosure.Button
                  id="blogs"
                  // as={Link}
                  as="a"
                  href="/posts"
                  className=" border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 dark:text-gray-50 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  Blogs
                </Disclosure.Button>
                <Disclosure.Button
                  // as={Link}
                  as="a"
                  href="/gallery/1"
                  className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 dark:text-gray-50 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  gallery
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
}
