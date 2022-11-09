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

const GET_AUTHOR = gql`
  query getAuthor($slug: String!) {
    author(where: { slug: $slug }) {
      name
      field

      avatar {
        url
      }
      description {
        html
      }
      posts {
        coverImage {
          url
        }
        title
        id
        slug
      }
    }
  }
`;

export { GET_POSTS, GET_AUTHORS, GET_AUTHOR };
