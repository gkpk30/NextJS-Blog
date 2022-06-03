import { GraphQLClient } from 'graphql-request';
import { gql } from 'graphql-request';
import Link from 'next/link';
import Image from 'next/image';

const graphcms = new GraphQLClient(
  'https://api-us-west-2.graphcms.com/v2/cl3uirm1te1df01xk03pcdmi5/master'
);


const QUERY = gql`
  {
    posts {
        title
        slug
        coverPhoto {
          url
        }
        id
      }
  }
`

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY)
  console.log(posts)
  return {
    props: {
      posts
    }
  }
}
  


const Blog = ({posts}) => {
  return (
  <div>Blog
      {console.log(posts)}
        <ul>
            {posts.map(({ id, title }) => (
            <li key={id}>
                {title}
            </li>
            ))}
        </ul>

  </div>
  )
  
};
export default Blog;