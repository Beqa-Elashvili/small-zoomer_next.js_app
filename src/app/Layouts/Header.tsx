"use client";
import { SHeader } from "./SHeader";

export function Header() {
  return (
    <SHeader>
      <div>
        <div className="top">
          <div className="icon_back">
            <div className="icon">
              <img src="/icons/Vector.png" alt="error" />
            </div>
            <p>*7007 / +995 (32) 2 60 30 60</p>
          </div>
          <div className="navBar">
            <p>ონლაინ განვადება </p>
            <p>ფილიალები </p>
            <p> ყველა აქცია</p>
          </div>
        </div>
        <div className="bottom">
          <div>
            <img className="zoomerIcon" src="/icons/ZomerLogo.png" alt="" />
          </div>
          <div className="bot-two">
            <button className="navbtn">
              <img src="/icons/nav.png" alt="" />
              ნავიგაცია
            </button>
            <div className="search">
              <img src="/icons/search-normal.png" alt="" />
              <input placeholder="ძიება" type="text" />
            </div>
            <button className="btn1">
              <img src="/icons/shopping-cart.png" alt="" />
              კალათა
            </button>
            <button className="btn1">
              <img src="/icons/profile-circle.png" alt="" />
              პროფილი
            </button>
          </div>
        </div>
      </div>
    </SHeader>
  );
}
