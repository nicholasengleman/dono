import React, { Component } from "react";
import "./product.scss";

import Add from "./../actions/add/add.jsx";
import Donors from "./../donors/donors.jsx";
import Donate from "./../actions/donate/donate.jsx";

class Product extends Component {
  render() {
    return (
      <div className="c-product column">
        <div className="row flex-between">
          <div className="image"></div>
          <div className="product-info">
            <div className="row flex-between">
              <div className="name">{this.props.name}</div>
              <div className="price">${this.props.price}</div>
            </div>
            <div className="row flex-between center-v">
              <div className="store">{this.props.store}</div>
              <Add />
            </div>
            <div className="row">
              <div className="why">
                I want these shoes because they'll go with my new dress.
              </div>
            </div>
          </div>
        </div>
        <div className="row flex-between center-v">
          <Donors />
          <Donate />
        </div>
        <div className="row flex-between">
          <div className="donations">
            <div className="progress">
              <span className="raised">$2.50</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
