import { gql } from "@apollo/client";

export default gql`
  query GetProducts {
    categories {
      id
      categoryName
      products {
        name
        id
        price
        store
      }
    }
  }
`;
