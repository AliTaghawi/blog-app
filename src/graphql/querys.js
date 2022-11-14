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

const GET_POST = gql`
  query getPost($slug: String!) {
    post(where: { slug: $slug }) {
      title
      content {
        html
      }
      coverImage {
        url
      }
      author {
        name
        field
        avatar {
          url
        }
      }
    }
  }
`;

const GET_COMMENTS = gql`
  query getComments($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      id
      name
      text
    }
  }
`;

export { GET_POSTS, GET_AUTHORS, GET_AUTHOR, GET_POST, GET_COMMENTS };
