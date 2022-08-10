import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../../public/images/headbetterlogo.png";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { gql } from "graphql-request";
import { GraphQLClient } from "graphql-request";
import styles from "../../styles/Gallery.module.css";
import ModalTailwind from "../../components/ModalTailwind";
import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const graphcms = new GraphQLClient(
  "https://api-us-west-2.graphcms.com/v2/cl3uirm1te1df01xk03pcdmi5/master"
);

const limit = 6;

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

function GalleryPage({
  currentPageNumber,
  hasNextPage,
  hasPreviousPage,
  images,
  numberOfPhotos,
}) {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [modalContent, setModalContent] = useState("");

  const currentPage = +router.asPath.split("/")[2];
  console.log("current path: ", router.asPath.split("/")[2]);

  console.log("numberOfPhotos: ", numberOfPhotos);

  const numberOfPages = Math.ceil(numberOfPhotos / limit);
  console.log("Number of Pages: ", numberOfPages);

  const pagination = (current, total, position) => {
    let at = "";
    if (position === "top") {
      at = "b";
    }
    if (position === "bottom") {
      at = "t";
    }
    const center = [
        current - 2,
        current - 1,
        current,
        current + 1,
        current + 2,
      ],
      filteredCenter = center.filter((p) => p > 1 && p < total),
      includeThreeLeft = current === 5,
      includeThreeRight = current === total - 4,
      includeLeftDots = current > 5,
      includeRightDots = current < total - 4;

    if (includeThreeLeft) filteredCenter.unshift(2);
    if (includeThreeRight) filteredCenter.push(total - 1);

    if (includeLeftDots) filteredCenter.unshift("...");
    if (includeRightDots) filteredCenter.push("...");

    return [1, ...filteredCenter, total].map((item, index) => {
      return !isNaN(item) ? (
        <Link href={`/gallery/${item}`} key={index}>
          <a
            className={classNames(
              router.asPath === `/gallery/${item}`
                ? "border-primary text-indigo-300 font-bold text-lg"
                : "border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 hover:border-gray-300",
              `border-${at}-2 p${at}-4 px-4 inline-flex items-center text-sm font-medium`
            )}
            // className={classNames(current === index ? " border-primary text-indigo-600 font-bold" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" ,  `border-${at}-2 p${at}-4 px-4 inline-flex items-center text-sm font-medium` )}
          >
            {item}
            {console.log("at: ", at)}
          </a>
        </Link>
      ) : (
        <span key={index}>{item}</span>
      );
    });

    // return content.map((item, index) => {
    //   <Link href={`/gallery/${item}`} key={index}>
    //       <a
    //         className={classNames(
    //           router.asPath === `/gallery/${item}`
    //             ? "border-primary text-indigo-600 font-bold"
    //             : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
    //           `border-${at}-2 p${at}-4 px-4 inline-flex items-center text-sm font-medium`
    //         )}
    //       >
    //         {item}
    //         {console.log("at: ", at)}
    //       </a>
    //     </Link>
    // })
  };

  const handleOpen = (src, content) => {
    setImageSrc(src);
    setModalContent(content);
    setOpenModal(true);
  };

  return (
    <div className="relative ">
      <div
        className={classNames(
          currentPage == "1" ? "hidden sm:block" : "hidden",
          " absolute -top-20 right-0 bg-gradient-to-r from-gray-400 to-third sm:h-[40rem] opacity-20 lg:h-[50rem] w-1/2 sm:w-1/3  z-[2] "
        )}
      ></div>
      <div
        className={classNames(
          currentPage == "1" ? "block" : "hidden",
          "relative bg-gradient-to-r from-gray-50 to-secondary dark:from-gray-900   dark:to-primary-dark mx-auto mb-10 max-w-7xl w-full pt-16 pb-20 px-4 sm:px-6 lg:px-8  text-center lg:py-48 lg:text-left z-[3]"
        )}
      >
        <div className="absolute top-0 right-0 h-1/5 w-1/5 bg-primary opacity-30"></div>
        <div className="absolute bottom-0 right-0 h-1/5 w-1/5 bg-secondary opacity-60 dark:opacity-20"></div>

        <div className="flex flex-col lg:flex-row gap-5 p-2">
          <div className="flex flex-col lg:w-2/3  ">
            <div className="text-sm mb-8 font-bold text-gray-600 dark:text-gray-300">
              {/* in-house photagraphy */}
              IN-HOUSE PHOTOGRAPHY
            </div>
            <h1 className="p-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-red-600 dark:from-primary dark:to-gray-50 font-primary text-4xl tracking-tight font-extrabold text-gray-900  sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              {" "}
              In-House Headshot photography now Available{" "}
            </h1>
          </div>
          <div className="flex flex-col lg:w-1/3  leading-7 ">
            <p className="text-center font-semibold text-lg  lg:text-left text-gray-600 dark:text-gray-100 lg:text-gray-50 mt-4 ">
              Let us connect you with an in-house photography session. Get
              booked. High-end Professional headshot studio located in-house
            </p>
            <div>
              <p className="text-center lg:text-left text-sm mt-6 text-gray-600 dark:text-gray-300 lg:text-gray-50  ">
                {" "}
                Meet our team, the finest Los Angeles has to offer.
              </p>
            </div>
            {/* <button className=" mt-8 text-gray-100 text-left bg-primary hover:bg-primary-dark p-2 rounded-lg w-fit z-20 ">
             
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                />
              </svg>
            </button> */}
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto pt-6 pb-20 px-4 sm:px-6 lg:pt-2 lg:pb-28 lg:px-8">
        <nav className="my-9 mt-20 border-b border-gray-200 px-4 flex items-center justify-between sm:px-0">
          <div className="-mt-px w-0 flex-1 flex">
            <>
              {hasPreviousPage && (
                <Link href={`/gallery/${currentPageNumber - 1}`}>
                  <a className="border-b-2 border-transparent pb-4 pr-1 inline-flex items-center font-primary text-lg font-medium text-gray-500 dark:text-gray-200 hover:text-gray-700 hover:border-gray-300">
                    <ArrowNarrowLeftIcon
                      className="mr-3 h-5 w-5 text-gray-500 dark:text-gray-200"
                      aria-hidden="true"
                    />{" "}
                    Previous{" "}
                  </a>
                </Link>
              )}
            </>
          </div>
          <div className="hidden md:-mt-px md:flex">
            {pagination(currentPage, numberOfPages, "top")}
          </div>
          <div className="-mt-px w-0 flex-1 flex justify-end">
            <>
              {hasNextPage && (
                <Link href={`/gallery/${currentPageNumber + 1}`}>
                  <a className="border-b-2 border-transparent pb-4 pl-1 inline-flex items-center text-lg font-primary font-medium text-gray-500 hover:text-gray-700 dark:text-gray-200 hover:border-gray-300">
                    Next{" "}
                    <ArrowNarrowRightIcon
                      className="ml-3 h-5 w-5 text-gray-500 dark:text-gray-200"
                      aria-hidden="true"
                    />
                  </a>
                </Link>
              )}
            </>
          </div>
        </nav>

        <div
          // className="grid grid-cols-7 gap-4 grid-rows-6 "
          className={styles.container}
        >
          <ModalTailwind
            imageUrl={imageSrc}
            content={modalContent}
            open={openModal}
            onClose={() => setOpenModal(false)}
          />

          {images.map((image, index) => (
            <div
              // className={styles.div + index}
              key={image.node.id}
              className={`div${index}` + " relative "}
              onClick={() => handleOpen(image.node.image.url, image)}
            >
              <Image
                // className="h-64  object-cover"
                src={image.node.image.url}
                alt=""
                placeholder="blur"
                key={image.node.id}
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(300, 200)
                )}`}
                // width={300}
                // height={200}
                layout="fill"
                objectFit="cover"
                objectPosition={image?.node.position || "center"}
                quality="75"
              />

              <div className="absolute bottom-0 min-w-full left-0 p-2  text-slate-900 font-third backdrop-blur-sm backdrop-hue-rotate-180 bg-white/50 ">
                <h4 className="border-b border-yellow-500">
                  {" "}
                  {image.node.title}
                </h4>
                <span className="text-xs">
                  Styled by: {image.node.stylist.name}
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* <pre>{images}</pre> */}
        {/* <pre>{JSON.stringify(images, 2, null)}</pre> */}
        <nav className="my-9 mt-20 border-b border-gray-200 px-4 flex items-center justify-between sm:px-0">
          <div className="-mt-px w-0 flex-1 flex">
            <>
              {hasPreviousPage && (
                <Link href={`/gallery/${currentPageNumber - 1}`}>
                  <a className="border-b-2 border-transparent pb-4 pr-1 inline-flex items-center font-primary text-lg font-medium text-gray-500 dark:text-gray-200 hover:text-gray-700 hover:border-gray-300">
                    <ArrowNarrowLeftIcon
                      className="mr-3 h-5 w-5 text-gray-500 dark:text-gray-200"
                      aria-hidden="true"
                    />{" "}
                    Previous{" "}
                  </a>
                </Link>
              )}
            </>
          </div>
          <div className="hidden md:-mt-px md:flex">
            {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
            {/* {getPaginationArray(numberOfPages, 'top')}
          {console.log("pagination: ", pagination(currentPage, numberOfPages, 'top'))} */}
            {pagination(currentPage, numberOfPages, "bottom")}
          </div>
          <div className="-mt-px w-0 flex-1 flex justify-end">
            <>
              {hasNextPage && (
                <Link href={`/gallery/${currentPageNumber + 1}`}>
                  <a className="border-b-2 border-transparent pb-4 pl-1 inline-flex items-center text-lg font-primary font-medium text-gray-500 dark:text-gray-200 hover:text-gray-700 hover:border-gray-300">
                    Next{" "}
                    <ArrowNarrowRightIcon
                      className="ml-3 h-5 w-5 text-gray-500 dark:text-gray-200"
                      aria-hidden="true"
                    />
                  </a>
                </Link>
              )}
            </>
          </div>
        </nav>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const query = gql`
    {
      galleriesConnection {
        aggregate {
          count
        }
      }
    }
  `;
  const { galleriesConnection } = await graphcms.request(query);

  //generator function to increment page and offset
  function* numberOfPages({ total, limit }) {
    let page = 1;
    let offset = 0;

    while (offset < total) {
      yield page;

      page++;
      offset += limit;
    }
  }

  const paths = [
    ...numberOfPages({
      total: galleriesConnection.aggregate.count,
      limit,
    }),
  ].map((page) => ({
    params: { page: String(page) },
  }));

  return {
    paths,
    fallback: false,
  };
}

//Paths passing in taking in limit and offset
export async function getStaticProps({ params }) {
  const query = gql`
    query imagePageQuery($limit: Int!, $offset: Int!) {
      galleriesConnection(first: $limit, skip: $offset) {
        images: edges {
          node {
            id
            title
            stylist {
              name
              slug
              avatar {
                url
              }
            }
            image {
              url
            }
            description
            position
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        aggregate {
          count
        }
      }
    }
  `;

  const {
    galleriesConnection: { images, pageInfo, aggregate },
  } = await graphcms.request(query, {
    limit,
    offset: Number((params.page - 1) * limit),
  });

  return {
    props: {
      currentPageNumber: Number(params.page),
      images,
      ...pageInfo,
      numberOfPhotos: Number(aggregate.count),
    },
  };
}

export default GalleryPage;
