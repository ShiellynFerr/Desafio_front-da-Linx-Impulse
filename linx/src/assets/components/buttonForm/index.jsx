import React from 'react'
import { Button } from './style';

const ButtonForm= (props) => {
  return (
   <Button className='btn-header' texto="Enviar agora">
    {props.texto}
   </Button>
  )
}

export default ButtonForm;
