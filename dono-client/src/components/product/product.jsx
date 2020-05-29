import React, { Component } from "react";
import "./product.scss";

class Product extends Component {
  render() {
    return (
      <div className="c-product">
        <div className="image"></div>
        <div className="product-info">
          <div className="name">{this.props.name}</div>
          <div className="price">${this.props.price}</div>
          <div className="why"></div>
          <div className="store">{this.props.store}</div>
        </div>
      </div>
    );
  }
}

export default Product;
