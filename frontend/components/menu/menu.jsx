import React, { Component } from "react";
import StyledMenuContainer from "./menuStyles";
import menuIcon from "./../../images/menu-icon.png";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
    };
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  };

  handleClickOutside = (event) => {
    if (
      this.state.visibility &&
      this.wrapperRef &&
      !this.wrapperRef.contains(event.target)
    ) {
      this.setState({ visibility: false });
    }
  };

  toggleMenu = () => {
    this.setState({ visibility: !this.state.visibility });
  };

  toggleEdit = () => {
    this.props.toggleEditMode();
    this.toggleMenu();
  };

  render() {
    return (
      <StyledMenuContainer>
        <img
          src={menuIcon}
          className="menu-icon"
          onClick={() => this.toggleMenu()}
        />
        <div
          className={`menu ${this.state.visibility ? "visible" : ""}`}
          ref={this.setWrapperRef}
        >
          <ul>
            <li onClick={() => this.toggleEdit()}>Edit</li>
            <li>Delete</li>
          </ul>
        </div>
      </StyledMenuContainer>
    );
  }
}

export default Menu;
