import React from 'react'
import { Section } from './style';

const Part = (props) => {
  return (
      <Section>
         <span>
          <hr/>
         </span>
         <h3 texto="Uma seleção especial pra você">Uma seleção especial pra você</h3>
         <h3 texto="Uma">{props.texto}</h3>
         <span>
         <hr/>
         </span>
      </Section>
  )
}

export default Part;