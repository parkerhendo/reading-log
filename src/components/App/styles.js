import styled from 'styled-components';

export const App = styled.div`
  min-height: 100%;
  width: 100vw;
  background: #f4f4f4;
  display: grid;
  grid-template-rows: 88px 56px repeat(auto-fill, 64px);
  grid-template-areas:
    "menu menu menu"
    "filter filter filter"
    "book book book"
`;