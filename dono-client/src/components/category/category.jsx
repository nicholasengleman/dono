import React, { Component } from "react";
import "./category.scss";

import Menu from "./../menu/menu.jsx";

class Category extends Component {
  render() {
    return (
      <div className="c-category">
        <div className="c-category-header">
          <div className="name">{this.props.name}</div>
          <div className="edit">Edit</div>
          <Menu />
        </div>
        <div className="c-category-body">{this.props.children}</div>
      </div>
    );
  }
}

export default Category;
