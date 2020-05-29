import React, { Component } from "react";
import "./category.scss";

class Category extends Component {
  render() {
    return (
      <div className="c-category">
        <div className="c-category-header">
          <div className="name">{this.props.name}</div>
          <div className="edit">Edit</div>
        </div>
        <div className="c-category-body">{this.props.children}</div>
      </div>
    );
  }
}

export default Category;
