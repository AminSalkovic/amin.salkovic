import React,{useState} from 'react'
import './Card.css'
import 'animate.css'
import * as MdIcons from 'react-icons/md'


import Dropdown from './Dropdown'
import CardItems from './CardItems'
const Card = ({heading,icon}) => {
   const[dropdown,setDropdown]=useState(false)

    const onMouseEnter=()=>{
        setDropdown(true)
    }
    const onMouseLeave=()=>{
        setDropdown(false)
    }
  return (
    <section>
    <div className='card' 
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}>
       <h1>{heading}</h1>
       <span>{icon}</span>
    </div>
    </section>
  )
}

export default Card