import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  grid-area: 'menu';
  width: 80%;
  height: 48px;
  background: #fff;
  border-radius: 8px;
  margin-top: 32px;
  padding: 4px 32px;
  box-shadow: 0 25px 35px -20px rgba(25, 25, 25, 0.07);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-family: -apple-system, sans-serif;
  font-size: 1.1rem;
`;

export const Stat = styled.h4`
  font-family: -apple-system, sans-serif;
  font-size: 0.9rem;
  margin-left: 2rem;
  &:first-of-type {
    margin-left: 0;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CTAButton = styled.button`
  
`;