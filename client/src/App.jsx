import React, { Component } from "react";
import { useQuery, gql } from '@apollo/client';
import "./styles/index.scss";

import Profile from "./components/profile/profile.jsx";
import Category from "./components/category/category.jsx";
import Product from "./components/product/product.jsx"


const PRODUCTS = gql`
  query GetProducts {
    products {
      name
    }
  }
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Profile />
        {data.map(({ id, products, categoryName }, i) => (
          <Category key={i} name={categoryName} id={id}>
            {products.map(({ id, name, price, store }, j) => (
              <Product
                key={j}
                uuid={id}
                name={name}
                price={price}
                store={store}
              />
            ))}
          </Category>
        ))}
      </React.Fragment>
    );
  }
}

export default App;
