import React from "react";
import { StyledProductShort } from "./productShortStyles";

const productShort = ({ name, price, store, likes }) => {
  return (
    <StyledProductShort>
      <div className="photo"></div>
      <div className="description">
        <div className="row">
          <div className="title">{name}</div>
          <div className="price">{price}</div>
        </div>
        <div className="row">
          <div className="store">{store}</div>
        </div>
        <div className="row">
          <div className="description"></div>
        </div>
      </div>
      <div className="actions">
        <div className="action">
          <i className="fas fa-plus">Add</i>
        </div>
        <div className="action">
          <i className="far fa-thumbs-up">Likes </i>
          <span>{likes}</span>
        </div>
      </div>
    </StyledProductShort>
  );
};

export default productShort;
