import styled from "styled-components";

export const SFilterPoructs = styled.div`
  display: flex;
  gap: 28px;
  padding: 0px 140px 70px 140px;
  .left {
    width: 350px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 24px;
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
`;
