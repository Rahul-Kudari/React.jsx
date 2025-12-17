import React, { useEffect } from 'react'
import { CounterContext } from './Context';
import { useState } from 'react';
import Cart from './Cart';

function Products() {
      const [count,setCount]=useState(0);
 const countHandling=()=>{
  setCount(prev=>prev+2);
 }
 const [product,setProduct]=useState([])
 useEffect(()=>{
  fetch("https://dummyjson.com/products").then((repo)=>repo.json()).then((x)=>setProduct(x.products))
 })
  return (
    <div>
   <CounterContext.Provider value={count}>
     <Cart count={count}/>
     <h1>{count}</h1>
     <button onClick={countHandling}>Count</button>
     <div>{
      product.map((item)=>(
    
        <div><p key={item.id}>{item.title}</p></div>
       
      ))
}</div>
     </CounterContext.Provider>
     
    </div>
  )
}

export default Products