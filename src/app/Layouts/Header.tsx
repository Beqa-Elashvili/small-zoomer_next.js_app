"use client";
import { SHeader } from "./SHeader";
import { useGlobalContext } from "../Providers/GlobalProvider";
import { TProducts } from "Types/TProducts";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaLariSign } from "react-icons/fa6";

export function Header() {
  const { inputValue, setInputValue, SearchResult } = useGlobalContext();
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
            {SearchResult.length !== 0 && (
              <div className="background-blur"></div>
            )}
            <div className="search">
              <img
                className="search_icon"
                src="/icons/search-normal.png"
                alt=""
              />
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="ძიება"
                type="text"
              />
              {SearchResult.length !== 0 && (
                <div className="search_results">
                  {SearchResult?.map((item: TProducts) => (
                    <div className="items" key={item.id}>
                      <div className="product">
                        <img className="items_img" src={item.imageUrl} alt="" />
                        <div className="pp">
                          <p>{item.name}</p>
                          <div>
                            <p>{item.price}</p>
                            <FaLariSign />
                          </div>
                        </div>
                      </div>
                      <MdKeyboardArrowRight />
                    </div>
                  ))}
                </div>
              )}
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
