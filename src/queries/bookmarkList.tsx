import { gql } from "@apollo/client";

export const bookmarkList = gql`
  query bookmarkList {
    bookmarks {
      description
      title
      createdAt
      url
    }
  }
`;
