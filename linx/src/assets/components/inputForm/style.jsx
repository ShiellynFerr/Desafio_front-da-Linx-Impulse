import styled from "styled-components";

export const BoxInput = styled.div`
 
 display: flex;
 flex-direction: column;
 padding: 1rem;

  input {
    top: 441px;
    left: 870px;
    width: 340px;
    height: 30px;
    /* UI Properties */
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #707070;
    opacity: 1;
  }

  input:focus{
    --c-outline:#422256;
  outline: 1px solid var(--c-outline);
  /* outline-offset: 2px; */
}



  label {
  font-size: 14px;
  text-align: left;
  font-size: 12px;
  letter-spacing: 0px;
  color: #888888;
  opacity: 1;
  margin-bottom: 2px;
  }
`;

