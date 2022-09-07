import React from "react";
import ButtonForm from "../buttonForm";
import InputForm from "../inputForm";
import { Section } from "../part/style";
import { BoxFormNews, BoxInputs, BoxText } from "./style";

const FormNews = (props) => {
  return (
    <BoxFormNews>
      <Section>
        <span>
          <hr />
        </span>
        <h3 texto="Uma seleção especial pra você">Compartilhe a novidade</h3>
        <span>
          <hr />
        </span>
      </Section>
      <BoxText>
        <h6>
          Quer que seus amigos também ganhem a lista personalizada deles?
          Preencha agora!
        </h6>
      </BoxText>
      <BoxInputs>
        <InputForm
          label="Nome do seu amigo:"
          id="nomeAmigo"
          type="text"
          pattern=".{3}"
          required
          title="Nome completo necessário"
        />
        <InputForm label="E-mail" id="emailAmigo" type="email" required />
      </BoxInputs>
      <ButtonForm texto="Enviar agora" />
    </BoxFormNews>
  );
};

export default FormNews;
