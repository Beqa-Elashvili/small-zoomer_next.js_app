import styled from "styled-components";

export const SFilterPoructs = styled.div`
  display: flex;
  gap: 40px;
  padding: 40px 140px 70px 140px;
  .left {
    width: 350px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background-color: #ffffff;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }
  .line {
    height: 1px;
    width: 100%;
    background-color: #f2f2f2;
  }
  .slider {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .sliders {
    position: relative;

    height: 100px;
    .sensor {
      position: absolute;
      top: 24%;
      right: 20%;
      left: 31%;
      z-index: -1;
    }
    .slid {
      margin-top: 43px;
      z-index: 10;
    }
  }
  .sliderValues {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    div {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 10px 0px 10px 0px;
      width: 165px;
      border: solid 1px #ec5e2a;
      border-radius: 4px;
      p {
        font-size: 18px;
      }
    }
  }
  .filters {
    div {
      display: flex;
      gap: 12px;
    }
    .add {
      color: #ec5e2a;
      margin-top: 8px;
    }
  }
  .fil {
    display: flex;
    flex-direction: column;
    gap: 22px;
    p {
      cursor: pointer;
    }
    img {
      cursor: pointer;
    }
  }
  .main {
    display: flex;
    flex-direction: column;
    .add_more {
      margin: auto;
      margin-top: 30px;
      text-align: center;
      border: none;

      border-radius: 90px;
      padding: 12px 22px 12px 22px;
      font-weight: 600;
    }
  }
  .products {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 40px;

    .first {
      display: flex;
      flex-direction: column;
      gap: 6px;
      img {
        height: 170px;
        object-fit: contain;
      }
    }
    h3 {
      .icon {
        height: 14px;
      }
    }
    .name {
      text-wrap: balance;
      height: 40px;
      overflow: hidden;
      font-size: 14px;
    }
    p {
      font-size: 10px;
      font-weight: 600;
      display: flex;
      gap: 2px;
      span {
        color: #ec5e2a;
      }
      img {
        height: 12px;
      }
    }
    .btns {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .btn2 {
        width: 70%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        background-color: #f28f6a;
      }
      button {
        padding: 12px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
      img {
        height: 14px;
      }
    }
  }
`;
