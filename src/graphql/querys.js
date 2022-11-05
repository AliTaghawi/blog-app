import { gql } from "@apollo/client";

const GET_POSTS = gql`
  query {
    posts {
      author {
        name
        avatar {
          url
        }
      }
      title
      slug
      id
      coverImage {
        url
      }
    }
  }
`;

const GET_AUTHORS = gql`
  query {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;

export { GET_POSTS, GET_AUTHORS };
