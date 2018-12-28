import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  top: 32px;
  margin: 0 auto;
  grid-area: menu;
  width: 80%;
  height: 48px;
  background: #fff;
  border-radius: 8px;
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

export const Input = styled.input`
  max-width: 500px;
  min-width: 300px;
  min-height: 32px;
  padding: 2px 16px;
  background: #f4f4f4;
  margin-right: 32px;
  text-align: center;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-weight: 600;
    color: #c0c0c0;
  }
`;

export const AddButton = styled.button`
  outline: none;
  border: none;
  min-width: 64px;
  min-height: 36px;
  border-radius: 6px;
  padding: 8px 16px;
  color: #fff;
  background: #000;
`;