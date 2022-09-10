import Head from "next/head";
import Image from "next/image";
import Incentives from "../components/Incentives";
import Link from "next/link";
import LogoWhite from "../public/images/headbetterlogoWhite.png";
import squareDotPattern from "../public/images/squareDotPattern.svg";
import underline from "../public/images/underline.svg";
import Blonde from "../public/images/Banner-Blond-Black-Dress-min.jpeg";
import YellowBlonde from "../public/images/model-pink-hair-yellow-background.jpeg";
import ecoGirl from "../public/images/ecoGirl.jpeg";
import styles from "../styles/Home.module.css";
import BlogPreviewSection from "../components/BlogPreviewSection";
import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";

import { Link as ScrollLink } from "react-scroll";

const graphcms = new GraphQLClient(
  "https://api-us-west-2.graphcms.com/v2/cl3uirm1te1df01xk03pcdmi5/master"
);

const QUERY = gql`
  {
    posts(first: 3, orderBy: publishDate_DESC) {
      title
      slug
      coverPhoto {
        url
      }
      id
      author {
        name
        slug
        avatar {
          url
        }
      }
      categories {
        categoryTitle
      }
      publishDate
      excerpt
      content {
        html
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  // console.log("index page posts Load? : ", posts);
  return (
    <>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <div className="relative  font-primary">
        <main className="lg:relative">
          <div className="relative mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
            <div className="px-4 lg:w-[70%]  sm:px-8 xl:pr-16 z-10">
              <h1 className="relative text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <div className="absolute -left-20  -top-16  lg:block   ">
                  <Image src={squareDotPattern} width={279} height={198} />
                </div>
                <span className="inline relative xl:inline dark:text-gray-50 z-20 text-gray-800">
                  More than just a salon. {""}
                </span>
                <span className="inline relative text-primary xl:inline z-20">
                  Develop your style and professional brand
                </span>
              </h1>
              <h2 className="relative mt-3 max-w-md mx-auto md:mx-0 text-lg font-medium dark:text-red-700  text-gray-500  sm:text-xl md:mt-5 md:max-w-3xl z-20">
                The most technically advanced haircutting salon in Los Angeles.
                With a High-end Professional headshot studio located in-house.
                Headbetter Salon is a full service hair, make up and photography
                studio, offering a wide range of beauty services.
              </h2>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div>
                  <div className="rounded-md shadow min-w-[10rem]">
                    <Link href="/services">
                      <a className="cursor-pointer w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary    hover:bg-primary-dark md:py-4 md:text-lg md:px-10">
                        Services
                      </a>
                    </Link>
                  </div>
                  <div className="hidden sm:block">
                    <Image src={underline} width={160} height={42} />
                  </div>
                </div>

                <div className="min-w-[10rem] mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <ScrollLink
                    spy={true}
                    smooth={true}
                    duration={500}
                    to="latestBlogs"
                  >
                    <div className="cursor-pointer w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 dark:bg-inherit dark:hover:bg-black md:py-4 md:text-lg md:px-10">
                      Latest Blogs
                    </div>
                  </ScrollLink>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-64 lg:h-screen sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 ">
            <Image
              className="absolute inset-0 w-full h-full object-cover"
              src={YellowBlonde}
              alt=""
              priority={true}
              layout="fill"
              // width="1042"
              // height="894"
              //if using layout="fill you must wrap Image in a div with a height and width"
            />
          </div>
        </main>

        {/* Blog Section */}
        <div className="relative mt-36 sm:mt-96 bg-gray-200 dark:bg-gray-800">
          <div className="hidden lg:block    opacity-[.04] absolute inset-10  ">
            <Image
              src={LogoWhite}
              layout="intrinsic"
              width={504}
              height={150}
            />
          </div>
          <div
            name="latestBlogs"
            className="flex flex-col justify-center items-center w-full "
          >
            <BlogPreviewSection posts={posts} />
          </div>
        </div>
        <div className="">
          <div className="overflow-hidden  relative before:content-[''] before:bg-incentive-bg before:absolute  lg:before:left-2/3 before:left-[20%] before:top-0 before:w-full before:h-full before:opacity-50  lg:before:opacity-60  before:bg-cover lg:before:bg-contain before:bg-no-repeat  after:brightness-100 after:dark:brightness-[75%] after:right-0  after:top-0   ">
            <Incentives />
            {/* <div className="  hidden lg:block absolute -top-10 -right-[20%] opacity-90  ">
                <Image 
                    src={ecoGirl}
                />     
        </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
