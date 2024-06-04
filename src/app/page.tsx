import Category from "./components/Category&filter/Category";
import FilterProducts from "./components/Category&filter/filter/FilterProducts";

export default function Home() {
  return (
    <main>
      <Category />
      <div>
        <FilterProducts />
      </div>
    </main>
  );
}
