import {Header} from "./components/Header/Header";
import {Categories} from "./components/categories/Categories";
import React from "react";
import {Products} from "./components/products/Products";

import CartTotal from './components/cart/CartTotal';




function App() {
  return (
    <>
      <Header />
      <div className="home px-6 flex md:flex-row flex-col justify-between gap-10 md:pb-0 pb-24">
         <div className="categories  overflow-auto max-h-[calc(100vh_-_112px)] md:pb-10 ">
            <Categories />
         </div>
         <div className="products flex-[8] max-h-[calc(100vh_-_112px)] overflow-y-auto pb-10">
          <Products />
          </div>
         <div className="cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border ">
          <CartTotal />
         </div>
      </div>
</>
  );
}

export default App;
