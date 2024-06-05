"use client";

export default function useGetProductURL() {
  function getProductUrl(page: number, selectValue: string, minPrice: any) {
    let url = `https://zoommer-api.lemon.do/v1/Products/v3?CategoryId=21&Page=${page}&Limit=12`;
    if (selectValue) {
      switch (selectValue) {
        case "ფასი: კლებადობით":
          url += "&PriceAsc=false";
          break;
        case "ფასი: ზრდადობით":
          url += "&PriceAsc=true";
          break;
        case "დასახელება: A-Z":
          url += "&NameAsc=true";
          break;
        case "დასახელება: Z-A":
          url += "&NameAsc=false";
          break;
      }
    }
    if (minPrice) {
      url += `&MinPrice=${minPrice[0]}&MaxPrice=${minPrice[1]}`;
    }
    return url;
  }
  return { getProductUrl };
}
