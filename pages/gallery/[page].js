import Link from "next/link";
import { useRouter } from 'next/router'
import Image from "next/image";
import { gql } from "graphql-request";
import { GraphQLClient } from "graphql-request";
import styles from "../../styles/Gallery.module.css";
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/react/solid'

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
  const router = useRouter()

  console.log("numberOfPhotos: ", numberOfPhotos)
  console.log("Number of Pages: ", numberOfPhotos / limit )
  const numberOfPages = numberOfPhotos / limit
  
  const getPaginationArray = (number) => {
    
      let content = [];
      for (let i = 1; i < number +1; i++) {
      //   <span className="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
      //   ...
      // </span>
        content.push(
          <Link 
            href={`/gallery/${i}`} 
            key={i} 
            >
          <a
            className={classNames(router.asPath === `/gallery/${i}` ? "border-primary text-indigo-600 font-bold" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" , "border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium" )}
          >
            {i}
          </a>
        </Link>
        );
      }
      return content;

  }

  return (
    
    <div className="max-w-7xl mx-auto pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    
      <div className="my-7 flex justify-between">
        {
          <button
            disabled={hasPreviousPage === false}
            className={classNames(
              hasPreviousPage ? "bg-white " : "bg-gray-50 dark:bg-gray-900",
              " text-gray-800 rounded-md p-2 mr-20 disabled:text-gray-200 disabled:cursor-none "
            )}
          >
            {hasPreviousPage && (
              <Link href={`/gallery/${currentPageNumber - 1}`}>
                <a>Previous page</a>
              </Link>
            )}
          </button>
        }
        {
          <button
            disabled={hasNextPage === false}
            className={classNames(
              hasNextPage ? "bg-white" : "bg-gray-50 dark:bg-gray-900",
              "text-gray-900 rounded-md p-2 mr-20 disabled:text-gray-200 disabled:cursor-none  "
            )}
          >
            {hasNextPage && (
              <Link href={`/gallery/${currentPageNumber + 1}`}>Next page</Link>
            )}
          </button>
        }
        
      </div>
      <div
        // className="grid grid-cols-7 gap-4 grid-rows-6 "
        className={styles.container}
      >
        {images.map((image, index) => (
          <div
            // className={styles.div + index}
            key={image.node.id}
            className={`div${index}` + " relative"}
          >
            <Image
              // className="h-64  object-cover"
              src={image.node.url}
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
              objectPosition={"center"}
              quality="50"
            />
          </div>
        ))}
      </div>
      {/* <pre>{images}</pre> */}
      {/* <pre>{JSON.stringify(images, 2, null)}</pre> */}
      <nav className="my-7 border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
      
      <div className="-mt-px w-0 flex-1 flex">
        <Link href={`/gallery/${currentPageNumber - 1}`}>
        <a
          
          className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
        >
          
          {hasPreviousPage && <><ArrowNarrowLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />  Previous </> }
        </a>
        </Link>
      </div>
      <div className="hidden md:-mt-px md:flex">
    
        {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
        {getPaginationArray(numberOfPages) }
      </div>
      <div className="-mt-px w-0 flex-1 flex justify-end">
        <Link href={`/gallery/${currentPageNumber + 1}`} >
          <a
            className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
          >
            {hasNextPage && <>Next <ArrowNarrowRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" /></> }
          </a>
        </Link>
      </div>
    </nav>
    </div>
  );
}

export async function getStaticPaths() {
  const query = gql`
    {
      assetsConnection {
        aggregate {
          count
        }
      }
    }
  `;
  const { assetsConnection } = await graphcms.request(query);
 
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
      total: assetsConnection.aggregate.count,
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
      assetsConnection(first: $limit, skip: $offset) {
        images: edges {
          node {
            id
            fileName
            url
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
    assetsConnection: { images, pageInfo, aggregate },
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