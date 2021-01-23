import { IProducts } from './Intefraces';

export default (state:IProducts, action: any) => {
  switch (action.type) {
    case 'FETCH_NEW_DATA':
      return { ...state, products: action.payload };
    case 'SORT_DATA':
      return { ...state, products: action.payload };  

    default:
      return state;
  }
};
