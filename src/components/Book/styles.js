import styled from 'styled-components';

export const BookCell = styled.div`
  width: 96.2%;
  height: 64px;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 25px 35px -20px rgba(25, 25, 25, 0.07);
  display: flex;
  padding: 0 24px;
  margin-bottom: 24px;
  &::last-of-type {
    margin-bottom: 0;
  }
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h3`
  font-weight: bold;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ReadingToggle = styled.input`
  margin-left: 8px;
`;