/* This example requires Tailwind CSS v2.0+ */
import {
  SpeakerphoneIcon,
  XIcon,
  ArrowSmRightIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="bg-gray-800 z-20 text-sm relative">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-indigo-800">
              <SpeakerphoneIcon
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">Book Online Now!</span>
              <Link href="https://www.facebook.com/Headbetter-303344640137684">
                <a>
                  <span className="hidden md:inline">
                    Big news! Check out HeadBetter on KTLA Live 8/23/2022 7:30am
                    
                  </span>
                </a>
              </Link>
            </p>
            <span className="flex  ">
              <ArrowSmRightIcon
                className="origin-center -rotate-45 h-6 w-6 text-white"
                aria-hidden="true"
              />
            </span>
          </div>

          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <Link href="/appointments">
              <a className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-semibold text-gray-600 bg-gray-50 hover:bg-indigo-50">
                Book New Appointment
              </a>
            </Link>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
              // onClick={() =>}
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
