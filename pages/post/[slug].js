import React, { useEffect, useState } from "react";
import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";
import Link from "next/link";
import Image from "next/image";

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

  return (
    <div className="lg:col-span-9 xl:col-span-10 font-primary ">
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
          <h1 className=" md:w-[70%] text-left font-third font-bold text-3xl mr-3 mt-5 mb-3">
            {post.title}
          </h1>

          {/* {post.category &&  */}
          <div className="font-third text-xl mt-4">Category</div>
          <div className="flex flex-row mt-2 flex-wrap">
            {post.categories.map((category) => (
              <Link href={category.categoryTitle} key={category.categoryTitle}>
                <h3 className="text-yellow-700 mr-3 cursor-pointer font-fourth dark:text-yellow-500  text-sm uppercase font-bold underline">
                  {category.categoryTitle}
                </h3>
              </Link>
            ))}
          </div>

          <div className="mt-14 mb-4 flex flex-col sm:flex-row justify-between text-lg font-fourth mr-20  ">
            <div className="singlePostAuthor flex">
              <div>
                Author:{" "}
                {
                  <Link
                    className=" ml-3 hover:font-black cursor-pointer"
                    href={`/?user=${post.author.name}`}
                  >
                    <b>{post.author.name}</b>
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
            <div
              className=" text-lg first-line:uppercase first-line:tracking-widest
                          first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900 dark:first-letter:text-gray-200
                          first-letter:mr-3 first-letter:float-left "
            >
              {/* {post.content.html} */}
              <div dangerouslySetInnerHTML={{ __html: post.content.html }} />
              
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}
