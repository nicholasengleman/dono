import styled from "styled-components";

export const StyledProductShort = styled.div`
  width: 30%;
  box-shadow: -8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6;
  margin: 0 15px 30px 15px;
  border-radius: 15px;
  min-width: 250px;
  .photo {
    background: lightgray;
    width: 100%;
    height: 40%;
    min-height: 200px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  .description {
    padding: 15px;
    .row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;
    }
    .title {
      font-weight: 700;
      font-size: 18px;
    }
    .price {
      font-size: 20px;
      font-weight: 800;
    }
    .store {
      font-style: italic;
    }
  }
  .actions {
    display: flex;
    justify-content: space-between;
    margin: 10px;
    background: #335dff;
    color: white;
    padding: 15px 20px;
    border-radius: 15px;
    .action {
      cursor: pointer;
      color: white;
    }
  }
`;
