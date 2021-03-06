import styled from "styled-components";
import device from "../../utils/breakspoints";

export const StyledProduct = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Varela Round", sans-serif;
  margin-bottom: 3%;
  box-shadow: -8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6;
  padding: 20px;
  background-color: #f7f7f6;
  border-radius: 10px;
  width: 45%;
  .image {
    height: 150px;
    width: 150px;
    background-color: lightgray;
    margin-right: 15px;
    border-radius: 3px;
  }
  .product-info {
    width: calc(100% - 150px);
  }
  .name {
    font-size: 2rem;
    font-weight: 600;
    color: #272b2e;
    @media ${device.desktopSM} {
      font-size: 1.5rem;
    }
  }
  .why {
    font-size: 0.8rem;
    margin: 10px 0;
    line-height: 1.1rem;
  }
  .price {
    font-size: 2rem;
    color: #272b2e;
    font-weight: 800;
    @media ${device.desktopSM} {
      font-size: 1.5rem;
    }
  }
  .donations {
    width: 100%;
    height: 20px;
    border-radius: 6px;
    background-color: #dee0e0;
    .progress {
      height: 100%;
      width: 50%;
      border-radius: 6px;
      position: relative;
      background: linear-gradient(
        -90deg,
        #71f7f2,
        #36b8e9
      ); /* Standard syntax */
      z-index: 3;
      .raised {
        position: absolute;
        right: 15px;
        line-height: 20px;
        font-size: 0.8rem;
        font-weight: 600;
      }
    }
  }

  .store {
    font-size: 2rem;
    @media ${device.desktopSM} {
      font-size: 1rem;
    }
  }
`;

export const StyledRow = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
`;

export const StyledRowCentered = styled(StyledRow)`
  align-items: center;
`;
