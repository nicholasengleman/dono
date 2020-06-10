import React, { Component } from "react";
import "./menu.scss";
import menuIcon from "./../../images/menu-icon.png";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
    };
  }

  toggleMenu() {
    this.setState({ visibility: !this.state.visibility });
  }

  render() {
    return (
      <div className="menu-container">
        <img
          src={menuIcon}
          className="menu-icon"
          onClick={() => this.toggleMenu()}
        />
        <div className={`menu ${this.state.visibility ? "visible" : ""}`}>
          <ul>
            <li>Edit</li>
            <li>Delete</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
