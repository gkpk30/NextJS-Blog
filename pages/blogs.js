import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";
import Tabs from "../components/Tabs";


import { Link as ScrollLink } from "react-scroll";

const graphcms = new GraphQLClient(
  "https://api-us-west-2.graphcms.com/v2/cl3uirm1te1df01xk03pcdmi5/master"
);

const QUERY = gql`
  {
    posts(orderBy: publishDate_DESC) {
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
    categories {
      categoryTitle
    }
  }
`;

export async function getStaticProps() {
  const { posts, categories } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
      categories,
    },
  };
}

const Blog = ({ posts, categories }) => {
 // console.log("Blog Page posts: ", posts);
 // console.log("Blog Page Categories Array: ", categories);
  return (
    <>
      <div className="relative  pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 ">
        <div className="absolute inset-0">
          <div className=" h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-gray-200 sm:text-4xl">
            Visit our blogs to stay updated on everything that is happening in the world of beauty and wellness
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            All the Beauty secrets from Headbetter Salon in Los Angeles
            </p>
          </div>
          
          {/* Blog Card  */}
         
          <Tabs className="mt-20  " posts={posts} categories={categories} />
         
         
        </div>
      </div>
    </>
  );
};
export default Blog;
