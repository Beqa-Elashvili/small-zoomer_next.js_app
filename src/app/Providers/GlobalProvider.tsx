"use client";

import axios from "axios";
import {
  createContext,
  PropsWithChildren,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
} from "react";
import { TProducts } from "Types/TProducts";
import { IState } from "Types/TProducts";

interface TGlobalContext {
  products: TProducts[];
  setProducts: Dispatch<SetStateAction<TProducts[]>>;
  state: Partial<IState>;
  setState: Dispatch<SetStateAction<Partial<IState>>>;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  Selectvalue: string;
  setSelectValue: Dispatch<SetStateAction<string>>;
  SearchResult: TProducts[];
  setSearchResult: Dispatch<SetStateAction<TProducts[]>>;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
}

export const GlobalContext = createContext<TGlobalContext>({
  products: [],
  setProducts: () => {},
  page: null,
  setPage: () => {},
  Selectvalue: "",
  setSelectValue: () => {},
  SearchResult: [],
  setSearchResult: () => {},
});

export const useGlobalContext = (): TGlobalContext => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext used outside");
  }
  return context;
};

export function GlobalProvider({ children }: PropsWithChildren<{}>) {
  const [products, setProducts] = useState<TProducts[]>([]);
  const [state, setState] = useState<Partial<IState>>({});
  const [page, setPage] = useState<number>(1);
  const [Selectvalue, setSelectValue] = useState<string>("სორტირება");
  const [SearchResult, setSearchResult] = useState<TProducts[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    async function GetSearchProducts() {
      try {
        if (inputValue === "") {
          setSearchResult([]);
          return;
        } else {
          const resp = await axios.get(
            `https://zoommer-api.lemon.do/v1/Products/v3?CategoryId=21&Name=${inputValue}`
          );
          setSearchResult(resp.data.products);
        }
      } catch (error) {
        console.error("Error Fetching Products:", error);
      }
    }
    const timeout = setTimeout(GetSearchProducts, 250);
    return () => clearTimeout(timeout);
  }, [inputValue]);

  return (
    <GlobalContext.Provider
      value={{
        products,
        setProducts,
        page,
        setPage,
        state,
        setState,
        Selectvalue,
        setSelectValue,
        SearchResult,
        setSearchResult,
        inputValue,
        setInputValue,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
