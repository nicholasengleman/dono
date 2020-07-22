import styled from "styled-components";
import device from "../../utils/breakspoints";

export default styled.div`
  .menu-icon {
    height: 25px;
    width: 25px;
    cursor: pointer;
    display: block;
    position: absolute;
    left: -30px;
    top: 3px;
  }
  .menu {
    background-color: white;
    max-width: calc(100vw - 24px);
    border-radius: 3px;
    overflow: hidden;
    position: absolute;
    top: -20px;
    opacity: 0;
    transform: scale(0.9);
    transition: all 0.25s;
    box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px,
      rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px;
    li {
      cursor: pointer;
      color: rgb(55, 53, 47);
      padding: 10px 30px;
      border-bottom: 1px solid lightgray;
    }
    li:hover {
      background-color: lightgray;
    }

    &.visible {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
