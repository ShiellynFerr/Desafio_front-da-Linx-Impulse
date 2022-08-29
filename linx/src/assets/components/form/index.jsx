import React from "react";
import InputForm from "../inputForm";
import { BoxCheck, ButtonForm, FormBox, Section } from "./style";

const Form = () => {
  return (
    <Section>
      <div className="form-text">
        <h2>Ajude o algorítimo a ser mais certeiro</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris
          rhoncus erat sed interdum dignissim. Suspendisse semper pretium
          consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus
          quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia
          euismod augue vel egestas. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel
          urna tortor. Vivamus et arcu non felis tristique eleifend.
        </p>
        <p> Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla varius elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra, magna ac luctus commodo, odio ante suscipit libero, at mattis augue est vel metus.</p>
      </div>
      <FormBox>
        <div>
          <InputForm label="Seu nome:" id="nome" />
          <InputForm label="E-mail" id="email" type="email" />
          <InputForm label="CPF:" id="cpf" />
        </div>
        <BoxCheck>
          <div className="check">
            <input id="masc" type="radio" name="sexo" />
            <label for="masc">Masculino</label>
          </div>
          <div>
            <input id="fem" type="radio" name="sexo" />
            <label for="fem">Feminino</label>
          </div>
        </BoxCheck>
        <ButtonForm>Enviar</ButtonForm>
      </FormBox>
    </Section>
  );
};

export default Form;
