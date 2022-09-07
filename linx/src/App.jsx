import React from 'react'
import './App.css'
import Form from './assets/components/form';
import Header from './assets/components/header'
import Footer from './assets/components/footer'
import FormNews from './assets/components/formNews';
import Product from './assets/components/product';


function App() {
     return (
      <>
      <Header/>
      <Form/>
      <Product/>
      <FormNews/>
      <Footer/>
      </>
     )
}

export default App
