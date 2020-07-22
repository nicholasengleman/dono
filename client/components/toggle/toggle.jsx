import React, { Component } from "react";
import styled from "styled-components";

const StyledToggle = styled.div`
  height: 30px;
  width: 60px;
  border: 2px solid black;
  border-radius: 20px;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 0;
  .toggle {
    height: 26px;
    width: 26px;
    border-radius: 20px;
    background-color: black;
    border: none;
    padding: 0;
    margin: 0;
    transition: all 0.15s cubic-bezier(0.6, -0.28, 0.74, 0.05);
    &:focus {
      outline: none;
    }
  }
  &.toggle-on {
    .toggle {
      transform: translateX(30px);
    }
  }
`;

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
  }

  toggleBtn() {
    this.setState({ status: !this.state.status });
  }

  render() {
    return (
      <StyledToggle
        onClick={() => this.toggleBtn()}
        toggle-on={this.state.status}
      >
        <button
          type="button"
          className={`toggle ${this.state.status ? "toggle-on" : ""}`}
        />
      </StyledToggle>
    );
  }
}

export default Toggle;
