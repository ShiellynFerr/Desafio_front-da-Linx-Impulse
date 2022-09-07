import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 8rem;

  .btn-produto {
    width: 260px;
    height: 39px;
    font-size: 16px;
    letter-spacing: 0px;
    margin-top: 2rem;
    color: #888888;
    opacity: 1;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #707070;
    border-radius: 4px;
    opacity: 1;
    text-align: center;
    cursor: pointer;
  }
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1rem;
  row-gap: 5rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  gap: 10px;

  figure {
    width: 200px;
    height: 150px;
    border: 1px solid #707070;
    opacity: 1;
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  h6 {
    text-align: left;
    font-size: 16px;
    letter-spacing: 0px;
    color: #888888;
    opacity: 1;
  }

  span {
    text-align: left;
    font-size: 12px;
    letter-spacing: 0px;
    color: #888888;
    opacity: 1;
  }

  button {
    width: 200px;
    height: 30px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #707070;
    border-radius: 4px;
    opacity: 1;
    cursor: pointer;
  }

  .desc {
    font-size: 14px;
    letter-spacing: 0px;
    color: #888888;
    opacity: 1;
  }

  .valor {
    text-align: left;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0px;
    color: #888888;
    opacity: 1;
  }
`;
