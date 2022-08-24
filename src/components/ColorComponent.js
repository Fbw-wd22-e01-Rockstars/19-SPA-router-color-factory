import React from 'react'
import {useNavigate,useLocation} from "react-router-dom"

export default function ColorComponent() {

    const navigate = useNavigate()
    const location = useLocation()


  return (
    <div style={{backgroundColor:location && location.state && location.state.value}}>
        <h1>Color Name: {location?.state?.name}</h1>
    
    <button onClick={()=>navigate("/")} >GO BACK</button>

    </div>
  )
}
/* 
let name = undefined;
console.log(name&& name.city)
console.log(name?.city) */
