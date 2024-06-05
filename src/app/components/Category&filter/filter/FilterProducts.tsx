"use client";
import { Slider } from "antd";
import { SFilterPoructs } from "./SFilterProducts";
import { Checkbox } from "antd";
import type { CheckboxProps } from "antd";
import axios from "axios";
import { TProducts } from "Types/TProducts";
import { FaLariSign } from "react-icons/fa6";
import { useGlobalContext } from "@src/app/Providers/GlobalProvider";
import { useCallback, useEffect, useState } from "react";
import useGetProductURL from "@src/app/Hooks/FilterUrlHook";
import { Spin } from "antd";

export default function FilterProducts() {
  const {
    products,
    setProducts,
    page,
    setPage,
    state,
    setState,
    Selectvalue,
    setSelectValue,
  } = useGlobalContext();

  const { getProductUrl } = useGetProductURL();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSlidervalues = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setState((e) => ({
        ...e,
        minMaxPrices: value,
      }));
    }
  };

  const fetchProducts = async (page: number) => {
    try {
      setLoading(true);
      const url = getProductUrl(page, Selectvalue, state.minMaxPrices);
      const response = await axios.get(url);
      setLoading(false);
      return response.data.products;
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const getMoreProducts = async () => {
    try {
      const newPage = page + 1;
      setPage(newPage);
      const newProducts = await fetchProducts(newPage);
      setProducts((prev) => [...(prev || []), ...newProducts]);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    if (Object.keys(state).length === 0) {
      const fetchInitialProducts = async () => {
        const initialProducts = await fetchProducts(1);
        setProducts(initialProducts);
      };
      fetchInitialProducts();
    } else {
      setPage(1);
      const getFilteredProducts = async () => {
        const filteredProducts = await fetchProducts(1);
        setProducts(filteredProducts);
      };
      const timeout = setTimeout(getFilteredProducts, 300);
      return () => clearTimeout(timeout);
    }
  }, [state]);

  const handleSelectValue = useCallback(async () => {
    setPage(1);
    const newProducts = await fetchProducts(1);
    setProducts(newProducts);
  }, [Selectvalue]);

  useEffect(() => {
    handleSelectValue();
  }, [Selectvalue]);

  const hanldeClearFilters = async () => {
    setPage(1);
    setState({});
    setSelectValue("დალაგება");
  };

  function scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <SFilterPoructs>
      <div className="left">
        <div className="top">
          <h4>ფილტრი</h4>
          <button onClick={hanldeClearFilters}>
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
              max={25000}
              range={{ draggableTrack: true }}
              defaultValue={[0, 7000]}
              onChange={handleSlidervalues}
              value={state.minMaxPrices}
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
            MIN
            <p>
              {state.minMaxPrices?.length !== undefined
                ? state.minMaxPrices[0]
                : 0}
            </p>
          </div>
          <div>
            MAX
            <p>
              {state.minMaxPrices?.length !== undefined
                ? state.minMaxPrices[1]
                : 0}
            </p>
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
        <div className="add_more">
          <button onClick={getMoreProducts}>
            ნახე მეტი {loading && <Spin />}
          </button>
          <button onClick={scrollToTop}>Scroll on Top</button>
        </div>
      </div>
    </SFilterPoructs>
  );
}
