import React from 'react'
import {useNavigate} from "react-router-dom"

export default function AddnewColor({setColors,colors}) {
    const navigate = useNavigate()
    const addnewcolor=(e)=>{
        e.preventDefault()
        console.log(e.target.colorname.value)
        console.log(e.target.colorvalue.value)
        let newColor= {name: e.target.colorname.value , value:e.target.colorvalue.value}
        setColors([...colors, newColor])
        navigate("/")
    }
  return (
    <div>
        <div>
            <form onSubmit={addnewcolor}>
                <label >Enter Color Name: <input type="text" name="colorname" defaultValue={"yellow"} /> </label><br />
                <label >Choose Color: <input type="color" name="colorvalue" defaultValue={"#efff0a"} /> </label><br />
                <button>Add Color</button>
            </form>
        </div>
    </div>
  )
}
