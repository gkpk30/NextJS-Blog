import { gql } from 'graphql-request';


import { GraphQLClient } from 'graphql-request';

const graphcms = new GraphQLClient(
    'https://api-us-west-2.graphcms.com/v2/cl3uirm1te1df01xk03pcdmi5/master'
  );
  
const limit = 1;

export default function Gallery({ images }) {
  return images.map(({ node: image }, index) => (
    <pre key={index} >{JSON.stringify(image, 2, null)}</pre>
  ));
}

export async function getStaticProps() {
  const query = gql`
    query indexPageQuery($limit: Int!, $offset: Int!) {
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
          pageSize
        }
      }
    }
  `;

  async function* fetchData(query) {
    let offset = 0;
    let hasNextPage = true;

    while (hasNextPage) {
      const {
        assetsConnection: { images, pageInfo },
      } = await graphcms.request(query, { limit, offset });

      hasNextPage = pageInfo.hasNextPage;
      offset += limit;

      yield images;
    }
  }

  async function paginatedQuery({ query }) {
    const iterator = fetchData(query);

    let data = [];

    for await (const images of iterator) data = [...data, ...images];

    return data;
  }

  const images = await paginatedQuery({ query });

  return {
    props: {
      images,
    },
  };
}

