import React from "react";
import { useQuery } from "@apollo/client";
import Profile from "./components/profileHeader/profileHeader.jsx";
import Category from "./components/category/category.jsx";
import Product from "./components/product/product.jsx";

import query from "./queries/fetchProducts";

const Profile = () => {
  const { loading, error, data } = useQuery(query);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  return (
    <>
      <Profile />
      {data.categories.map(({ id, products, categoryName }, i) => (
        <Category key={i} name={categoryName} id={id}>
          {products.map(({ id, name, price, store }, j) => (
            <Product key={j} uuid={id} name={name} price={price} store={store} />
          ))}
        </Category>
      ))}
    </>
  );
};

export default Profile;
