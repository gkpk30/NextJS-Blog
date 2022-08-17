import Link from "next/link";
import styles from '../../styles/Artist.module.css'
import { useRouter } from "next/router";
import { CameraIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { gql } from "graphql-request";
import { GraphQLClient } from "graphql-request";
import BreadCrumbs from "../../components/BreadCrumbs";
import BlogSection from "../../components/BlogSection";

const graphcms = new GraphQLClient(
  "https://api-us-west-2.graphcms.com/v2/cl3uirm1te1df01xk03pcdmi5/master"
);

const QUERY = gql`
  query Artist($slug: String!) {
    stylist(where: { slug: $slug }) {
      name
      position
      slug
      shortBio {
        html
      }
      longBio {
        html
      }
      avatar {
        url
      }
    }
    posts(orderBy: publishedAt_DESC, first: 4) {
      excerpt
      title
      publishDate
      slug
    }
    
  }
`;

export const SLUGLIST = gql`
  {
    stylists {
      slug
    }
  }
`;

export async function getStaticProps({ params }) {
  const slug = params.slug;

  const data = await graphcms.request(QUERY, { slug });

  const stylist = data.stylist;
  const latestPosts = data.posts
  

  return {
    props: {
      stylist,
      latestPosts,
    }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  const { stylists } = await graphcms.request(SLUGLIST);

  return {
    paths: stylists.map((stylist) => ({ params: { slug: stylist.slug } })),
    fallback: "blocking", // false or 'blocking'
  };
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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

const ArtistPage = ({ stylist, latestPosts }) => {
  const breadcrumbData = [
    { name: "artists", href: "/artist", current: false },
    {
      name: `${stylist.name}`,
      href: `/services/${stylist.slug}`,
      current: true,
    },
  ];
  
  // {
  //   console.log("artists: ", stylist);
  // }
  const bio = stylist.longBio?.html
    ? stylist.longBio.html
    : stylist.shortBio.html;
  return (
    <div className="bg-white dark:bg-gray-900 overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="mt-5 mb-20">
          <BreadCrumbs pages={breadcrumbData} />
        </div>
        <div className="hidden lg:block bg-gray-50 dark:bg-gray-800 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Case Study
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {stylist.name}
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
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
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src={stylist.avatar.url}
                    alt="Whitney leaning against a railing on a downtown street"
                    width={1184}
                    height={1376}
                  />
                </div>
                {/* <figcaption className="mt-3 flex text-sm text-gray-500">
                  <CameraIcon
                    className="flex-none w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-2">Photograph by John Ciccone</span>
                </figcaption> */}
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <div
                className={`artist ${styles.artist} mt-5 text-gray-500 dark:text-gray-300 prose`}
                dangerouslySetInnerHTML={{ __html: bio }}
              />
            </div>
          </div>
        </div>
      </div>
      <BlogSection latestPosts={latestPosts}/>
    </div>
  );
};
export default ArtistPage;
