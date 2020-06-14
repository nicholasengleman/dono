import styled from "styled-components";
import device from "../../../utils/breakspoints";

export default styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.1s;
  border-radius: 3px;
  &:hover {
    background-color: lightgray;
  }
  &:focus {
    outline: none;
  }

  .fas {
    font-size: 1rem;
  }
`;
