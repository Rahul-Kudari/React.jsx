import React, { useContext } from 'react'
import { CounterContext } from './Context'

function Cart() {
const count=useContext(CounterContext);
  return (
    <div>
   {count}
    </div>
  )
}

export default Cart