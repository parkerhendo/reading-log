import styled from 'styled-components';

export const ActiveButton = styled.div`
  height: 32px;
  width: 104px;
  padding: 8px 16px;
  color: #fff;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InactiveButton = styled.div`
  height: 32px;
  width: 104px;
  padding: 8px 16px;
  border: 2px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FilterContainer = styled.div`
  grid-area: filter;
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;
`;