import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ProductsTable from './ProductsTable';
import { ProductsContex } from '../contex/ProductsContex';

const Products = (props:any) => {
  const { products, fetchNewData, sortData } = useContext(ProductsContex);
  const [search, setSeatch] = useState('');
  const [sort, setSort] = useState('');

  const handleSumbit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchNewData(search);
    setSeatch('');
  };
  const handleChange = (e:  React.ChangeEvent<HTMLInputElement>) =>{
    setSeatch(e.target.value);
  };

  const handleSort = async () =>{
    await props.history;
    if (sort===props.history.location.pathname.substring(1)){
      setSort('');
      sortData(props.history.location.pathname.substring(1), 'descending');
    } else {
      setSort(props.history.location.pathname.substring(1));
      sortData(props.history.location.pathname.substring(1), 'ascending');
    }
  };

  useEffect(() => {
    products.length === 0 && fetchNewData('all');
  });


  return (
    <section className="flex-grow w-full ">
      <div className="border-b-2 border-black p-2 grid23 sticky-custom bg-white">
        <form className=" text-2xl flex flex-row text-center flex-wrap justify-center w-full" onSubmit={handleSumbit}>
          <label htmlFor="products_input">
            Enter product type:
            <input id="products_input" type="text" className="border-2 border-gray-500 rounded-md mx-2" value={search} onChange={handleChange} />
          </label>
        </form>
        <ul className="grid1111 text-center text-2xl items-center">
          <li>
            <NavLink className="lg:flex lg:justify-center lg:items-center" to="/views" onClick={handleSort}>views
              {
                 props.history.location.pathname.substring(1)==='views' ?
                   ( sort==='' ? <ArrowDropDownIcon style={{ fontSize: 40 }} /> : <ArrowDropUpIcon style={{ fontSize: 40 }} /> ) : <div />
              }
            </NavLink>
          </li>
          <li>
            <NavLink className="lg:flex lg:justify-center lg:items-center" to="/downloads" onClick={handleSort}>downloads
              {
                 props.history.location.pathname.substring(1)==='downloads' ?
                   ( sort==='' ? <ArrowDropDownIcon style={{ fontSize: 40 }} /> : <ArrowDropUpIcon style={{ fontSize: 40 }} /> ) : <div />
              }
            </NavLink>
          </li>
          <li>
            <NavLink className="lg:flex lg:justify-center lg:items-center" to="/likes" onClick={handleSort}>likes
              {
                 props.history.location.pathname.substring(1)==='likes' ?
                   ( sort==='' ? <ArrowDropDownIcon style={{ fontSize: 40 }} /> : <ArrowDropUpIcon style={{ fontSize: 40 }} /> ) : <div />
              }
            </NavLink>
          </li>
          <li>
            <NavLink className="lg:flex lg:justify-center lg:items-center" to="/comments" onClick={handleSort}>comments
              {
                 props.history.location.pathname.substring(1)==='comments' ?
                   ( sort==='' ? <ArrowDropDownIcon style={{ fontSize: 40 }}  /> : <ArrowDropUpIcon style={{ fontSize: 40 }} /> ) : <div />
              }
            </NavLink>           
          </li>
        </ul>
      </div>
      <ProductsTable products={products} sort={props.match.params.id} />
    </section>
  );
};

export default Products;