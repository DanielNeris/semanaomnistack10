import styled from 'styled-components';

export const Aside = styled.aside`
  width: 320px;
  background: #fff;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 30px 20px;

  strong {
    font-size: 20px;
    text-align: center;
    display: block;
    color: #333;
  }

  form {
    margin-top: 30px;
  }
`;

export const MainDiv = styled.main`
  flex: 1;
  margin-left: 30px;
  width: 100%;

  @media (max-width: 650px) {
    ul {
      grid-template-columns: 1fr;
    }
  }
`;

export const DevList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  list-style: none;
`;

