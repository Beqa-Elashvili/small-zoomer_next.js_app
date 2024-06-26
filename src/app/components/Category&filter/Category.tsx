"use client";
import { Select } from "antd";
import { SCategory } from "./SCategory";
import { useGlobalContext } from "@src/app/Providers/GlobalProvider";

export default function Category() {
  const { Selectvalue, setSelectValue } = useGlobalContext();
  return (
    <main>
      <SCategory>
        <div className="main">
          <div className="left">
            <img
              className="arrow-left"
              src="/icons/arrow.png"
              alt="arrow-left-img"
            />
            <img src="/icons/apple.png" alt="apple-icon" />
            <h4>Apple</h4>
          </div>
          <div className="right">
            <Select 
              value={Selectvalue}
              onChange={(e) => setSelectValue(e)}
              defaultValue={"დალაგება"}
            >
              <Select.Option value="პოპულარული">პოპულარული</Select.Option>
              <Select.Option value="ფასი: კლებადობით">
                ფასი: კლებადობით
              </Select.Option>
              <Select.Option value="ფასი: ზრდადობით">
                ფასი: ზრდადობით
              </Select.Option>
              <Select.Option value="დასახელება: A-Z">
                დასახელება: A-Z
              </Select.Option>
              <Select.Option value="დასახელება: Z-A">
                დასახელება: Z-A
              </Select.Option>
              <Select.Option value="გამოშვების თარიღი">
                გამოშვების თარიღი
              </Select.Option>
              <Select.Option value="ფასდაკლება">ფასდაკლება</Select.Option>
            </Select>
            <img src="/icons/grid-2.png" alt="img" />
            <img src="/icons/grid-9.png" alt="img" />
          </div>
        </div>
        <p className="line"></p>
      </SCategory>
    </main>
  );
}
