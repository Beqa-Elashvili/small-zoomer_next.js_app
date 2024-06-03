import styled from "styled-components";

export const SCategory = styled.div`
  .main {
    padding: 30px 140px 30px 140px;
    display: flex;
    text-align: center;
    justify-content: space-between;
  }
  .left {
    display: flex;
    align-items: center;
    gap: 12px;
    img {
      height: 24px;
    }
    :first-child {
      height: 7px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    gap: 24px;
    button {
      padding: 8px 24px 8px 24px;
      border-radius: 30px;
      border: none;
      display: flex;
      align-items: center;
      gap: 34px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);

      cursor: pointer;
    }
    img {
      cursor: pointer;
    }
  }
  .line {
    height: 1px;
    width: 80%;
    margin: auto;
    background-color: #f2f2f2;
  }
`;
