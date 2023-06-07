import React, { useState } from 'react';
import { Clothes } from './Clothes';
import { Electronics } from './Electronics';

export const ProductList = () => {
  const [productItems, updateProductItems] = useState([]);
  const clothes = ['Gucci', 'Louis Vuitton', 'Dior', 'Prada'];
  const electronics = ['Airpods', 'PS5', 'Headphones', 'Games'];

  function productHandler(typeofProduct) {
    const newItems =
      typeofProduct === 'Clothes'
        ? clothes.map((item) => <li key={item}>{item}</li>)
        : electronics.map((item) => <li key={item}>{item}</li>);
    updateProductItems(newItems);
  }

  return (
    <>
      <ul>{productItems}</ul>
      <Clothes handler={productHandler}></Clothes>
      <Electronics handler={productHandler}></Electronics>
    </>
  );
};
