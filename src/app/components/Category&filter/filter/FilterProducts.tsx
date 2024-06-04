"use client";
import { Slider } from "antd";
import { SFilterPoructs } from "./SFilterProducts";
import { useState } from "react";
import { Checkbox } from "antd";
import type { CheckboxProps } from "antd";

const onChange: CheckboxProps["onChange"] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

export default function FilterProducts() {
  const [SliderValues, setSliderValues] = useState<number[]>([3000, 7000]);

  const handleSlidervalues = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setSliderValues(value);
    }
  };
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
      <div>this is products</div>
    </SFilterPoructs>
  );
}
