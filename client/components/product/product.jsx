import React, { Component } from "react";
import { StyledProduct, StyledRowCentered, StyledRow } from "./productStyles";

import Add from "./../actions/add/add.jsx";
import Donors from "./../donors/donors.jsx";
import Donate from "./../actions/donate/donate.jsx";

class Product extends Component {
  render() {
    return (
      <StyledProduct>
        <StyledRow>
          <div className="image"></div>
          <div className="product-info">
            <StyledRow>
              <div className="name">{this.props.name}</div>
              <div className="price">${this.props.price}</div>
            </StyledRow>
            <StyledRowCentered>
              <div className="store">{this.props.store}</div>
              <Add />
            </StyledRowCentered>
            <StyledRow>
              <div className="why">
                I want these shoes because they'll go with my new dress.
              </div>
            </StyledRow>
          </div>
        </StyledRow>
        <StyledRowCentered>
          <Donors />
          <Donate />
        </StyledRowCentered>
        <StyledRow>
          <div className="donations">
            <div className="progress">
              <span className="raised">$2.50</span>
            </div>
          </div>
        </StyledRow>
      </StyledProduct>
    );
  }
}

export default Product;
