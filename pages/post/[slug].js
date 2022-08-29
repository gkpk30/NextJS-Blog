import React, { useEffect, useState } from "react";
import styles from "../../styles/Post.module.css";
import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";
import Link from "next/link";
import Image from "next/image";
import BreadCrumbs from "../../components/BreadCrumbs";

const graphcms = new GraphQLClient(
  "https://api-us-west-2.graphcms.com/v2/cl3uirm1te1df01xk03pcdmi5/master"
);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      publishDate
      author {
        name
        slug
        avatar {
          url
        }
      }
      publishDate
      coverPhoto {
        url
      }
      content {
        html
      }
      categories {
        categoryTitle
      }
    }
  }
`;

export const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticProps({ params }) {
  const slug = params.slug;

  const data = await graphcms.request(QUERY, { slug });

  const post = data.post;

  return {
    props: {
      post,
    }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);

  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: "blocking", // false or 'blocking'
  };
}

export default function Post({ post }) {
  //update a post
  // const [title, setTitle] = useState("")
  // const [desc, setDesc] = useState("")
  // const [excerpt, setExcerpt] = useState("")
  // const [updateMode, setUpdateMode] = useState(false)

  // const [post, setPost] = useState({})

  // useEffect(() => {

  // }, [])
  console.log("slug post: ", post);

  const pages = [
    { name: "all blogs", href: "/blogs", current: false },
    { name: post.title, href: `/post/${post.slug}`, current: true },
  ];

  return (
    <div className="lg:col-span-9 xl:col-span-10 font-primary overflow-hidden ">
      <div className="singlePostWrapper p-5  ">
        {/* <div className="h-[20rem] w-full relative xl:h-[40rem] ">
        <Image
          src={post.coverPhoto.url}
          alt="hello"
          className="singlePostImage absolute w-full lg:h-[35rem] sm:h-80 object-cover rounded-lg lg:object-top sm:object-center"
          layout="fill"
          priority ="true"
          // width="842"
          // height="394"
          //if using layout="fill you must wrap Image in a div with a height and width"
          
        
         
        />
        </div> */}
        <div className="max-w-7xl mx-auto">
          <div className="mt-5 mb-20">
            <BreadCrumbs pages={pages} />
          </div>
          <h1 className=" md:w-[70%] text-left font-third font-bold text-3xl mr-3 mt-5 mb-3">
            {post.title}
          </h1>

          {/* {post.category &&  */}
          <div className="font-third text-sm xl:text-lg mt-4">Category</div>
          <div className="flex flex-row mt-2 flex-wrap">
            {post.categories.map((category) => (
              // <Link href={category.categoryTitle} key={category.categoryTitle}>
              <h3
                key={category.categoryTitle}
                className="text-yellow-700 mr-3 cursor-pointer font-fourth dark:text-yellow-500  text-sm uppercase font-semibold "
              >
                {category.categoryTitle}
              </h3>
              // </Link>
            ))}
          </div>

          <div className="mt-14 mb-4 flex flex-col sm:flex-row justify-between text-sm lg:text-lg font-fourth mr-20 items-center ">
            <div className="singlePostAuthor flex  flex-wrap-reverse sm:flex-nowrap items-center ">
              <div>
                Author:{" "}
                {
                  <Link
                    href={
                      post.author.slug !== null
                        ? `/artist/${post.author.slug}`
                        : "/artist"
                    }
                  >
                    <a className=" ml-3 hover:font-black cursor-pointer">
                      <b>{post.author.name}</b>
                    </a>
                  </Link>
                }
              </div>
              <div className="ml-3 ">
                <Image
                  className="h-10 w-10 rounded-full text-gray-500 dark:text-gray-200"
                  width={40}
                  height={40}
                  src={post.author.avatar.url}
                  alt=""
                />
              </div>
            </div>
            <div className="singlePostDate">
              {new Date(post.publishDate).toDateString()}
            </div>
          </div>
          <div className="md:grid grid-cols-2 gap-14">
            <div className=" text-lg  ">
              {/* {post.content.html} */}
              <div
                className={`post ${styles.post} dark:text-gray-200 text-color`} 
                dangerouslySetInnerHTML={{ __html: post.content.html }}
              />
            </div>
            <div  >
              <div className="h-[20rem] w-full relative xl:h-[40rem] ">
                <Image
                  src={post.coverPhoto.url}
                  alt="hello"
                  className="singlePostImage absolute w-full lg:h-[35rem] sm:h-80 object-cover rounded-lg lg:object-top sm:object-center"
                  layout="fill"
                  priority="true"
                  // width="842"
                  // height="394"
                  //if using layout="fill you must wrap Image in a div with a height and width"
                />
              </div>
              {/* Jan Tchichold design */}
              <div className="grid-wrapper mt-52  ">
                <p className="thing1">A Devines</p>
                <p className="thing2">Exclusive</p>
                <p className="thing3">Salon</p>
                <p className="thing4">
                  Environmentally<span> Conscience</span>
                </p>
                <p className="thing5">HeadBetter</p>

                <b className="red-bar1"></b>
                <b className="red-bar2"></b>

                <b className="red-circle"></b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
