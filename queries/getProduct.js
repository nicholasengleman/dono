import gql from "graphql-tag";

export default gql`
  query getProduct($id: uuid!) {
    products_by_pk(id: $id) {
      id
      name
      store
      description
      price
      likes
    }
  }
`;
