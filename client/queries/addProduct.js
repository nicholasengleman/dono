import { gql } from "@apollo/client";

export default gql`
  mutation addProduct($name: String, $price: Int, $description: String, $store: String, $categoryId: Int, $userId: Int) {
    addProduct(name: $name, price: $price, description: $description, store: $store, categoryId: $categoryId, userId: $userId)
  }
`;
