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

export { GET_POSTS };
