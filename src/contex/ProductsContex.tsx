import Axios from 'axios';
import React, { createContext, useReducer } from 'react';
import ProductsReducer from './ProductsReducer';

const initialState = {
  products: []
};

export const ProductsContex = createContext<any>(initialState);

export function ProductsContexProvider(props: any) {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  const fetchNewData = async (search: string) => {
    Axios.get(`https://pixabay.com/api/?key=18158143-8480e2394387828033c362179&q=${search}&image_type=photo`)
      .then(res=>{
        dispatch({
          type:'FETCH_NEW_DATA',
          payload: res.data.hits
        });
      });
  };

  const sortData = (sortParam: string, order: string) => {
    switch (order){
      case 'descending':{
        const sortedProducts = state.products;
        sortedProducts.sort((producta: any, productb: any) => {
          return (producta[sortParam]) - (productb[sortParam]);
        });
        dispatch({
          type: 'SORT_DATA',
          payload: sortedProducts
        });
        break;
      }
      case 'ascending':{
        const sortedProducts = state.products;
        sortedProducts.sort((producta: any, productb: any) => {
          return (productb[sortParam]) - (producta[sortParam]);
        });
        dispatch({
          type: 'SORT_DATA',
          payload: sortedProducts
        });
        break;
      }
      default:
        break;
    }         
  };

  return (
    <ProductsContex.Provider value={{ products:state.products, fetchNewData, sortData }}>
      {props.children}
    </ProductsContex.Provider>
  );
}

