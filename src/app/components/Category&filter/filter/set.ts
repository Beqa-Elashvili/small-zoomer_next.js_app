// interface IState {
//   minPrice: number | undefined;
//   maxPrice: number | undefined;
//   minPriceRange: number;
//   priceRange: number;
//   priceRangeMax: number;
// }

// const [state, setState] = useState<Partial<IState>>({});

// setState((e) => {
//   const va = e;
//   delete va.priceRange;
//   return va;
// });

// setState((e) => ({
//   ...e,
//   minPrice: 0,
// }));

// useEffect(() => {
//   if (Object.keys(state).length === 0){
//     requst(`hasdasd:asdsadasdasd.asdasd/asdasd?page=1`)
//   }else{
//     const obasd = objectToURLQuery
