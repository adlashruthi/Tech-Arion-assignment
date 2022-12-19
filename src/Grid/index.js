import React,{useState,useEffect} from 'react'
import "./index.css";
const Grid = () => {
    const[fetchData,getData] = useState([])
    const backendData = async()=>{
        const response = await fetch("https://gorest.co.in/public/v1/todos")
        const data = await response.json()
        getData(data.data)
        
    }
    useEffect(()=>{
        backendData()
    },[])
  return (
    <div className="container">
      <ul>
        {fetchData.map((item=><li key={item.id}>
            <h4>{item.title}</h4></li>))}
      </ul>
    </div>
  )
}

export default Grid