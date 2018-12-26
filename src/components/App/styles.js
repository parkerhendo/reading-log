import styled from 'styled-components';

export const App = styled.div`
  height: 100vh;
  width: 100vw;
  background: #f4f4f4;
  display: grid;
  grid-template-rows: 88px 56px;
  /* grid-template-columns: repeat(auto-fill, 1fr); */
  grid-template-areas:
    "menu menu menu"
    "filter filter filter"
    "book book book"
`;