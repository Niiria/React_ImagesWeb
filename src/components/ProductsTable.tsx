import React from 'react';
import { IProduct, IProducts } from '../contex/Intefraces';

export default function ProductsTable({ products }:IProducts | any) {
  return (
    <ul className="flex flex-col gap-4 p-4">
      
      {products.map((product: IProduct)=>{
        return (
          <li key={product.id} className="grid23">
            <div className="items-center text-center m-auto">
              <img className="cursor-pointer img-min-250" src={product.previewURL} alt={product.previewURL} onClick={()=>window.open(product.largeImageURL)} />
              <h2> {product.user}</h2>
            </div>
            <ul className="grid1111 text-center text-2xl items-center">
              <li>{product.views} </li>
              <li>{product.downloads} </li>
              <li>{product.likes} </li>
              <li>{product.comments} </li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
}
