import React from "react";
import useGetProducts from "./../Hooks/products/useGetProducts";
import useGetCategories from "./../Hooks/categories/useGetCategories";
import useGetSpacificProduct from "../Hooks/products/useGetSpacificProduct";

export default function Home() {
  const { data: products, isLoading, isError, error } = useGetProducts();
  const { data: categories } = useGetCategories();
  const { data: product } = useGetSpacificProduct(1);

  console.log(products);
  console.log(categories);
  console.log(product);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (!products || products.length === 0) {
    return <div>No data</div>;
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
        </div>
      ))}
    </div>
  );
}
