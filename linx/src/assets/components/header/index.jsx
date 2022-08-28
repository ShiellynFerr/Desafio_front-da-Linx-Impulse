import React from 'react';
import ButtonHeader from '../buttonHeader';
import './style.css';

const Header = () => {
  return (
   <header className='header'>
    <section className='header-for-you'>
    <h1 className='header-title-product'>uma seleção de produtos</h1>
    <h2 className='header-title-special'>especial para <span>você</span></h2>
    </section>
    <p>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
    <div className='header-box-buttons'>
      <ButtonHeader texto="Conheça a linx"/>
      <ButtonHeader texto="Ajude o algorítimo"/>
      <ButtonHeader texto="Seus produtos"/>
      <ButtonHeader texto="Compartilhe"/>
    </div>
   </header>
  )
}

export default Header;