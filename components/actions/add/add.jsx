import React, { Component } from "react";
import StyledAddBtn from "./addStyles";

class Add extends Component {
  render() {
    return (
      <StyledAddBtn>
        <i className="fas fa-plus"></i>
      </StyledAddBtn>
    );
  }
}

export default Add;
