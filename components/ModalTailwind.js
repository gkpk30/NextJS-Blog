/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon, XIcon, CameriaIcon } from "@heroicons/react/outline";

import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/headbetterlogo.png";

// const shimmer = (w, h) => `
// <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
//   <defs>
//     <linearGradient id="g">
//       <stop stop-color="#333" offset="20%" />
//       <stop stop-color="#222" offset="50%" />
//       <stop stop-color="#333" offset="70%" />
//     </linearGradient>
//   </defs>
//   <rect width="${w}" height="${h}" fill="#333" />
//   <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
//   <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
// </svg>`;

// const toBase64 = (str) =>
//   typeof window === "undefined"
//     ? Buffer.from(str).toString("base64")
//     : window.btoa(str);

export default function ModalTailwind({ open, onClose, imageUrl, content }) {
  const [closeModal, setCloseModal] = useState(false);
  if (!open) return null;
  console.log("open in Modal Comp: ", open);
  console.log("modalContent: ", content);

  return (
    <Transition.Root show={open} as={Fragment} >
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setCloseModal(onClose)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
           {/* The backdrop, rendered as a fixed sibling to the panel container */}
          <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity" />
          {/* ////////////////Backdrop above///////////////////// */}

        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6 md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
                <div className="block absolute top-0 right-0 pt-4 pr-4">
                  <button
                    type="button"
                    className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="">
                  {/* <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationIcon
                      className="h-6 w-6 text-red-600"
                      aria-hidden="true"
                    />
                  </div> */}
                  <div className="flex justify-center w-[90%] xl:w-[80%]   opacity-[.04] absolute right-0 top-0 -z-20 ">
                    <Image src={logo} alt="logo" width={500} height={150} />
                  </div>
                  <div className="flex-shrink-0 w-[90%] relative block mb-4 ml-4">
                    <div className="flex flex-col ">
                      <div>
                        <Image
                          className="inline-block h-9 w-9 rounded-full"
                          //   src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          src={content.node.stylist.avatar.url}
                          alt=""
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="flex ">
                        <p className="text-xs font-medium text-gray-700  p-1 ">
                          {content.node.stylist.name}
                        </p>
                        <Link href={`/artist/${content.node.stylist.name}`}>
                          <a className="text-xs font-medium text-gray-200 hover:text-gray-600 ml-3 bg-gray-500 p-1 pl-2 pr-2 rounded-xl ">
                            View profile
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-xl leading-6 font-medium text-gray-900"
                    >
                      {content?.node.title || `Title of Image`}
                    </Dialog.Title>
                    <Dialog.Description>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {content?.node.description
                          ? content.node.description
                          : `Are you sure you want to deactivate your account? All of
                        your data will be permanently removed from our servers
                        forever. This action cannot be undone. Lorem ipsum dolor
                        sit amet consectetur adipisicing elit. Accusantium iste
                        sunt, voluptate nobis minus inventore ducimus vero amet
                        laboriosam minima, reiciendis esse iusto, explicabo enim
                        qui iure reprehenderit commodi nam ullam quidem modi
                        maxime? Maiores, eveniet? Et minus repellat optio nam
                        quas nihil minima sit totam itaque quos, fugit rerum.`}
                      </p>
                    </div>
                    </Dialog.Description>
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse relative">
                  {console.log("imageurl", imageUrl)}
                          
                  <span className="absolute bottom-2 left-2">
                    By: {content?.node.stylist.name}
                  </span>
                  <Image
                    src={imageUrl}
                    alt=""
                    // placeholder="blur"
                    // blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    //   shimmer(800, 500)
                    // )}`}
                    width={800}
                    height={500}
                    layout="raw"
                    // objectFit="contain"
                    // objectPosition={"center"}
                    quality="85"
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
