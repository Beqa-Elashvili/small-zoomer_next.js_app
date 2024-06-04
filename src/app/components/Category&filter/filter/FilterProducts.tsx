"use client";
import { Slider } from "antd";
import { SFilterPoructs } from "./SFilterProducts";
import { useEffect, useState } from "react";
import { Checkbox } from "antd";
import type { CheckboxProps } from "antd";
import axios from "axios";
import { TProducts } from "Types/TProducts";
import { FaLariSign } from "react-icons/fa6";

export default function FilterProducts() {
  const [SliderValues, setSliderValues] = useState<number[]>([3000, 7000]);

  const handleSlidervalues = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setSliderValues(value);
    }
  };

  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const [products, setProducts] = useState<TProducts[]>();
  const [page, setPage] = useState<number>(1);

  async function Getfirstproducts(pages: number) {
    const resp = await axios.get(
      ` https://zoommer-api.lemon.do/v1/Products/v3?CategoryId=21&Page=${pages}&Limit=12`
    );
    setProducts(resp.data.products);
  }

  async function GetProducts(pages: number) {
    const resp = await axios.get(
      ` https://zoommer-api.lemon.do/v1/Products/v3?CategoryId=21&Page=${pages}&Limit=12`
    );
    return resp.data.products;
  }

  async function getMoreProducts(): Promise<void> {
    setPage(page + 1);
    const newProducts = await GetProducts(page);
    setProducts((prevProducts) => [...(prevProducts || []), ...newProducts]);
  }

  useEffect(() => {
    Getfirstproducts(page);
  }, []);

  return (
    <SFilterPoructs>
      <div className="left">
        <div className="top">
          <h4>ფილტრი</h4>
          <button>
            <img src="/icons/box.png" alt="box" />
            გასუფთავება
          </button>
        </div>
        <div className="line" />
        <div className="sliders">
          <div className="slider">
            <h4>ფასი</h4>
            <img src="/icons/arrow-up.png" alt="error" />
          </div>
          <div className="slid">
            <Slider
              max={10000}
              range={{ draggableTrack: true }}
              defaultValue={[3000, 7000]}
              onChange={handleSlidervalues}
              value={SliderValues}
            />
            <img
              className="sensor"
              src="/icons/price-slider.png"
              alt="sensor"
            />
          </div>
        </div>
        <div className="sliderValues">
          <div>
            MIN <p>{SliderValues[0]}</p>
          </div>
          <div>
            MAX <p>{SliderValues[1]}</p>
          </div>
        </div>
        <div className="fil">
          <div className="slider">
            <h4>გამოშვების თარიღი</h4>
            <img src="/icons/arrow-up.png" alt="error" />
          </div>
          <div className="filters">
            <div>
              <Checkbox onChange={onChange} />
              <p>2018</p>
            </div>
            <div>
              <Checkbox onChange={onChange} />
              <p>2019</p>
            </div>
            <div>
              <Checkbox onChange={onChange} />
              <p>2020</p>
            </div>
            <p className="add">მეტის ნახვა</p>
          </div>
          <div className="slider">
            <h4>წონა</h4>
            <img src="/icons/arrow-up.png" alt="error" />
          </div>
          <div className="filters">
            <div>
              <Checkbox onChange={onChange} />
              <p>135</p>
            </div>
            <div>
              <Checkbox onChange={onChange} />
              <p>164</p>
            </div>
            <div>
              <Checkbox onChange={onChange} />
              <p>228</p>
            </div>
            <p className="add">მეტის ნახვა</p>
          </div>
          <div className="slider">
            <h4>ეკრანის ზომა</h4>
            <img src="/icons/arrow-up.png" alt="error" />
          </div>
          <div className="filters">
            <div>
              <Checkbox onChange={onChange} />
              <p>4.5 inches</p>
            </div>
            <div>
              <Checkbox onChange={onChange} />
              <p>5.4 inches</p>
            </div>
            <div>
              <Checkbox onChange={onChange} />
              <p>5.8 inches</p>
            </div>
            <p className="add">მეტის ნახვა</p>
          </div>
          <div className="slider">
            <h4>სიმ ბარათი-SIM</h4>
            <img src="/icons/arrow-up.png" alt="error" />
          </div>
          <div className="slider">
            <h4>ოპერატიული სისტემა</h4>
            <img src="/icons/arrow-up.png" alt="error" />
          </div>
          <div className="slider">
            <h4>ჩიპსეტი</h4>
            <img src="/icons/arrow-up.png" alt="error" />
          </div>
          <div className="slider">
            <h4>პროცესორი</h4>
            <img src="/icons/arrow-up.png" alt="error" />
          </div>
          <div className="slider">
            <h4>გრაფიკული პროცესორი</h4>
            <img src="/icons/arrow-up.png" alt="error" />
          </div>
          <div className="slider">
            <h4>შიდა მეხსიერება</h4>
            <img src="/icons/arrow-up.png" alt="error" />
          </div>
          <div className="slider">
            <h4>ოპერატიული მეხსიერება</h4>
            <img src="/icons/arrow-up.png" alt="error" />
          </div>
        </div>
      </div>
      <div className="main">
        <div className="products">
          {products &&
            products.length > 0 &&
            products.map((item: TProducts) => {
              return (
                <div key={item.id} className="first">
                  <img src={item.imageUrl} alt="products_img" />
                  <h3>
                    {item.price} <FaLariSign className="icon" />
                  </h3>
                  <p>
                    თვეში:
                    <span>
                      63 <FaLariSign />
                    </span>
                    -დან
                  </p>
                  <p className="name">
                    {item.name.split(" ").slice(0, 7).join(" ")}
                  </p>
                  <div className="btns">
                    <button>
                      <img src="/icons/arrow-swap.png" alt="arrow_swap" />
                    </button>
                    <button className="btn2">
                      <img src="/icons/shopping-cart.png" alt="" />
                      დამატება
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
        <button className="add_more" onClick={getMoreProducts}>
          ნახე მეტი
        </button>
      </div>
    </SFilterPoructs>
  );
}
