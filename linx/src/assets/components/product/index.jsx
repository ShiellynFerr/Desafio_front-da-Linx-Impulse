import React, { useState, useEffect } from "react";
import { Section, Card, Container } from "./style";
import Part from "../part";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [pages, setPages] = useState(
    "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1"
  );
  const [firstLoad, setFirstLoad] = useState(true)

  useEffect(() => {
    const loading = () => loadProducts();
    loading();
  }, []);

  const loadProducts = async () => {
    const res = await fetch(pages);
    const data = await res.json();
    
    if(firstLoad) {
      setProduct([ ...data.products]);
      setPages(`https://${data.nextPage}`);
      setFirstLoad(false)
    } else {
      setProduct((produtos) => [...produtos, ...data.products]);
      setPages(`https://${data.nextPage}`);
    }
  };
  return (
    <Container>
      <Part />
      <Section>
        {product.map((produto) => {
          return(
          <Card>
            <figure>
              <img src={produto.image} alt="imagem do produto" />
            </figure>
            <h6>{produto.name}</h6>
            <p className="desc">{produto.description}</p>
            <span>De: R${produto.oldPrice}</span>
            <p className="valor">Por: R${produto.price}</p>
            <span>
              ou {produto.installments.count}x de R${produto.installments.value}
            </span>
            <button>Comprar</button>
          </Card>
        )})}
      </Section>
      <button className="btn-produto" onClick={loadProducts}>
        Ainda mais produtos aqui
      </button>
    </Container>
  );
};

export default Product;
