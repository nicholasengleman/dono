import React, { Component } from "react";
import "./styles/index.scss";

import Profile from "./components/profile/profile.jsx";
import Category from "./components/category/category.jsx";
import Product from "./components/product/product.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <Profile />
        <Category name="Shoes">
          <Product name="Name" price="5" store="amazon.com" />
          <Product name="Name" price="5" store="amazon.com" />
          <Product name="Name" price="5" store="amazon.com" />
          <Product name="Name" price="5" store="amazon.com" />
        </Category>
        <Category name="Clothes">
          <Product name="Name" price="5" store="amazon.com" />
          <Product name="Name" price="5" store="amazon.com" />
          <Product name="Name" price="5" store="amazon.com" />
          <Product name="Name" price="5" store="amazon.com" />
        </Category>
        <Category name="Other">
          <Product name="Name" price="5" store="amazon.com" />
          <Product name="Name" price="5" store="amazon.com" />
          <Product name="Name" price="5" store="amazon.com" />
          <Product name="Name" price="5" store="amazon.com" />
        </Category>
      </div>
    );
  }
}

export default App;
