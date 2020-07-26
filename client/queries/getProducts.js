import { gql } from "@apollo/client";

export default gql`
  query getProducts($id: String!) {
    user(id: $id) {
      categories {
        id
        categoryName
        products {
          id
          name
          price
          store
        }
      }
    }
  }
`;
