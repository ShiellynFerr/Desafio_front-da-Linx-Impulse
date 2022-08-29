import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  gap: 4rem;

  .form-text {
    max-width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }

  .form-text h2 {
    text-align: center;
    font-size: 20px;
    letter-spacing: 0px;
    color: #888888;
    opacity: 1;
  }

  p {
    text-align: justify;
    font-size: 14px;
    letter-spacing: 0px;
    color: #888888;
    opacity: 1;
    width: 90%;
  }
`;

export const FormBox = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

export const BoxCheck = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8rem;
  gap: 50px;
  /* background-color: #184f80; */
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
  input {
    top: 633px;
    left: 984px;
    width: 14px;
    height: 14px;
    /* UI Properties */
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #707070;
    opacity: 1;
  }

  label {
    top: 633px;
    left: 889px;
    width: 55px;
    height: 14px;
    /* UI Properties */
    text-align: left;
    font: normal normal normal 12px/14px Helvetica Neue;
    letter-spacing: 0px;
    color: #888888;
    opacity: 1;
  }
`;

export const ButtonForm = styled.button`
  top: 670px;
  left: 870px;
  width: 340px;
  height: 39px;
  /* UI Properties */
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  border-radius: 4px;
  opacity: 1;
`;
