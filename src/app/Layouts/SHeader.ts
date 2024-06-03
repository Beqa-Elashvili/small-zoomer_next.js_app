import styled from "styled-components";

export const SHeader = styled.div`
  background-color: #ec5e2a;
  .top {
    padding: 12px;
    padding-inline: 140px;
    display: flex;
    justify-content: space-between;
    color: #ffffff;
    .navBar {
      display: flex;
      gap: 20px;
      p {
        cursor: pointer;
      }
    }
  }
  .icon_back {
    display: flex;
    align-items: center;
    gap: 8px;
    .icon {
      border-radius: 4px;
      text-align: center;
      padding: 2px;
      width: 24px;
      background-color: #ffffff;
    }
  }
  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f2f2f2;
    padding: 12px;
    padding-inline: 140px;
    gap: 140px;
    .bot-two {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
      width: 100%;
    }
    button {
      height: 40px;
      padding: 4px 16px;
      display: flex;
      align-items: center;
      gap: 6px;
      border-radius: 12px;
      border: none;
      cursor: pointer;
    }
    .zoomerIcon {
      height: 40px;
    }
    .navbtn {
      background-color: #ec5e2a;
      color: #ffffff;
    }
    .search {
      position: relative;
      width: 100%;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      border-radius: 12px;
      input {
        width: 100%;
        height: 40px;
        border-radius: 12px;
        border: solid 1px;
        padding-left: 40px;
        border-color: #ec5e2a80;
        transition: border-color 0.3s ease;
        &:focus {
          outline: none;
          border-color: #ec5e2a;
          box-shadow: 0 0 5px rgba(236, 94, 42, 0.5);
        }
      }
      img {
        position: absolute;
        transform: translate(50%, 50%);
      }
    }
    .btn1 {
      box-shadow: 0 1px 6px 1px rgba(0, 0, 0, 0.1);
      border-radius: 12px;
    }
  }
`;
