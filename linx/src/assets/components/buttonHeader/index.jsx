import React from 'react'
import './style.css'

const ButtonHeader= (props) => {
  return (
   <button className='btn-header' texto="Conheça a Linx">
    {props.texto}
   </button>
  )
}

export default ButtonHeader;
