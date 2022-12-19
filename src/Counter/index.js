import React,{useState} from 'react'
import "./index.css";
import {AiOutlineMinus,AiOutlinePlus} from "react-icons/ai";

const Counter = () => {
    const[count,setCount] = useState(0)
  return (
    
    <div className="counter">
    <h4 className="heading">Counter</h4>
    <div className="card">
        <span onClick={()=>setCount(prev=>prev-3)}><AiOutlineMinus /></span>
        <h3>{count}</h3>
        <span onClick={()=>setCount(prev=>prev+3)}><AiOutlinePlus/></span>
    </div>
    </div>
  )
}

export default Counter;